# Changelog

## HEAD
### Removed
- Dropped vendor-related mixins in favor of mandatory [Autoprefixer](https://github.com/postcss/autoprefixer): `ekzo-vendor()`, `ekzo-placeholder()` and `ekzo-keyframe()`
- Dropped mixin `ekzo-headings()`
### Added
- Added functions and mixins names in error messages
### Changed
- Renamed function `map-get-deep()` to `ekzo-get()`
- Renamed function `ekzo-convert-direction()` to `ekzo-flip-direction()`
- `ekzo-breakpoint()` now accepts 3 parameters: `breakpoint`, `path` and `map` (backward compatible)
- `ekzo-breakpoint()` mixin now produces better class names. For example: `1/2@lap` instead of `lap-1/2`