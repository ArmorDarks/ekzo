# Changelog

## HEAD
### Removed
- [BREAKING] Dropped vendor-related mixins in favor of mandatory [Autoprefixer](https://github.com/postcss/autoprefixer): `ekzo-vendor()`, `ekzo-placeholder()` and `ekzo-keyframe()`
- [BREAKING] Dropped mixin `ekzo-headings()`. It was never used.
- Dropped `debug.scss` support. It shoudn't be part of Ekzo's core
- Dropped `$ekzo-line-height-ratio` variable — there isn't much sense to keep it in settings by default, since can be easily calculated on demand. Were never used.
- `ekzo-font-size-classes()` no longer accepts `$name` parameter. For generation of single font-size class should be used new mixin `ekzo-font-size-class()`
- [BREAKING] Due to introduction of theming support, all colors-realated variables dropped in favor of new map. See changes below for details.
- [BREAKING] dropped ability to predefine border styles for links with ekzo variables. Define those styles manually instead.
- [BREAKING] dropped ability to predefine border styles for buttons with ekzo variables. Define those styles manually instead.
- [BREAKING] dropped ability to predefine `:hover` colors for buttons with ekzo variables. Define those styles manually instead.
- [BREAKING] dropped predefined colors for positive, negative and disabled buttons. Too opinionated for foundation.
- [BREAKING] dropped `ekzo-font-size-class()` and `ekzo-font-size-classes()` mixins, since they were way too overengineered and excessive. Use simpler and more clear `@each` instead.
- Dropped not needed anymore `str-replace()` function. Use external snippet it you need it.
- Dropped `.o-btn--reset`. You should architecture your styles in the way that you need to reset something back to it's initial values
- [BREAKING] Dropped `.o-grid--floated`, since it no longer needed with flex grid
- [BREAKING] Dropped `.o-grid--flag`. Use `.h-flex-y--center` instead
- [BREAKING] Dropped `.o-grid--center`, `.o-grid--middle` and `.o-grid--bottom`. Use `.h-flex-x--center`, `.h-flex-y--center` and `.h-flex-y--end` instead.
- [BREAKING] Dropped `.o-grid--auto`. There were no use in it.
- [BREAKING] Dropped support of `.o-flag`, since `.o-media` from now uses flexbox model and its items can be aligned vertically seamlessly with `.h-flex-y--*`. You still can emulate `.o-flag` behaviour with `.h-table` and `.h-table__cell` helpers if you really need to have your items aligned vertically even in older browsers, but in most of other cases it's acceptable graceful degradation. Farewell, dear friend. You served us well, but it's time to give a place for more modern approaches.
- [BREAKING] removed `.o-a-nav`. Its functionality merged into `.o-nav`
- [BREAKING] removed `.o-floated-nav`. With new flexbox `.o-nav` it no longer needed
- [BREAKING] removed `.o-pack`. Its functionality merged into `.o-nav--pack` and `.o-nav--fixed-pack`. In IE8 and IE9 new modifiers will fallback to old behaviour of `.o-pack` for compitability reasons.

### Added
- Added theming support wich allows to save modular project structure. With default settings place `t-base` class on any element you want to get default styling.
  * Add new themes or redefine old ones with `ekzo-extend-themes((red: (text-color: red)))`.
  * Add theme-related styling to any class with mixin and function `.foo { @include ekzo-theme() { color: ekzo-theme(text); } }`.
  * Switch on and off theming globaly with `$ekzo-enable-theming` option without deleting theme includes from classes
  For details about how it works and how to use head to `ekzo-theme()` mixin description.
- Added `$ekzo-colors` which upholds whole color pallete of website
- Added `ekzo-color()` function to quickly get value from `$ekzo-colors`
- Added automatic generation of colors classes based on `$ekzo-colors` and `$ekzo-themes`, as well as options to enable/disable it. By default you will get for each color from those maps (plus `inherit`, `transparent` and `currentColor` colors) following classes:
  * `h-color--{{ colorName }}` for `color` property
  * `h-bg-color--{{ colorName }}` for `background-color`
  * `h-border-color--{{ colorName }}` for `border-color`
  * `h-fill--{{ colorName }}` for `fill`
  * `h-stroke--{{ colorName }}` for `stroke`
  
  This will also produce `:hover` + `:focus` classes:
  
  * `h-color--{{ colorName }}:h` for `color`
  * `h-bg-color--{{ colorName }}:h` for `background-color`
  * `h-border-color--{{ colorName }}:h` for `border-color`
  * `h-fill--{{ colorName }}:h` for `fill`
  * `h-stroke--{{ colorName }}:h` for `stroke`
- Added option `$ekzo-responsive-helpers-breakpoints` which allows to list breakpoints for which will be automatically generated helper classes
- Added mixin `ekzo-each-breakpoint()` for fast inclusion of certain classes for each breakpoint, listed in `$ekzo-responsive-helpers-breakpoints`
- Added `ekzo-set-temp()` mixin which allows to pass values from mixins into `@content`, `ekzo-temp()` function to retrive value and `ekzo-purge-temp()` mixin to clear temp. See `ekzo-each-breakpoint()` for example. Hacky.
- Added responsive display helpers and options to switch them on or off.
- Added responsive positioning helpers and options to switch them on or off.
- Added responsive typography helpers and options to switch them on or off.
- Added functions `ekzo-font-family()` and `ekzo-ui-font-family` to quickly get values from font-families maps
- Added automatic generation of helpers based on provided font-families and options to enable/disable them
- Added `$ekzo-list-style-type` option to set default list style
- Added option to set monospace font;
- Added generic styling for `code`, `pre`, `samp` and `kbd`. Also, added options for their font-sizes and font-families
- Added `h-font-weight--inherit` helper
- Added `h-font-weight--lighter` helper
- Added `h-text--lowercase` helper
- Added `h-text--caps` helper
- Added options `$ekzo-widths-fractions` and `$ekzo-responsive-widths-fractions` to control generated widths
- Added option `$ekzo-ns` which allows to set global namespace for class names. By default set to `''`
- Added `ekzo-strip-units()` function which allows to remove units from the value
- Added `ekzo-units()` function which allows to convert units. Relies on Sass math to prevent conversion of incompatible units.
- Added more positional helpers, including ability to quickly set `top: 0` with `.position--top`, or cover relative parent with `top: 0; right: 0; bottom: 0; left: 0;` via simple `.position--cover`
- Added `.h-overflow-x--auto` helper, which can make tables friendlier to small screens
- Added all overflow styles as helpers
- Added ability to style `::selection`
- Added options to control namespacing for class types: `$ekzo-generics-ns`, 
`$ekzo-objects-ns`, `$ekzo-scopes-ns` and `$ekzo-helpers-ns`
- Added quite handy `.h-font-weight--bolder` helper class
- Added `ekzo-font-size-class()` mixin for generation of single font-size class
- Added functions and mixins names in error messages
- Added `$ekzo-enable-widths` option for enabling/disabling widths
- Added `ekzo-rem()` function, which converts pxs into rems
- Added global map `$ekzo-z-indexes` and `ekzo-z-index(_z-index-name_)` function to get values from it
- Added `ekzo-line-height()` mixin for generating vertical rhythm based line-heights
- `ekzo-font-size-classes()` mixin now accepts `$postfix` parameter
- `ekzo-breakpoint()` now accepts 3 parameters: `breakpoint`, `path` and `map` (backward compatible)
- Added experimental universal inheritance from satinize.css
- Added `.font-family--inherit`
- Added predefined variables with typography font stacks
- Added `o-relink`, `o-relink__to`, `o-relink-rev`, `o-relink-rev__to` (and reusable `ekzo-relink()` mixin, which produces it), which allows to reposition link style to any child element of anchor. Note: `-rev` with single dash isn't typo, since due to technical reason it isn't modificator, but standalone object.
- Added ability to predefine default color for `hr`
- Added `border-width: 0` to `.o-btn` to prevent appearing of borders on buttons in case of defined borders on `a`. Override in your own styles if needed.
- Added a11y-related ability to disable outlines on links, buttons and forms. Enabled by default
- Added `.h-border`, `.h-border-top`, `.h-border-left`, `.h-border-right` and `.h-border-bottom` which sets `border-width` to `1px`
- Added `.h-border0`, `.h-border-top0`, `.h-border-left0`, `.h-border-right0` and `.h-border-bottom0` which sets `border-width` to `0px`
- Added `h-align--baseline` helper which sets `vertical-align: baseline`
- Added `h-font-size--inherit` helper which forces inheritance of `font-size`
- Added predefined `h-text-truncate` which will force truncation of texts if it's longer than one line
- Added `h-text--break-word` which allows to force line wrapping of too long words
- Added large set of flex-related helpers
- Added ability to generate `h-font-size--em*` and `text--em*` helpers based on `$ekzo-font-sizes.ems` map
- Added `.o-show-grid` object which prints base vertical rhythm guides based on `ekzo-spacing(1)`
- `ekzo-font-size()` mixin now can accept `ems` as `$font-size` parameter even with `px` base line-height. It will try to generate line-height ratios properly
- Added `.h-text--tracked*` helpers which allows to make text tracking wider or narrower
- Added `.h-border\:h` and `.h-border-{{side}}\:h` helpers which sets `border-width` on `:hover` and `:focus`
- Added IE8 and IE9 hacks for flex helpers which can be mimicked. When used in conjuration with `.o-grid` they will provide at least something close to flex layout. Their possibilities isn't that wide, though.
- Apply default cursor on any `.is-default` class
- Added IE8 and IE9 fallbacks for `.o-nav--stacked`, `.o-nav--pack` and `.o-nav--fixed-pack`. This will yeild at least somehow visually close layout even on older browsers.
- Added `.h-margin-left--auto` and `.h-margin-right--auto` helpers for settings margin to `auto`

### Changed
- `grid` now generated by mixin
- `tools` from now have `index.scss` file. It makes it easier to import all mixins and functions whenever needed at once — in framework's `index.scss`, `ie.scss` or project's `style.scss`
- [BREAKING] Due to introduction of theming support, all `settings.colors.defaults.scss` from now represented as map of values wich should be wrapped into `ekzo-extend-themes()` mixin
- All Ekzo's classes updated to support theming out of box
- `$ekzo-bg` now expects everything normal for `background` property, except color, wich from now injected into `html` directly from `$ekzo-theme(base: ( bg-color: _value_ ) )`
- Updated `normalize.scss`, dropped some older normalizations. Currently it's based on v3.0.3 (head commit: https://github.com/necolas/normalize.css/commit/f41ef9b4918759dabc35599e014aaf3cfae3d8a1)
- `reset.scss` is now part of `normalize.scss`
- `$ekzo-global-border-box` is enabled by default
- Rearrenged settings, part of options moved to `misc` settings
- [BREAKING] extra-headings now have separate class name `h-extra-heading{modifier}` instead of being `h-text+`, `h-text++` and `h-text+++`
- [BREAKING] extra-headings not starts from `base`, instead of `+`. This means that `h-extra-heading+`, `h-extra-heading++` and `h-extra-heading+++` replaced with `h-extra-heading`, `h-extra-heading+`, `h-extra-heading++`
- [BREAKING] spacing helpers now outputed automatically based on provided in `$ekzo-margin-helpers-variations`, `$ekzo-bleed-helpers-variations` and `$ekzo-padding-helpers-variations` map of size variations
- Improved `h-text--hidden` helper
- [BREAKING] proper widths and spacing helpers mixins and options names
- [BREAKING] prefixed animation vars with `ekzo-`
- [BREAKING] сhanged font-families representation from variables to maps
- [BREAKING] improved and renamed default breakpoints in `$ekzo-breakpoints`. Default values optimized for mobile-first approach.
- [BREAKING] `$ekzo-breakpoints` now represented as flat map. Change option `$ekzo-responsive-helpers-breakpoints` to disable generation of helper classes for certain breakpoints.
- [BREAKING] each responsive helpers enabling/disabling option now accepts list of breakpoints for which responsive helpers should be generated. This allow to precisely select for which helpers which breakpoints should be generated. They also renamed from like `$ekzo-enable-responsive-display-helpers` to `ekzo-responsive-display-helpers-breakpoints` to better represent their nature. All options by default set to `$ekzo-responsive-helpers-breakpoints` value
- [BREAKING] replaced `$ekzo-spacing-unit` variable and its variations with `ekzo-spacing()` (`ekzo-spacing(.25)`, `ekzo-spacing(2)`, etc.) function
- [BREAKING] renamed `ekzo-font()` mixin to `ekzo-font-face()`
- [BREAKING] Renamed `_framework.scss` to `_index.scss` for better clarity
- [BREAKING] All classes by default namespaced by its type. For example: `o-grid` instead of `grid`
- [BREAKING] Renamed function `map-get-deep()` to `ekzo-get()`
- [BREAKING] Renamed function `ekzo-convert-direction()` to `ekzo-flip-direction()`
- [BREAKING] `ekzo-breakpoint()` mixin now produces better class names. For example: `1/2@lap` instead of `lap-1/2`
- [BREAKING] Refactored `ekzo-font-size()` mixin. It now accepts `$font-size` instead of `$size` as firt parameter. Returned missing `only` possible value for `$line-height`. It also now can accept any units for `$font-size`, but they should always match `$line-heigt` units.
- [BREAKING] Similarly to new `ekzo-rem()` function, `ekzo-percent()`  and `ekzo-em()` functions now accepts only values with same units (or both unitless). It will try to convert values with Sass math intelligently, though. If you've converted somewhere impossible to convert units, you will receive an Error now.
- [BREAKING] Forced immutability via `!important` declaration of positional helpers like `.position--relative` which were by accident mutable before
- `.o-reline__to` will from now set not only `:hover`, but also `:focus` and `:active` because of accessibility reasons
- `.o-border-reline` _(renamed to to `.o-reline-border-bottom`)_ refactored, it will try to inherit as much as possible values and no logner relies on `$ekzo-links-border-bottom-width` and `$ekzo-links-border-bottom-style` variables. Some older styles might be affected, though
- [BREAKING] renamed `.o-border-reline` to `.o-reline-border-bottom`
- [BREAKING] refactored `.h-text--underline--rev` into `.h-text--underline:h` which now is single responsible for adding of undernline on `:hover` and `:focus`. It no longer removes `underline`, use `.h-text--underline--flush` for it. It also now applies styles not only to `:hover`, but also `:focus` and `:active` because of accessibility reasons
- [BREAKING] refactored `.h-text--underline--border` to more generic `.h-border-bottom`
- [BREAKING] refactored `.h-text--underline--border--rev` into `.h-border-bottom:h` which from now resposible only for adding bottom border on hover, added `:focus` and `:active` states because of accessibility reasons
- [BREAKING] inputs styles from now won't apply to `label`
- [BREAKING] renamed `.g-text-input` to more obvious `.g-input`
- [BREAKING] `.g-link--flush` from now does not rely on border variables and instead inherits as much as possible to make link similar to outer text. It will also inherit `:hover`, `:focus` and `:active` states. To reflect better its new nature, renamed to `g-link--inherit`
- [BREAKING] replaced `$ekzo-links-underline` and `$ekzo-links-hover-unline` with `$ekzo-links-text-decoration` and `$ekzo-links-hover-text-decoration` which acs as much intelligent way to set default link underlines
- [BREAKING] replaced `$ekzo-btn-unline` with `$ekzo-btn-text-decoration`, added missing `$ekzo-btn-hover-text-decoration`. They now works same as similar links-related variables
- [BREAKING] from now outlines by default are enabled for a11y reasons
- [BREAKING] replaced `.h-muted` helper by set of `.h-opacity--{{value}}` and `.h-opacity--{{value}}:h` helpers
- Typography helpers no longer using `ekzo-font-size-classes()` mixin and relies on simple `@each`
- Refactored `ekzo-font-size()` mixin
- [BREAKING] renamed `h-cursor--arrow` to `h-cursor--default`
- From now framework will internally extend only via silent classes to avoid bloat
- [BREAKING] moved `.h-clear` to objects and renamed to `.o-clearfix` to avoid confusion with natural float clears
- Fixed not inherited `padding` and `vertical-align` at `.o-btn--inherit`
- Fixed removal of paddings at `o-btn--full`, enforced `border-box` model on it to prevent conflict between paddings and width
- [BREAKING] renamed `.o-btn--wide\+`, `.o-btn--wide\+--`, `.o-btn--wide\+\+\+` to  `.o-btn--wide`, `.o-btn--wide--`, `.o-btn--wide\+\+`
- Fixed wrongly applied hover text-decoration to `&` in `.o-btn`
- Fixed not applied hover text-decoration to `:focus` in `.o-btn`
- `.h-align--*` helpers no longer setting flex aligment. Use new `.h-flex--*` helpers for this
- `.o-grid__item` no longer sets `vertical-align: top`, because it doesn't work with flex anyway. That rule moved to IE8-9 related declaration
- [BREAKING] Renamed `.o-grid-` to `.o-grid--`
- Refactored `.o-media` to use flexbox. It will fallback to floats based version on IE8/9, but since floats can't be aligned vertically, they will always align to top
- [BREAKING] renamed `.o-media__image` to `.o-media__aside` to represent its purpose better
- Refactored `.o-nav` to use flexbox model. This mostly doesn't affect layout on newer browsers, except that there will be no white-space between childs. Use new `.o-nav--space` to emulate old white-space if you need it. New `.o-nav` also now includes functionality of old `.o-a-nav`, `.o-floated-nav` and `.o-pack`
- `o-nav--keywords` will now set delimeters on direct child anchors too, so that you can use it not on `ul`, but plain plain list of anchors
- [BREAKING] moved `.g-extra-help` to `.o-extra-help`, since it seems to be more standalone object. By default it will also work on ':hover' too.
- [BREAKING] use `0` as modifier instead of `--flush` when we not "flushing", but actually setting value to `0`. In other words, instead `h-margin--flush` should be used `h-margin0`, etc. This concerns lists, tables, some typography helpers, spacing helpers, `o-media`, `o-grid`, `o-island`.
- `0` helpers for `margin`, `bleed` and `padding` from now generated based on relevant maps too, so you can disabled it in case you don't need it. By default it's included, so it won't break anything
- [BREAKING] renamed `.h-margin--center` to `.h-margin-sides--auto`