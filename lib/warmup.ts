
import { getAllProperties, getBeforeAfterProperties } from "./propertyData";

let warmed = false;

export async function warmupCache() {
  if (warmed) return; // run once
  warmed = true;

  try {
    console.log("⏳ Warming up Google Sheet cache...");
    await Promise.all([getAllProperties(), getBeforeAfterProperties()]);
    console.log("✅ Google Sheet data cached!");
  } catch (err) {
    console.error("⚠️ Warmup failed:", err);
  }
}
