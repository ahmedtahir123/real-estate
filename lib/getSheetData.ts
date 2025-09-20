import Papa from "papaparse";
// lib/getSheetData.ts

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7qvnn70OAPreQ2E-pd6V5ZDRZDHYrMz7o8qnonS3RsIHkkltcjnxQ-ZuhWmWlekbpa07zZbFK6Fs9/pub?output=csv";

export async function getSheetData() {
  const res = await fetch(SHEET_URL, {
    next: { revalidate: 300 }, // ✅ cache for 5 min in Next.js
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Google Sheet CSV");
  }

  const text = await res.text();

  const parsed = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors.length) {
    console.error("❌ CSV Parse errors:", parsed.errors);
  }

  return parsed.data as any[]; // each row is now a clean JS object
}
