import cmsContent from "./content.cms.json";
import { SITE, type Dict, type Lang } from "./content";

// content.cms.json is written by scripts/fetch-content.mjs (prebuild) with
// the published CMS content. The committed fallback is {de: null, en: null},
// which leaves the checked-in content.ts in charge when the CMS is
// unreachable at build time.
const cms = cmsContent as unknown as Partial<Record<Lang, Dict | null>>;

export const CONTENT: Record<Lang, Dict> = {
  de: cms.de ?? SITE.de,
  en: cms.en ?? SITE.en,
};
