// One-off: seeds the CMS with the content from src/content/content.ts.
// Run with tsx so the TypeScript import works:
//
//   CMS_URL=https://cms.morcos.tech CMS_ADMIN_TOKEN=… npx -y tsx scripts/export-content.mjs
//
import { SITE } from "../src/content/content.ts";

const CMS_URL = process.env.CMS_URL || "https://cms.morcos.tech";
const TOKEN = process.env.CMS_ADMIN_TOKEN;
if (!TOKEN) {
  console.error("CMS_ADMIN_TOKEN is required");
  process.exit(1);
}

const payload = {
  // media lives in the default locale only (non-localized section); empty
  // portraitUrl means "use the bundled /lea-portrait.jpg".
  de: { ...SITE.de, media: { portraitUrl: "" } },
  en: SITE.en,
};

const res = await fetch(`${CMS_URL}/api/admin/sites/lea/import`, {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Admin-Token": TOKEN },
  body: JSON.stringify(payload),
});
if (!res.ok) {
  console.error(`Import failed: HTTP ${res.status} — ${await res.text()}`);
  process.exit(1);
}
console.log("Content imported into the CMS.");
