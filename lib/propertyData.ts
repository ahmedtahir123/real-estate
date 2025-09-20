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
  beforeImages: string[];
  afterImages: string[];
  renovationDescription: string;
  projectDuration: string;
  renovationCost: string;
  renovationYear: string;
  status: string;
  type: string;
}

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
    beforeImages: row.beforeImages ? row.beforeImages.split(",").map((url: string) => url.trim()) : [],
    afterImages: row.afterImages ? row.afterImages.split(",").map((url: string) => url.trim()) : [],
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
  return rows.filter((r) => r.type && (r.type === 'rent' || r.type === 'sale')).map(mapToProperty);
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
  return rows.filter((r) => r.beforeImages?.length > 0 && r.afterImages?.length > 0);
}

export async function getAllPropertyIds() {
  const data = await getAllProperties();
  // This is a placeholder. In a real app, this would fetch from a database.
  return data.map(i => i.id);
}
