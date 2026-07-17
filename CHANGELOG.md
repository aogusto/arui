# Changelog

## 0.2.0

### Added
- AruiThemeProvider and applyAruiTint(tint, target?): set a tint (a preset name or any CSS color) to re-tone the highlight family (--primary, --ring, focus, GlassSurface tint="accent", the Tabs glass pill). It injects on document.documentElement, so portals (Dialog, Popover, Tooltip, Command) inherit it.
- GlassSurface tint prop ("accent" or any CSS color) to color the material.
- Tabs glass variant: an animated glass pill that springs between tabs, tinted by the theme.

### Fixed
- Tabs active state now renders in every variant. It previously keyed off data-active, which Radix never sets, so the active tab was not visually distinguished. This is a visible change when you upgrade, with no code change on your side.
- CommandDialog now wraps its children in the cmdk Command root, so CommandInput/CommandList work when used inside it.
- Command items now highlight only the active item (previously all items looked highlighted).

### Changed
- framer-motion is now a dependency (used by the Tabs glass pill).
