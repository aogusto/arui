// Fonte única da navegação de docs. Ordem e categorias fixas — bate com `ls src/components/ui`.
export type DocCategory =
  | "Signature"
  | "Forms & Inputs"
  | "Overlays"
  | "Navigation"
  | "Data & Display"
  | "Feedback & Utilities"

export type DocEntry = { slug: string; name: string; category: DocCategory }

export const DOCS_CATEGORIES: DocCategory[] = [
  "Signature",
  "Forms & Inputs",
  "Overlays",
  "Navigation",
  "Data & Display",
  "Feedback & Utilities",
]

export const DOCS_REGISTRY: DocEntry[] = [
  { slug: "glass-surface", name: "Glass Surface", category: "Signature" },
  { slug: "button", name: "Button", category: "Forms & Inputs" },
  { slug: "button-group", name: "Button Group", category: "Forms & Inputs" },
  { slug: "input", name: "Input", category: "Forms & Inputs" },
  { slug: "input-group", name: "Input Group", category: "Forms & Inputs" },
  { slug: "input-otp", name: "Input OTP", category: "Forms & Inputs" },
  { slug: "textarea", name: "Textarea", category: "Forms & Inputs" },
  { slug: "label", name: "Label", category: "Forms & Inputs" },
  { slug: "field", name: "Field", category: "Forms & Inputs" },
  { slug: "form", name: "Form", category: "Forms & Inputs" },
  { slug: "checkbox", name: "Checkbox", category: "Forms & Inputs" },
  { slug: "radio-group", name: "Radio Group", category: "Forms & Inputs" },
  { slug: "switch", name: "Switch", category: "Forms & Inputs" },
  { slug: "select", name: "Select", category: "Forms & Inputs" },
  { slug: "native-select", name: "Native Select", category: "Forms & Inputs" },
  { slug: "slider", name: "Slider", category: "Forms & Inputs" },
  { slug: "toggle", name: "Toggle", category: "Forms & Inputs" },
  { slug: "toggle-group", name: "Toggle Group", category: "Forms & Inputs" },
  { slug: "combobox", name: "Combobox", category: "Forms & Inputs" },
  { slug: "calendar", name: "Calendar", category: "Forms & Inputs" },
  { slug: "dialog", name: "Dialog", category: "Overlays" },
  { slug: "alert-dialog", name: "Alert Dialog", category: "Overlays" },
  { slug: "sheet", name: "Sheet", category: "Overlays" },
  { slug: "drawer", name: "Drawer", category: "Overlays" },
  { slug: "popover", name: "Popover", category: "Overlays" },
  { slug: "tooltip", name: "Tooltip", category: "Overlays" },
  { slug: "hover-card", name: "Hover Card", category: "Overlays" },
  { slug: "dropdown-menu", name: "Dropdown Menu", category: "Overlays" },
  { slug: "context-menu", name: "Context Menu", category: "Overlays" },
  { slug: "menubar", name: "Menubar", category: "Overlays" },
  { slug: "command", name: "Command", category: "Overlays" },
  { slug: "tabs", name: "Tabs", category: "Navigation" },
  { slug: "breadcrumb", name: "Breadcrumb", category: "Navigation" },
  { slug: "pagination", name: "Pagination", category: "Navigation" },
  { slug: "navigation-menu", name: "Navigation Menu", category: "Navigation" },
  { slug: "sidebar", name: "Sidebar", category: "Navigation" },
  { slug: "table", name: "Table", category: "Data & Display" },
  { slug: "badge", name: "Badge", category: "Data & Display" },
  { slug: "avatar", name: "Avatar", category: "Data & Display" },
  { slug: "card", name: "Card", category: "Data & Display" },
  { slug: "accordion", name: "Accordion", category: "Data & Display" },
  { slug: "carousel", name: "Carousel", category: "Data & Display" },
  { slug: "chart", name: "Chart", category: "Data & Display" },
  { slug: "progress", name: "Progress", category: "Data & Display" },
  { slug: "skeleton", name: "Skeleton", category: "Data & Display" },
  { slug: "separator", name: "Separator", category: "Data & Display" },
  { slug: "aspect-ratio", name: "Aspect Ratio", category: "Data & Display" },
  { slug: "scroll-area", name: "Scroll Area", category: "Data & Display" },
  { slug: "resizable", name: "Resizable", category: "Data & Display" },
  { slug: "kbd", name: "Kbd", category: "Data & Display" },
  { slug: "empty", name: "Empty", category: "Data & Display" },
  { slug: "item", name: "Item", category: "Data & Display" },
  { slug: "spinner", name: "Spinner", category: "Data & Display" },
  { slug: "alert", name: "Alert", category: "Data & Display" },
  { slug: "collapsible", name: "Collapsible", category: "Data & Display" },
  { slug: "sonner", name: "Sonner (Toaster)", category: "Feedback & Utilities" },
  { slug: "direction", name: "Direction", category: "Feedback & Utilities" },
]
