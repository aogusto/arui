# Changelog

## 0.2.0

### Added
- Glass highlight system: an animated glass pill (glassmorphism) that slides to the active or highlighted item, tinted by the theme and respecting prefers-reduced-motion. Exported as useGlassHighlight and GlassPill so you can add the same highlight to your own components.
- Glass highlight on active states: Tabs (glass variant), ToggleGroup (single), Sidebar, NavigationMenu, and Pagination now show the glass pill on the active item.
- AruiThemeProvider and applyAruiTint(tint, target?): set a tint (a preset name or any CSS color) to re-tone the highlight family (--primary, --ring, focus, GlassSurface tint="accent", the glass pill). It injects on document.documentElement, so portals (Dialog, Popover, Tooltip, Command) inherit it.
- GlassSurface tint prop ("accent" or any CSS color) to color the material.

### Changed
- Menu highlights now use the glass pill by default. In DropdownMenu, ContextMenu, Menubar, Select, Command, and Combobox the highlighted item (keyboard or hover) shows the tinted glass pill instead of a flat background. This is a visible change when you upgrade, with no code change on your side.
- framer-motion is now a dependency (used by the glass pill).

### Fixed
- Switch, Checkbox, and RadioGroup now render their checked/on state, and Dialog, Sheet, AlertDialog, Popover, Tooltip, HoverCard, and Accordion now animate open and closed. These radix components keyed their state styles off presence variants (data-checked, data-open, ...) that radix never sets; they now use data-[state=...], which is what radix emits. The Switch and Checkbox were invisible in light mode before this. This bug predates 0.2.0.
- Submenus in DropdownMenu, ContextMenu, and Menubar are no longer clipped or unclickable. Their SubContent is now portaled, so the parent menu's glass backdrop and overflow no longer trap the floating submenu. This bug predates 0.2.0 (it shipped in 0.1.0) and only affected these glass menus.
- Sidebar highlight now applies only to the active item. It previously keyed off a presence selector while React always renders data-active="false", so every item looked active.
- NavigationMenu open and active-link selectors now match what Radix actually emits (data-state and data-active), so the open trigger and active link are styled correctly. They previously targeted data-open, data-popup-open, and data-active="true", which Radix never sets.
- Tabs active state now renders in every variant. It previously keyed off data-active, which Radix never sets, so the active tab was not visually distinguished. This is a visible change when you upgrade, with no code change on your side.
- CommandDialog now wraps its children in the cmdk Command root, so CommandInput/CommandList work when used inside it.
- Command items now highlight only the active item (previously all items looked highlighted).
