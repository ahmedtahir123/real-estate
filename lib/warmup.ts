
import { getAllProperties, getBeforeAfterProperties, getFeaturedVideos } from "./propertyData";

let warmed = false;

export async function warmupCache() {
  if (warmed) return; // run once
  

  try {
    warmed = true;
    console.log("⏳ Warming up Google Sheet cache...");
    await Promise.all([getAllProperties(), getBeforeAfterProperties()]);
    console.log("✅ Google Sheet data cached!");
  } catch (err) {
    warmed = false; // allow retry
    console.error("⚠️ Warmup failed:", err);
  }
}
