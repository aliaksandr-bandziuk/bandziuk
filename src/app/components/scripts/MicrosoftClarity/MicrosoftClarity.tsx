"use client";

import { useEffect } from "react";

export default function MicrosoftClarity() {
  useEffect(() => {
    (function (c: any, l: Document, a: string, r: string, i: string) {
      if (c[a]) return; // не инициализировать повторно (dev strict mode защита)

      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };

      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0];
      if (y && y.parentNode) {
        y.parentNode.insertBefore(t, y);
      } else {
        l.head.appendChild(t);
      }
    })(window, document, "clarity", "script", "shkdmxspc0"); // <- твой ID
  }, []);

  return null;
}
