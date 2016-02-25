# Changelog

## HEAD
### Removed
- Dropped vendor-related mixins in favor of mandatory [Autoprefixer](https://github.com/postcss/autoprefixer): `ekzo-vendor()`, `ekzo-placeholder()` and `ekzo-keyframe()`
### Added
- Added functions and mixins names in error messages
### Changed
- Renamed function `map-get-deep()` to `ekzo-get()`
- Renamed function `ekzo-convert-direction()` to `ekzo-flip-direction()`