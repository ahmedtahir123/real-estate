import { getSheetData } from "./getSheetData";

// lib/properties.ts
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  images: string[];
  type: "rent" | "sale";
  isFeatured: boolean;
  features?: string[];
}

export interface RenovationProperty {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  renovationDescription: string;
  projectDuration: string;
  renovationCost: string;
  renovationYear: string;
  status: string;
  type: string
}

// const SHEET_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7qvnn70OAPreQ2E-pd6V5ZDRZDHYrMz7o8qnonS3RsIHkkltcjnxQ-ZuhWmWlekbpa07zZbFK6Fs9/pub?output=csv";

// // Convert CSV -> rows
// async function getSheetData() {
//   const res = await fetch(SHEET_URL, { next: { revalidate: 300 } }); // ✅ cache 5 min
//   const text = await res.text();
//   const rows = text.split("\n").map((r) => r.split(","));
//   const headers = rows[0].map((h) => h.trim());

//   return rows.slice(1).map((row) =>
//     Object.fromEntries(row.map((val, i) => [headers[i], val.trim()]))
//   );
// }

// Mapping functions
function mapToProperty(row: any): Property {
  return {
    id: row.id?.trim() || crypto.randomUUID(),
    title: row.title?.trim() || "Untitled Property",
    price: row.price?.trim() || "",
    location: row.location?.trim() || "",
    bedrooms: Number(row.bedrooms) || 0,
    bathrooms: Number(row.bathrooms) || 0,
    area: Number(row.area) || 0,
    description: row.description?.trim() || "",
    images: row.images
      ? row.images.split(",").map((url: string) => url.trim())
      : [],
    type: row.type?.toLowerCase() === "rent" ? "rent" : "sale",
    isFeatured:
      row.isFeatured?.toLowerCase() === "true" ||
      row.isFeatured === "1" ||
      row.isFeatured === "yes",
    features: row.features
      ? row.features.split(",").map((f: string) => f.trim())
      : [],
  };
}

function mapToRenovationProperty(row: any): RenovationProperty {
  return {
    id: row.id?.trim() || crypto.randomUUID(),
    title: row.title?.trim() || "Untitled Renovation",
    location: row.location?.trim() || "",
    beforeImage: row.beforeImage?.trim() || "",
    afterImage: row.afterImage?.trim() || "",
    renovationDescription: row.renovationDescription?.trim() || "",
    projectDuration: row.projectDuration?.trim() || "",
    renovationCost: row.renovationCost?.trim() || "",
    renovationYear: row.renovationYear?.trim() || "",
    type: "renovate",
    status: row.status?.trim() || "Planned",
  };
}

// Public API
export async function getAllProperties(): Promise<Property[]> {
  const rows = await getSheetData();
  return rows.filter((r) => r.type).map(mapToProperty);
}

export async function getRenovationProperties(): Promise<RenovationProperty[]> {
  const rows = await getSheetData();
  return rows.filter((r) => r.type === "renovate").map(mapToRenovationProperty);
}


export async function getRentalProperties(): Promise<Property[]> {
  const data = await getAllProperties();
  return data.filter((p) => p.type === "rent");
}

export async function getSaleProperties(): Promise<Property[]> {
  const data = await getAllProperties();
  return data.filter((p) => p.type === "sale");
}

export async function getFeaturedProperties(): Promise<Property[]> {
  const data = await getAllProperties();
  return data.filter((p) => p.isFeatured);
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const data = await getAllProperties();
  return data.find((p) => p.id === id) || null;
}

export async function getBeforeAfterProperties(): Promise<RenovationProperty[]> {
  const rows = await getRenovationProperties();
  return rows.filter((r) => r.beforeImage && r.afterImage).map(mapToRenovationProperty);
}

export async function getAllPropertyIds() {
  const data = await getAllProperties();
  // This is a placeholder. In a real app, this would fetch from a database.
  return data.map(i => i.id);
}
