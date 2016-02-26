# Changelog

## HEAD
### Removed
- [BREAKING] Dropped vendor-related mixins in favor of mandatory [Autoprefixer](https://github.com/postcss/autoprefixer): `ekzo-vendor()`, `ekzo-placeholder()` and `ekzo-keyframe()`
- [BREAKING] Dropped mixin `ekzo-headings()`

### Added
- Option to set global namespace via `$ekzo-ns` variable. By default set to `''`
- `ekzo-font-size-class()` mixin for generation of single font-size class
- Added functions and mixins names in error messages
- Added `$ekzo-enable-widths` option for widths
- `ekzo-font-size-classes()` mixin now accepts `$postfix` parameter
- `ekzo-breakpoint()` now accepts 3 parameters: `breakpoint`, `path` and `map` (backward compatible)

### Changed
- [BREAKING] Renamed function `map-get-deep()` to `ekzo-get()`
- [BREAKING] Renamed function `ekzo-convert-direction()` to `ekzo-flip-direction()`
- [BREAKING] `ekzo-breakpoint()` mixin now produces better class names. For example: `1/2@lap` instead of `lap-1/2`