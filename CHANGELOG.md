# Changelog

## HEAD
### Removed
- Dropped vendor-related mixins in favor of mandatory [Autoprefixer](https://github.com/postcss/autoprefixer): `ekzo-vendor()`, `ekzo-placeholder()` and `ekzo-keyframe()`
- Dropped mixin `ekzo-headings()`
### Added
- `ekzo-font-size-class()` mixin for generation of single font-size class
- Added functions and mixins names in error messages
- Added `$ekzo-enable-widths` option for widths
- `ekzo-font-size-classes()` mixin now accepts `$postfix` parameter
- `ekzo-breakpoint()` now accepts 3 parameters: `breakpoint`, `path` and `map` (backward compatible)
### Changed
- Renamed function `map-get-deep()` to `ekzo-get()`
- Renamed function `ekzo-convert-direction()` to `ekzo-flip-direction()`
- `ekzo-breakpoint()` mixin now produces better class names. For example: `1/2@lap` instead of `lap-1/2`