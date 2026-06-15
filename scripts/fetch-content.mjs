// Fetches published content from the CMS at build time and writes it to
// src/content/content.cms.json, which src/content/loader.ts prefers over the
// checked-in content.ts. Any failure leaves the committed fallback in place
// and exits 0 so the build always succeeds — watch the log for the warning.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const CMS_URL = process.env.CMS_URL || "https://admin.morcos.tech";
const SITE_KEY = "lea";
const LOCALES = ["de", "en"];

// Top-level keys every locale dictionary must carry (mirrors the Dict type).
const REQUIRED_KEYS = [
  "nav", "cta", "moreAbout", "hero", "forWho", "aboutTeaser", "homeTopics",
  "homeSteps", "ctaBand", "about", "services", "topics", "fees", "booking",
  "contact", "faq", "impressum", "datenschutz", "footer",
];

const outFile = fileURLToPath(new URL("../src/content/content.cms.json", import.meta.url));

function fail(reason) {
  console.warn("");
  console.warn("##############################################################");
  console.warn(`## WARNING: CMS content fetch failed: ${reason}`);
  console.warn("## Building with the checked-in fallback content (content.ts).");
  console.warn("##############################################################");
  console.warn("");
  process.exit(0);
}

function validate(locale, dict) {
  if (!dict || typeof dict !== "object") return `locale ${locale}: not an object`;
  for (const key of REQUIRED_KEYS) {
    if (!(key in dict)) return `locale ${locale}: missing key "${key}"`;
  }
  if (!Array.isArray(dict.nav) || dict.nav.length === 0) return `locale ${locale}: nav is not a non-empty array`;
  if (!Array.isArray(dict.faq?.items)) return `locale ${locale}: faq.items is not an array`;
  return null;
}

try {
  const content = {};
  for (const locale of LOCALES) {
    const url = `${CMS_URL}/api/cms/v1/sites/${SITE_KEY}/content?locale=${locale}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) fail(`${url} → HTTP ${res.status}`);
    const body = await res.json();
    const problem = validate(locale, body.content);
    if (problem) fail(problem);
    content[locale] = body.content;
  }
  writeFileSync(outFile, JSON.stringify(content, null, 2) + "\n");
  console.log(`CMS content fetched from ${CMS_URL} → src/content/content.cms.json`);
} catch (err) {
  fail(err?.message || String(err));
}
