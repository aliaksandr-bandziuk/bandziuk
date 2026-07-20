// Single source of truth for the iconName dropdown across every schema
// field that uses it. Keep this in sync with the curated maps in
// src/app/components/ui/Icon/Icon.tsx (LUCIDE_ICONS + BRAND_ICONS) —
// duplicated rather than imported because that file pulls in React/JSX
// and lucide-react components that shouldn't leak into the Studio schema
// bundle.
export const ICON_NAME_OPTIONS = [
  { title: "Globe", value: "globe" },
  { title: "Code", value: "code" },
  { title: "Search", value: "search" },
  { title: "Layout", value: "layout" },
  { title: "Layers", value: "layers" },
  { title: "Gauge", value: "gauge" },
  { title: "Rocket", value: "rocket" },
  { title: "Wrench", value: "wrench" },
  { title: "Plug", value: "plug" },
  { title: "Database", value: "database" },
  { title: "Server", value: "server" },
  { title: "Shield Check", value: "shield-check" },
  { title: "Trending Up", value: "trending-up" },
  { title: "File Text", value: "file-text" },
  { title: "Message Circle", value: "message-circle" },
  { title: "Phone", value: "phone" },
  { title: "Mail", value: "mail" },
  { title: "Map Pin", value: "map-pin" },
  { title: "Settings", value: "settings" },
  { title: "Sparkles", value: "sparkles" },
  { title: "Target", value: "target" },
  { title: "Users", value: "users" },
  { title: "Zap", value: "zap" },
  { title: "Check", value: "check" },
  { title: "Link", value: "link" },
  { title: "WhatsApp (brand)", value: "whatsapp" },
  { title: "LinkedIn (brand)", value: "linkedin" },
  { title: "Facebook (brand)", value: "facebook" },
];
