"use client";

import React from "react";

/** Cal.com booking link in the form "user/event-type". */
const CAL_LINK = "pfaffeneder/psychologische-beratung";
/** Namespace derived from the event-type slug, used by Cal's embed API. */
const CAL_NAMESPACE = "psychologische-beratung";

/**
 * Inline Cal.com scheduler. Loads the official embed script once and renders the
 * calendar into the target element. No external React dependency required.
 */
export function CalEmbed({ className, style }: { className?: string; style?: React.CSSProperties }) {
  React.useEffect(() => {
    // Official Cal.com embed loader snippet (https://cal.com/docs/core-features/embed).
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", CAL_NAMESPACE, { origin: "https://cal.com" });
    Cal.ns[CAL_NAMESPACE]("inline", {
      elementOrSelector: "#cal-inline",
      config: { layout: "month_view" },
      calLink: CAL_LINK,
    });
    Cal.ns[CAL_NAMESPACE]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return <div id="cal-inline" className={className} style={{ width: "100%", overflow: "auto", ...style }} />;
}
