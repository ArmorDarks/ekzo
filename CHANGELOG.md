# Changelog

## HEAD
### Removed
- [breaking] Removed vendor-related mixins `ekzo-vendor()`, `ekzo-placeholder()` and `ekzo-keyframe()` in favor of mandatory [Autoprefixer](https://github.com/postcss/autoprefixer)
- [breaking] Removed mixin `ekzo-headings()`. It was never used.
- Removed `debug.scss` support. It shoudn't be part of Ekzo's core
- [breaking] Removed `$ekzo-line-height-ratio` variable — there isn't much sense to keep it in settings by default. Calculate on demand.
- [breaking] Removed all colors-realated variables due to introduction of theming support. See changes below for details.
- [breaking] Removed ability to predefine border styles for links with ekzo variables. Define those styles manually instead.
- [breaking] Removed ability to predefine border styles for buttons with ekzo variables. Define those styles manually instead.
- [breaking] Removed ability to predefine `:hover` colors for buttons with ekzo variables. Define those styles manually instead.
- [breaking] Removed predefined colors for positive, negative and disabled buttons. Too opinionated for foundation.
- [breaking] Removed `ekzo-font-size-class()` and `ekzo-font-size-classes()` mixins, since they were way too overengineered and excessive. Use simpler and more clear `@each` instead.
- Removed not needed anymore `str-replace()` function. Use external snippet it you need it.
- [breaking] Replaced `.h-muted` helper. Use new `.h-opacity--{{value}}` and `.h-opacity--{{value}}:h` helpers
- [breaking] Removed `.o-btn--reset`. You should architecture your styles in the way that you need to reset something back to it's initial values
- [breaking] Removed `.o-grid--floated`, since it no longer needed with flex grid
- [breaking] Removed `.o-grid--flag`. Use `.h-flex-y--center` instead
- [breaking] Removed `.o-grid--center`, `.o-grid--middle` and `.o-grid--bottom`. Use `.h-flex-x--center`, `.h-flex-y--center` and `.h-flex-y--end` instead.
- [breaking] Removed `.o-grid--auto`. There were no use in it.
- [breaking] Removed `.o-flag`, since `.o-media` from now uses flexbox model and its items can be aligned vertically seamlessly with `.h-flex-y--*`. You still can emulate `.o-flag` behaviour with `.h-table` and `.h-table__cell` helpers if you really need to have your items aligned vertically even in older browsers, but in most of other cases it's acceptable graceful degradation. Farewell, dear friend. You served us well, but it's time to give a place for more modern approaches.
- [breaking] Removed `.o-a-nav`. Its functionality merged into `.o-nav`
- [breaking] Removed `.o-floated-nav`. With new flexbox `.o-nav` it no longer needed
- [breaking] Removed `.o-pack`. Its functionality merged into `.o-nav--pack` and `.o-nav--fixed-pack`. In IE8 and IE9 new modifiers will fallback to old behaviour of `.o-pack` for compitability reasons.
- [breaking] Removed `.o-grid*` size modifiers, use new `.h-childs-displace*`
- [breaking] Removed `.o-island` size modifiers, use `.h-padding*` or `.h-margin*`
- [breaking] Removed `.o-nav--padding` size modifiers, use new `.h-anchors-padding*` o- -[breaking] anchors-margin*`
- [breaking] Removed `.g-table--padding` size modifiers, use new `.h-cell-padding*`
- [breaking] Removed `.g-list--indent`, use new `.h-childs-spacing*`
- [breaking] Removed `.g-list--margin`, use new `.h-childs-margin*`
- [breaking] Removed `.g-list--padding`, use new `.h-childs-padding*`
- [breaking] Removed default margin between two `fieldset`, use new `.h-childs-spacing*`

### Added
- Added theming support:
  * Add new themes or redefine old ones with `ekzo-extend-themes(theme-name, (text-color: red))`.
  * Add theme-related styling to any class with new mixin `.foo { @include ekzo-theme() { color: ekzo-theme(text); } }`.
  * Switch on and off theming globaly with `$ekzo-enable-theming` option without need to delete arleady defined theme mixins. When switched off, they will always use values from `base` theme
  * Use new theme class `.t-{{theme-name}}` anytime you want to apply your theme. Use `.t-base` to call main theme

  For details about how it works and how to use head to `ekzo-theme()` mixin description.

- Added `$ekzo-colors` which can uphoald color pallete of website
- Added `ekzo-color()` function to quickly get value from `$ekzo-colors`
- Added generation of colors helpers based on `$ekzo-colors` and `$ekzo-themes`, as well as options to enable/disable it. By default you will get for each color following helpers:
  * `.h-color--{{ colorName }}` for `color` property
  * `.h-bg-color--{{ colorName }}` for `background-color`
  * `.h-border-color--{{ colorName }}` for `border-color`
  * `.h-fill--{{ colorName }}` for `fill`
  * `.h-stroke--{{ colorName }}` for `stroke`
  
  This will also generate `:hover` + `:focus` classes:
  
  * `.h-color--{{ colorName }}:h` for `color`
  * `.h-bg-color--{{ colorName }}:h` for `background-color`
  * `.h-border-color--{{ colorName }}:h` for `border-color`
  * `.h-fill--{{ colorName }}:h` for `fill`
  * `.h-stroke--{{ colorName }}:h` for `stroke`
  
  And it will produce same clases for `inherit`, `transparent` and `currentColor` colors

- Added set of options `$ekzo-responsive-{{class-name}}-breakpoints` which allows to list breakpoints for which should be generated responsive helper classes
- Added mixin `ekzo-each-breakpoint()` which includes mixins with specified parameters for each specified breakpoint. Mostly used by Ekzo internally
- Added `ekzo-set-temp()` mixin which allows to pass values from mixins into `@content`, `ekzo-temp()` function to retrive value and `ekzo-purge-temp()` mixin to clear temp. See `ekzo-each-breakpoint()` for example. Hacky.
- Added functions `ekzo-font-family()` and `ekzo-ui-font-family()` to quickly get values from font-families maps
- Added option to set monospace font;
- Added `$ekzo-list-style-type` option to set default list style
- Added generic styling for `code`, `pre`, `samp` and `kbd` and settings for their font-sizes and font-families
- Added options `$ekzo-widths-fractions` and `$ekzo-responsive-widths-fractions` to control generated widths
- Added `ekzo-strip-units()` function which allows to remove units from the value
- Added `ekzo-units()` function which allows to convert units. Relies on Sass math to prevent conversion of incompatible units.
- Added `ekzo-rem()` function, which converts pxs into rems
- Added settings for styling `::selection`
- Added settings to control namespacing for class types: `$ekzo-generics-ns`, 
`$ekzo-objects-ns`, `$ekzo-scopes-ns` and `$ekzo-helpers-ns`
- Added functions and mixins names in error messages
- Added `$ekzo-enable-widths-helpers` option for enabling/disabling widths
- Added `$ekzo-z-indexes` map and `ekzo-z-index({{z-index-name}})` function to get values from it
- Added `ekzo-line-height()` mixin for generating vertical rhythm based line-heights. Previously it was available only as part of `ekzo-font-size()` mixin
- `ekzo-breakpoint()` now accepts 3 parameters: `$breakpoint`, `$path` and `$map` (backward compatible)
- Added experimental universal inheritance from satinize.css
- Added responsive display helpers and options to switch them on or off.
- Added responsive positioning helpers and options to switch them on or off.
- Added responsive typography helpers and options to switch them on or off.
- Added generation of helpers based on provided font-families and options to enable/disable them
- Added positional helpers for `top`, `bottom`, `left` and `right` properties, etc.
- Added `.h-position--cover` which sets `top: 0; right: 0; bottom: 0; left: 0;`
- Added `.h-overflow*` helpers
- Added `.h-font-weight--inherit` helper
- Added `.h-font-weight--lighter` helper
- Added `.h-font-weight--bolder` helper
- Added `.h-text--lowercase` helper
- Added `.h-text--caps` helper
- Added `.h-font-family--inherit`
- Added `.h-font-size--inherit` helper which forces inheritance of `font-size`
- Added `.h-align--baseline` helper which sets `vertical-align: baseline`
- Added predefined `.h-text-truncate` which will force truncation of texts if it's longer than one line
- Added `.h-text--break-word` which allows to force line wrapping of too long words
- Added `.h-text--tracked*` helpers which allows to make text tracking wider or narrower
- Added `.h-border`, `.h-border-top`, `.h-border-left`, `.h-border-right` and `.h-border-bottom` helpers which sets `border-width` to `1px`
- Added `.h-border0`, `.h-border-top0`, `.h-border-left0`, `.h-border-right0` and `.h-border-bottom0` which sets `border-width` to `0px`
- Added `.h-border\:h` and `.h-border-{{side}}\:h` helpers which sets `border-width` on `:hover` and `:focus`
- Added `.h-opacity--{{value}}` and `.h-opacity--{{value}}:h` helpers
- Added large set of flex-related helpers
- Added new universal helpers for setting margin and padding on childs, which will be generated in addition to already existing standard margin and padding helpers based on maps. Those new helpers provides patterns and functionality, which before has been available only for some specific objects in form of their modifiers, like `.o-grid+` for `.o-grid`. Now you can apply those whenever you want. This also allowed us to drop a lot of often repeating size modifiers on almost all objects and generics. So far has been added:
  * `.h-childs-displace*` allows to set horizontal margin between childs. Margin will be always _in the middle_, between elements
  * `.h-childs-spacing*` sets vertical margin between all childs, except last one
  * `.h-anchors-padding*` and `.h-anchors-margin*` sets padding/margin on list of anchors, including direct childs of `li`
  * `.h-childs-padding*` and `.h-childs-margin*` sets padding/margin on all childs
  * `.h-cell-padding*` sets padding on all `th` and `td` of table
- Added `.h-margin-left--auto` and `.h-margin-right--auto` helpers for settings margin to `auto`. Useful for flexbox
- Added generation of `.h-font-size--em*` and `.h-text--em*` helpers based on `$ekzo-font-sizes.ems` map
- Added predefined variables with typography font stacks
- Added `.o-relink`, `.o-relink__to`, `.o-relink-rev`, `.o-relink-rev__to` (and reusable `ekzo-relink()` mixin, which produces it), which allows to reposition link style to any child element of anchor. Note: `-rev` with single dash isn't typo, since due to technical reason it isn't modificator, but standalone object.
- Added ability to predefine default color for `hr`
- Added a11y-related ability to disable outlines on links, buttons and forms on focus. Outlines enabled by default
- Added `border-width: 0` to `.o-btn` to prevent appearing of borders on buttons in case of defined borders on `a`. Override in your own styles if needed.
- Added `.o-show-grid` object which prints base vertical rhythm guides based on `ekzo-spacing(1)`
- Apply default cursor on any `.is-disabled` class
- `ekzo-font-size()` mixin now can accept `ems` as `$font-size` parameter even with `px` base line-height. It will try to generate line-height ratios properly
- Added IE8 and IE9 hacks for flex helpers which can be mimicked. When used in conjuration with `.o-grid` they will provide at least something close to flex layout. Their possibilities isn't that wide, though.
- Added IE8 and IE9 fallbacks for `.o-nav--stacked`, `.o-nav--pack` and `.o-nav--fixed-pack`. This will yeild at least somehow visually close layout even on older browsers.

### Fixed
- Inputs styles from now won't apply to `label`
- Fixed not inherited `padding` and `vertical-align` in `.o-btn--inherit`
- Fixed removal of paddings in `.o-btn--full`, enforced `border-box` model on it to prevent conflict between paddings and width
- Fixed wrongly applied hover text-decoration to `&` in `.o-btn`
- Fixed not applied hover text-decoration to `:focus` in `.o-btn`
- [breaking] Forced immutability via `!important` declaration of positional helpers like `.position--relative` which were by accident mutable before

### Changed
- Width helpers from now generated by refactored mixin `ekzo-widths-helpers()`
- `tools` from now have `index.scss` file. It makes it easier to import all mixins and functions whenever needed at once — in framework's `index.scss`, `ie.scss` or project's `style.scss`
- [breaking] Due to introduction of theming support, all variables in `settings.colors.defaults.scss` from now represented as map of values wich should be wrapped into `ekzo-extend-themes()` mixin
- All Ekzo's classes updated to support theming out of box
- `$ekzo-bg` now expects everything normal for `background` property, except color, wich from now injected into `html` directly from `$ekzo-theme(base: ( bg-color: {{value}} ) )`
- Updated `normalize.scss`, dropped some older normalizations (head commit: https://github.com/necolas/normalize.css/commit/02af1fdfaf71f589ea689d4b957eb3bb1294a228)
- `reset.scss` is now part of `normalize.scss`
- Cursors of regular and disabled buttons are no longer normalized and now behaves naturally. Change this behavior in your own stylesheets, if you need.
- `.o-btn` no longer applies `cursor: pointer`. Apply it manually, whenever needed on purpose.
- [breaking] `$ekzo-global-border-box` is enabled by default
- Rearrenged settings, part of options moved to `misc` settings
- [breaking] Extra-headings now have standalone class name `.h-extra-h{modifier}` instead of being `.h-text+`, `.h-text++` and `.h-text+++`
- [breaking] Extra-headings now starts from `base`, instead of `+`. This means that `.h-extra-h+`, `.h-extra-h++` and `.h-extra-h+++` replaced with `.h-extra-h`, `.h-extra-h+`, `.h-extra-h++`
- Spacing helpers from now generated based on provided in `$ekzo-margin-helpers-variations`, `$ekzo-bleed-helpers-variations` and `$ekzo-padding-helpers-variations` maps values
- [breaking] Default set of spacing helpers has been changed
- Improved `.h-text--hidden` helper
- [breaking] Proper widths and spacing helpers mixins and options names
- [breaking] Prefixed animation variables with `$ekzo-`
- [breaking] Changed font-families representation from variables to maps
- [breaking] Improved and renamed default breakpoints in `$ekzo-breakpoints`. Default values optimized for mobile-first approach.
- [breaking] `$ekzo-breakpoints` now represented as flat map. Change option `$ekzo-responsive-helpers-breakpoints` to disable generation of helper classes for certain breakpoints.
- [breaking] Each responsive helpers enabling/disabling option now accepts list of breakpoints for which responsive helpers should be generated. This allow to precisely select for which helpers which breakpoints should be generated. They also renamed from like `$ekzo-enable-responsive-display-helpers` to `ekzo-responsive-display-helpers-breakpoints` to better represent their nature. All options by default set to `$ekzo-responsive-helpers-breakpoints` value
- [breaking] Replaced `$ekzo-spacing-unit*` variable and its variations with `ekzo-spacing()` (`ekzo-spacing(.25)`, `ekzo-spacing(2)`, etc.) function
- [breaking] Renamed `ekzo-font()` mixin to `ekzo-font-face()`
- [breaking] Renamed `_framework.scss` to `_index.scss`
- [breaking] All classes by default namespaced by its type. For example: `.o-grid` instead of `.grid`
- [breaking] Renamed function `map-get-deep()` to `ekzo-get()`
- [breaking] Renamed function `ekzo-convert-direction()` to `ekzo-flip-direction()`
- [breaking] `ekzo-breakpoint()` mixin now uses `@` to denote a breakpoint. For example: `.h-1/2@lap` instead of old `.h-lap-1/2`
- [breaking] Refactored `ekzo-font-size()` mixin. It now accepts `$font-size` instead of `$size` as firt parameter. It also now can accept any units for `$font-size`, but they should always match `$line-heigt` units.
- [breaking] Similarly to new `ekzo-rem()` function, `ekzo-percent()`  and `ekzo-em()` functions now accepts only values with same units (or both unitless). It will try to convert values with Sass math intelligently, though. If you will try to convert impossible to convert units, you will receive an Error now.
- `.o-reline__to` will from now set not only `:hover`, but also `:focus` and `:active` because of accessibility reasons
- Refactored `.o-border-reline`. It will try to inherit as much as possible values and no logner relies on `$ekzo-links-border-bottom-width` and `$ekzo-links-border-bottom-style` variables. Some older styles might be affected, though
- [breaking] Renamed `.o-border-reline` to `.o-reline-border-bottom`
- [breaking] Refactored `.h-text--underline--rev` into `.h-text--underline:h` which now is single responsible for adding of undernline on `:hover` and `:focus`. It no longer removes `underline`, use `.h-text--underline--flush` for it. It also now applies styles not only to `:hover`, but also on `:focus` and `:active` because of accessibility reasons
- [breaking] Refactored `.h-text--underline--border` to more generic `.h-border-bottom`
- [breaking] Refactored `.h-text--underline--border--rev` into `.h-border-bottom:h` which from now resposible only for adding bottom border on ':hover'. Added `:focus` and `:active` states because of accessibility reasons
- [breaking] Renamed `.g-text-input` to more obvious `.g-input`
- [breaking] `.g-link--flush` from now does not rely on border variables and instead inherits as much as possible to make link similar to outer text. It will also inherit `:hover`, `:focus` and `:active` states. To reflect better its new nature, renamed to `.g-link--inherit`
- [breaking] Replaced `$ekzo-links-underline` and `$ekzo-links-hover-unline` with `$ekzo-links-text-decoration` and `$ekzo-links-hover-text-decoration` which acts as much more obvious way to set default link underlines
- [breaking] Replaced `$ekzo-btn-unline` with `$ekzo-btn-text-decoration`, added missing `$ekzo-btn-hover-text-decoration`. They now works same as similar links-related variables
- [breaking] From now outlines on focus by default are enabled for a11y reasons
- Typography helpers no longer using `ekzo-font-size-classes()` mixin and relies on simple `@each`
- Refactored `ekzo-font-size()` mixin. Just internal optimizations
- [breaking] Renamed `.h-cursor--arrow` to `.h-cursor--default`
- From now framework will internally extend only via silent classes to avoid bloating of generated CSS
- [breaking] Moved `.h-clear` to objects and renamed to `.o-clearfix` to avoid confusion with natural floats' clears
- [breaking] Renamed `.o-btn--wide\+`, `.o-btn--wide\+--`, `.o-btn--wide\+\+\+` to  `.o-btn--wide`, `.o-btn--wide--`, `.o-btn--wide\+\+`
- `.h-align--*` helpers no longer setting flex aligment. Use new `.h-flex--*` helpers for this
- `.o-grid__item` no longer sets `vertical-align: top`, because it doesn't work with flex anyway. That rule moved to IE8 and IE9 related declarations
- [breaking] Renamed `.o-grid-` to `.o-grid--`
- Refactored `.o-media` to use flexbox. It will fallback to floats based version on IE8/9, but since floats can't be aligned vertically, they will always align to top
- [breaking] Renamed `.o-media__image` to `.o-media__aside` to represent its purpose better
- Refactored `.o-nav` to use flexbox model. This mostly doesn't affect layout on newer browsers, except that there will be no white-space between childs. Use new `.o-nav--space` to emulate old white-space if you need it. New `.o-nav` also includes functionality of depreciated from now `.o-a-nav`, `.o-floated-nav` and `.o-pack`
- `.o-nav--keywords` will now set delimeters on direct child anchors too, so that you can use it not on `ul`, but plain list of anchors
- [breaking] Moved `.g-extra-help` to objects and renamed to `.o-extra-help`
- [breaking] `.o-extra-help` will also work on ':hover' too
- [breaking] Use `0` as modifier instead of `--flush` when we not "flushing", but actually setting value to `0`. In other words, instead `.h-margin--flush` should be used `.h-margin0`, etc. This concerns lists, tables, some typography helpers, spacing helpers, `.o-media`, `.o-grid`, `.o-island`.
- `0` helpers for `margin`, `bleed` and `padding` from now generated based on relevant maps too, so you can disabled it in case you don't need it. By default it's included, so it won't break anything
- [breaking] Renamed `.h-margin--center` to `.h-margin-sides--auto`
- [breaking] Moved `.g-table--fixed` to helpers, where it should belong, and renamed to `.h-table--fixed`