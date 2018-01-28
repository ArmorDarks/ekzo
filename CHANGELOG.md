# Changelog

## HEAD

### Changed
- Default settings files will now import other required settings if needed.

   It means that now it is possible to import only required default settings, and with it will be pulled other needed default settings. Besides, it means that loading order within settings layer no longer matters.

## 2.6.0

### Added
- Added `.h-font-weight--thin` helper.
- Added `.h-text--small-caps` helper.

### Changed
- Renamed `.h-text--capital` to more obvious `.h-text--capitalize`.

## 2.5.3

### Changed
- Update codestyle to follow new Kotsu Stylelint rules.

   Functions and mixins declarations now require space before `(arguments)`, to follow codestyle enforced by `standard` in JavaScript.

## 2.5.2

### Changed
- Update codestyle to follow new Kotsu Stylelint rules.

## 2.5.1

### Changed
- Update codestyle to follow new Kotsu Stylelint rules.

## 2.5.0

### Added
- Added `$include-self` option with `false` as default value for `ekzo-for-each-breakpoint()` mixin. When set to `true` it will print content without any `@media` or `$postfix`.

   This is handy option to avoid few separate includes.

### Changed
- Mixins with `$prefix` now will always use Ekzo namespace variable by default, so that unneeded in most cases `$prefix` specification during mixins invocation can be completely avoided.
- Merged standalone helpers and objects mixins calls with its responsive versions calls thanks to introduction of `$include-self` option for `ekzo-for-each-breakpoint()` mixin.

## 2.4.4

### Changed
- Updated `stylelint-disable` directives to work with Stylelint 7.12.0.

## 2.4.3

### Changed
- Comments headers extended to be always 80 chars long. This effectively marks recommended length for file content.

## 2.4.2

### Added
- Added Ekzo logo in readme.
- Add `functional` keywoard to `package.json`.

### Changed
- Updated readme.
- Changed `package.json` description.

## 2.4.1

### Fixed
- Fixed typo in flex helper: `.h-flex-y--top` renamed to `.h-flex-y--start`.

## 2.4.0

### Removed
- Removed `.o-btn` sizing variants, except `.o-btn--full` and font-size related sizings. They were way too opinionated as for an object. From now on you should define sizing variants in your own component, like `.Btn`.
- Removed from core `.o-icon--left`, `.o-icon--right`, `.o-sprite--left` and `.o-sprite--right` spacing objects. They should be defined in project-specific component, like `.Icon`.
- Removed `@if` declarations around properties, which can be disabled with `null`.

### Added
- Added `.o-svg-icon` object for SVG icons. It will help to maintain relative width and height of icon properly even in IE browsers.
- Added `.h-flex-basis0` helper.
- Added `ekzo-line-height()` function to retrieve values from new `$ekzo-line-heights`.
- Added `.h-line-height*` generated based on new map in  `$ekzo-line-heights`.

### Changed
- `$ekzo-line-height` renamed to `$ekzo-line-heights` and now stores map of used line-heights in project. This allows to add specific line-heights to project while still keeping whole system under control.
- More specific flex helpers now comes after more broad ones. This allows to adjust broad ones' setting on demand with specific helpers.
- In settings `false` for themes and some other variables replaced with `null`. It will effectively remove related properties from generated CSS without need to write additional `@if` declarations.

### Fixed
- Fixed `@extend` directive, which had been wrongly extended inside `@media` directove.

## 2.3.1

### Added
- Added missing `print` breakpoint.

### Fixed
- Improved typography helpers performance by grouping relevant helpers in singe `@each` call.
- Fixed lint errors.

## 2.3.0

### Added
- Added `.h-min0` helper which sets `min-width: 0`. Useful for flebox layouts, when content should collapse beyond it's content.
- Added `$ekzo-bold-font-weight` option with default value `bolder`, which allows to control default font weight for `<b>` and `<strong>`. This helps to avoid issues with font faces, which can't handle all bold variations.
- Added experimental `.o-panel__header`.
- Added option `$ekzo-hr-height` with default value set to `0`, which allows to define default height of `<hr>` element.
- Added `.o-aspect-ratio` objects for `4:3`, `16:9` and `21:9` aspect ratios.
- Added `.h-bg*` helpers for backgrounds with basic set of rules.
- Added `.h-border-r*` helpers for border-radiuses, which generated based on new `$ekzo-border-radius` setting.
- Added `ekzo-border-radius()` function to get value from `$ekzo-border-radius`.

### Changed
- [breaking] Renamed `.o-container` to more common occuring `.o-panel`.
- [breaking] Renamed `.o-container__flex` to `.o-panel__body`.
- [breaking] Renamed `.o-container__fixed` to `.o-panel__footer`.
- From now `ekzo-theme()` mixin will work even if it's place at root with classes as its content. With properties only it will output all themes classes with those properties, and with classes inside it will prepend themes classes to specified classes.
- For `base` theme `ekzo-theme()` from now on will put properties directly on specified class instead of prepending it with `.t-base` class. Using additional `.t-base` class didn't add any flexibility anyway, since due to CSS limitation it is impossible to call `.t-base` class in scope of any other theme.
- Text and background color are no longer defined on `html` in scope of themes, but instead placed on newly added pure theme classes, like `.t-base` in `root.scss`. This also allows from now to extend those themes in your own files to any extent.

### Fixed
- Fixed missing `$font-size` declaration in `ekzo-font-size()` function, which resulted in error if correct text size name from `$ekzo-font-sizes` had been passed as first argument.
- Fixed doubled default height of `<hr>` element because of `border-width` property in `normilize.scss` instead of `border-bottom-width`.
- Improved performance of `colors.ui` helpers.

## 2.2.0

### Added
- Added `$ekzo-alert-on-missing-theme-color` option with default value `false`. Enable to receive errors in case of missing requested color in `ekzo-theme(missing-color)` function.

### Changed
- [breaking] `.h-font-weight--light` now properly represents `200`, while old `300` value moved to new `.h-font-weight--semilight` helper.
- Helpers in `colors.ui.scss` now relies on `ekzo-theme()` function instead of `$color` from loop. This prevents from appearing unwanted color duplications in result stylesheet.
- Grouped `ekzo-theme()` mixins calls to increase performance.
- By default Ekzo will no longer throw errors in case of missing color in `ekzo-theme(missing-color)` function.
- By default `ekzo-theme()` function will return `null` in case of missing theme color, unless `$ekzo-alert-on-missing-theme-color` set to `true`. This allows to build more complex themes, in which not all properties from `base` theme are mandatory.

### Fixed
- Fixed not applied styles to delimiter of `.o-breadcrumb`.
- Fixed not applied styles to anchors of `.o-breadcrumb`.
- Improved performance by using `map-get()` instead of `ekzo-get` whenever possible and caching values.
- Fix `ekzo-ui-font-family()` function returning not unquoted value.
- Fix `.h-font-family--inherit` not having `.h-*` prefix.

## 2.1.0

### Added
- Added `.o-container` for making sticky footers easier.

### Changed
- Updated normalize.scss to 5.0.0 (head commit: https://github.com/necolas/normalize.css/commit/4559de001bc15838c0314c713645086bdef64bc3).
- Reorganized `normalize.scss` to follow original's structure closer.
- Dropped no longer actual rules from `normalize.scss`.
- Apply `margin: 0` and `padding: 0` only on elements which needs margin reset in `normalize.scss`.
- Inputs and buttons no longer inherit `color`.
- Inputs and buttons no longer inherit all `font` properties, but only `font-family`.
- [breaking] Renamed `.h-flex__item--grow*` helpers into `.h-flex-grow*`.
- [breaking] Renamed `.h-flex__item--shrink*` helpers into `.h-flex-shrink*`.
- [breaking] Renamed `.h-flex__item--basis*` helpers into `.h-flex-basis*`.
- [breaking] Renamed aligning `.h-flex__item--*` helpers into `.h-flex-self--*`.
- [breaking] Renamed `.h-flex__item--flex*` helpers into `.h-flex*`.
- [breaking] Changed modifiers logic of freshly renamed `.h-flex*` helpers.

  Now it fallows pattern `.h-flex{grow}{shrink}-{basis}`, where `grow` represented as typical Ezko increment in form of `+` or `0`, while `shrink` and `basis` are optional modifiers, represented in numerical form.

  Few examples of currently valid helpers:
  * `.h-flex+` for `flex: 1 0 auto`
  * `.h-flex+1` for `flex: 1 1 auto`
  * `.h-flex+1-0%` for `flex: 1 1 0%`
  * `.h-flex0` for `flex: none`

### Fixed
- Fixed not updated to 2.0.0 requirements height helpers file which resulted in errors during import.
- Fixed wrongly positioned breakpoint `$postfix` in some flex helpers.

## 2.0.0
### Removed
- [breaking] Removed index `_framework.scss`. From now you should import needed parts directly in your project.
- [breaking] Removed `$ekzo-enable-*` settings for objects, generics and helpers, since now it's possible to import only needed parts of Ekzo.
- [breaking] Removed vendor-related mixins `ekzo-vendor()`, `ekzo-placeholder()` and `ekzo-keyframe()` in favor of mandatory [Autoprefixer](https://github.com/postcss/autoprefixer).
- [breaking] Removed mixin `ekzo-headings()`. It was never used.
- Removed `debug.scss` support. It shoudn't be part of Ekzo's core.
- [breaking] Removed `$ekzo-line-height-ratio` variable — there isn't much sense to keep it in settings by default. Calculate on demand.
- [breaking] Removed all colors-realated variables due to introduction of theming support. See changes below for details.
- [breaking] Removed ability to predefine border styles for links with ekzo variables. Define those styles manually instead.
- [breaking] Removed ability to predefine border styles for buttons with ekzo variables. Define those styles manually instead.
- [breaking] Removed ability to predefine `:hover` colors for buttons with ekzo variables. Define those styles manually instead.
- [breaking] Removed predefined colors for positive, negative and disabled buttons. Too opinionated for foundation.
- [breaking] Removed `ekzo-font-size-class()` and `ekzo-font-size-classes()` mixins, since they were way too overengineered and excessive. Use simpler and more clear `@each` instead.
- Removed not needed anymore `str-replace()` function. Use external snippet it you need it.
- [breaking] Replaced `.h-muted` helper. Use new `.h-opacity--{{value}}` and `.h-opacity--{{value}}:h` helpers.
- [breaking] Removed `.o-btn--reset`. You should architecture your styles in the way that you need to reset something back to it's initial values.
- [breaking] Removed `.o-grid--floated`, since it no longer needed with flex grid.
- [breaking] Removed `.o-grid--flag`. Use `.h-flex-y--center` instead.
- [breaking] Removed `.o-grid--center`, `.o-grid--middle` and `.o-grid--bottom`. Use `.h-flex-x--center`, `.h-flex-y--center` and `.h-flex-y--end` instead.
- [breaking] Removed `.o-grid--auto`. There were no use in it.
- [breaking] Removed `.o-flag`, since `.o-media` from now uses flexbox model and its items can be aligned vertically seamlessly with `.h-flex-y--*`. You still can emulate `.o-flag` behaviour with `.h-table` and `.h-table__cell` helpers if you really need to have your items aligned vertically even in older browsers, but in most of other cases it's acceptable graceful degradation. Farewell, dear friend. You served us well, but it's time to give a place for more modern approaches.
- [breaking] Removed `.o-a-nav`. Its functionality merged into `.o-nav`.
- [breaking] Removed `.o-floated-nav`. With new flexbox `.o-nav` it no longer needed.
- [breaking] Removed `.o-pack`. Its functionality merged into `.o-nav--pack` and `.o-nav--fixed-pack`. In IE8 and IE9 new modifiers will fallback to old behaviour of `.o-pack` for compitability reasons.
- [breaking] Removed `.o-grid*` size modifiers, use new `.h-childs-displace*`.
- [breaking] Removed `.o-nav--padding` size modifiers, use new `.h-anchors-padding*` o- -[breaking] anchors-margin*`.
- [breaking] Removed `.g-table--padding` size modifiers, use new `.h-cell-padding*`.
- [breaking] Removed `.g-list--indent`, use new `.h-childs-spacing*`.
- [breaking] Removed `.g-list--margin`, use new `.h-childs-margin*`.
- [breaking] Removed `.g-list--padding`, use new `.h-childs-padding*`.
- [breaking] Removed default margin between two `fieldset`, use new `.h-childs-spacing*`.
- [breaking] Removed `.o-breadcrumb__root`. Define it in your own stylesheets.
- [breaking] Removed `.o-island`

### Added
- Added license.
- Added theming support:
  * Add new themes or redefine old ones with `ekzo-extend-themes(theme-name, (text-color: red))`;
  * Add theme-related styling to any class with new mixin `.foo { @include ekzo-theme() { color: ekzo-theme(text); } }`;
  * Switch on and off theming globaly with `$ekzo-enable-theming` option without need to delete arleady defined theme mixins. When switched off, they will always use values from `base` theme;
  * Use new theme class `.t-{{theme-name}}` anytime you want to apply your theme. Use `.t-base` to call main theme.

  For details about how it works and how to use head to `ekzo-theme()` mixin description.

- Added `$ekzo-colors` which can uphoald color pallete of website.
- Added `ekzo-color()` function to quickly get value from `$ekzo-colors`.
- Added generation of colors helpers based on `$ekzo-colors` and `$ekzo-themes`, as well as options to enable/disable it. By default you will get for each color following helpers:
  * `.h-color--{{ colorName }}` for `color` property;
  * `.h-bg-color--{{ colorName }}` for `background-color`;
  * `.h-border-color--{{ colorName }}` for `border-color`;
  * `.h-fill--{{ colorName }}` for `fill`;
  * `.h-stroke--{{ colorName }}` for `stroke`;
  
  This will also generate `:hover` + `:focus` classes:
  
  * `.h-color--{{ colorName }}:h` for `color`;
  * `.h-bg-color--{{ colorName }}:h` for `background-color`;
  * `.h-border-color--{{ colorName }}:h` for `border-color`;
  * `.h-fill--{{ colorName }}:h` for `fill`;
  * `.h-stroke--{{ colorName }}:h` for `stroke`;
  
  And it will produce same classes for `inherit`, `transparent` and `currentColor` colors.

- Added set of options `$ekzo-responsive-{{class-name}}-breakpoints` which allows to list breakpoints for which should be generated responsive helper classes.
- Added mixin `ekzo-for-each-breakpoint()` which includes mixins with specified parameters for each specified breakpoint. Mostly used by Ekzo internally.
- Added `ekzo-set-temp()` mixin which allows to pass values from mixins into `@content`, `ekzo-temp()` function to retrive value and `ekzo-purge-temp()` mixin to clear temp. See `ekzo-for-each-breakpoint()` for example. Hacky.
- Added functions `ekzo-font-family()` and `ekzo-ui-font-family()` to quickly get values from font-families maps.
- Added option to set monospace font.
- Added `$ekzo-list-style-type` option to set default list style.
- Added generic styling for `code`, `pre`, `samp` and `kbd` and settings for their font-sizes and font-families.
- Added options `$ekzo-widths-fractions` and `$ekzo-responsive-widths-fractions` to control generated widths.
- Added `ekzo-strip-units()` function which allows to remove units from the value.
- Added `ekzo-units()` function which allows to convert units. Relies on Sass math to prevent conversion of incompatible units.
- Added `ekzo-rem()` function, which converts value into rems.
- Added `ekzo-зч()` function, which converts value into pxs.
- Added settings for styling `::selection`.
- Added settings to control namespacing for class types: `$ekzo-g-ns`, `$ekzo-o-ns`, `$ekzo-s-ns` and `$ekzo-h-ns`.
- Added functions and mixins names in error messages.
- Added `$ekzo-z-indexes` map and `ekzo-z-index({{z-index-name}})` function to get values from it.
- Added `ekzo-line-height()` mixin for generating vertical rhythm based line-heights. Previously it was available only as part of `ekzo-font-size()` mixin.
- `ekzo-breakpoint()` now accepts 2 parameters: `$breakpoint` and `$breakpoints` (backward compatible).
- Added experimental universal inheritance from satinize.css.
- Added responsive display helpers and options to switch them on or off.
- Added responsive positioning helpers and options to switch them on or off.
- Added responsive typography helpers and options to switch them on or off.
- Added generation of helpers based on provided font-families and options to enable/disable them.
- Added positional helpers for `top`, `bottom`, `left` and `right` properties, etc.
- Added `.h-position--cover` which sets `top: 0; right: 0; bottom: 0; left: 0;`.
- Added `.h-overflow*` helpers.
- Added `.h-font-weight--inherit` helper.
- Added `.h-font-weight--lighter` helper.
- Added `.h-font-weight--bolder` helper.
- Added `.h-text--lower` helper.
- Added `.h-text--capital` helper.
- Added `.h-font-family--inherit`.
- Added `.h-font-size--inherit` helper which forces inheritance of `font-size`.
- Added `.h-align--baseline` helper which sets `vertical-align: baseline`.
- Added predefined `.h-text-truncate` which will force truncation of texts if it's longer than one line.
- Added `.h-text--break-word` which allows to force line wrapping of too long words.
- Added `.h-text--tracked*` helpers which allows to make text tracking wider or narrower.
- Added `.h-border`, `.h-border-top`, `.h-border-left`, `.h-border-right` and `.h-border-bottom` helpers which sets `border-width` to `1px`.
- Added `.h-border0`, `.h-border-top0`, `.h-border-left0`, `.h-border-right0` and `.h-border-bottom0` which sets `border-width` to `0px`.
- Added `.h-border\:h` and `.h-border-{{side}}\:h` helpers which sets `border-width` on `:hover` and `:focus`.
- Added `.h-opacity--{{value}}` and `.h-opacity--{{value}}:h` helpers.
- Added large set of flex-related helpers.
- Added new universal helpers for setting margin and padding on childs, which will be generated in addition to already existing standard margin and padding helpers based on maps. Those new helpers provides patterns and functionality, which before has been available only for some specific objects in form of their modifiers, like `.o-grid+` for `.o-grid`. Now you can apply those whenever you want. This also allowed us to drop a lot of often repeating size modifiers on almost all objects and generics. So far has been added:
  * `.h-childs-displace*` allows to set horizontal margin between childs. Margin will be always _in the middle_, between elements;
  * `.h-childs-space*` sets vertical margin between all childs, except last one;
  * `.h-anchors-padding*` and `.h-anchors-margin*` sets padding/margin on list of anchors, including direct childs of `li`;
  * `.h-childs-padding*` and `.h-childs-margin*` sets padding/margin on all childs;
  * `.h-cell-padding*` sets padding on all `th` and `td` of table.
- Added more `.h-margin*--auto` helpers for settings margin to `auto`. Useful for flexbox.
- Added generation of `.h-font-size--em*` and `.h-text--em*` helpers based on `$ekzo-font-sizes.ems` map.
- Added predefined variables with typography font stacks.
- Added `.o-relink`, `.o-relink__to`, `.o-relink-rev`, `.o-relink-rev__to` (and reusable `ekzo-relink()` mixin, which produces it), which allows to reposition link style to any child element of anchor. Note: `-rev` with single dash isn't typo, since due to technical reason it isn't modificator, but standalone object.
- Added ability to predefine default color for `hr`.
- Added a11y-related ability to disable outlines on links, buttons and forms on focus. Outlines enabled by default.
- Added `border-width: 0` to `.o-btn` to prevent appearing of borders on buttons in case of defined borders on `a`. Override in your own styles if needed.
- Added `.o-show-grid` object which prints base vertical rhythm guides based on `ekzo-space(1)`.
- `ekzo-font-size()` mixin now can accept `ems` as `$font-size` parameter even with `px` base line-height. It will try to generate line-height ratios properly.
- Added IE8 and IE9 hacks for flex helpers which can be mimicked. When used in conjuration with `.o-grid` they will provide at least something close to flex layout. Their possibilities isn't that wide, though.
- Added IE8 and IE9 fallbacks for `.o-nav--stacked`, `.o-nav--pack` and `.o-nav--fixed-pack`. This will yeild at least somehow visually close layout even on older browsers.
- Added `font-display: swap` for `ekzo-font-face()` mixin to avoid blocking during fonts loading.
- Added `.h-height-*` helpers for defining height.

### Fixed
- Now whole framework, functions and mixins should propely work when values for font sizes, base line height and base spacing unit provided in `rem`s.
- Inputs styles from now won't apply to `label`.
- Fixed not inherited `padding` and `vertical-align` in `.o-btn--inherit`.
- Fixed removal of paddings in `.o-btn--full`, enforced `border-box` model on it to prevent conflict between paddings and width.
- Fixed wrongly applied hover text-decoration to `&` in `.o-btn`.
- Fixed not applied hover text-decoration to `:focus` in `.o-btn`.
- [breaking] Forced immutability via `!important` declaration of positional helpers like `.h-relative` which has been by accident mutable before.
- [breaking] Fixed wrongly named `.o-breadcrumb`, renamed to `.o-breadcrumb`.
- [breaking] Fixed wrongly named `.o-breadcrumb` related variables. Now they all end on `s`.
- Fixed not aligned properly `.g-link--go` and `.g-link--back`.
- Fixed wrongly applied `list-style-type` on `ol`.
- Fixed not applied default styles to `<select>`.
- Fixed applied to inputs only `font-size`, while it had to be `ekzo-font-size()` mixin, which includes line-height.
- Fixed absent `,` between `optgroup` and `select` selectors in `normalize.scss`.

### Changed
- Width helpers from now generated by refactored mixin `ekzo-widths-helpers()`.
- `tools` from now have `_index.scss` file. It makes it easier to import all mixins and functions whenever needed at once.
- [breaking] Due to introduction of theming support, all variables in `settings.colors.defaults.scss` from now represented as map of values wich should be wrapped into `ekzo-extend-themes()` mixin.
- [breaking] Renamed `settings.colors.defaults.scss` to `settings.themes.defaults.scss`
- [breaking] Moved settings into `settings.defaults` directory
- All Ekzo's classes updated to support theming out of box.
- `$ekzo-bg` now expects everything normal for `background` property, except color, wich from now injected into `html` directly from `$ekzo-theme(base: ( bg-color: {{value}} ) )`.
- Updated `normalize.scss`, dropped some older normalizations (head commit: https://github.com/necolas/normalize.css/commit/02af1fdfaf71f589ea689d4b957eb3bb1294a228)
- `reset.scss` is now part of `normalize.scss`.
- Cursors of regular and disabled buttons are no longer normalized and now behaves naturally. Change this behavior in your own stylesheets, if you need.
- `.o-btn` no longer applies `cursor: pointer`. Apply it manually, whenever needed on purpose.
- [breaking] `$ekzo-global-border-box` is enabled by default.
- Rearrenged settings, part of options moved to `misc` settings.
- [breaking] Extra-headings now have standalone class name `.h-extra-h{modifier}` instead of being `.h-text+`, `.h-text++` and `.h-text+++`.
- [breaking] Extra-headings now starts from `base`, instead of `+`. This means that `.h-extra-h+`, `.h-extra-h++` and `.h-extra-h+++` replaced with `.h-extra-h`, `.h-extra-h+`, `.h-extra-h++`.
- Spacing helpers from now generated based on provided in `$ekzo-margin-helpers-variations`, `$ekzo-bleed-helpers-variations` and `$ekzo-padding-helpers-variations` maps values.
- [breaking] Default set of spacing helpers has been changed.
- Improved `.h-text--hidden` helper.
- [breaking] Proper widths and spacing helpers mixins and options names.
- [breaking] Prefixed animation variables with `$ekzo-`.
- [breaking] Changed font-families representation from variables to maps.
- [breaking] Improved and renamed default breakpoints in `$ekzo-breakpoints`. Default values optimized for mobile-first approach.
- [breaking] `$ekzo-breakpoints` now represented as flat map. Change option `$ekzo-responsive-helpers-breakpoints` to disable generation of helper classes for certain breakpoints.
- [breaking] Each responsive helpers enabling/disabling option now accepts list of breakpoints for which responsive helpers should be generated. This allow to precisely select for which helpers which breakpoints should be generated. They also renamed from like `$ekzo-enable-responsive-display-helpers` to `ekzo-responsive-display-helpers-breakpoints` to better represent their nature. All options by default set to `$ekzo-responsive-helpers-breakpoints` value.
- [breaking] Renamed `$ekzo-spacing-unit` into `$ekzo-space`.
- [breaking] Replaced `$ekzo-space*` variations with `ekzo-space()` (`ekzo-space(.25)`, `ekzo-space(2)`, etc.) function.
- [breaking] Renamed `ekzo-font()` mixin to `ekzo-font-face()`.
- [breaking] All classes by default namespaced by its type. For example: `.o-grid` instead of `.grid`.
- [breaking] Renamed function `map-get-deep()` to `ekzo-get()`.
- [breaking] Renamed function `ekzo-convert-direction()` to `ekzo-flip-direction()`.
- [breaking] `ekzo-breakpoint()` mixin now uses `@` to denote a breakpoint. For example: `.h-1/2@lap` instead of old `.h-lap-1/2`.
- [breaking] Refactored `ekzo-font-size()` mixin. It now accepts `$font-size` instead of `$size` as firt parameter. It also now can accept any units for `$font-size`, but they should always match `$line-heigt` units.
- [breaking] Similarly to new `ekzo-rem()` function, `ekzo-percent()`  and `ekzo-em()` functions now accepts only values with same units (or both unitless). It will try to convert values with Sass math intelligently, though. If you will try to convert impossible to convert units, you will receive an Error now.
- `.o-reline__to` will from now set not only `:hover`, but also `:focus` and `:active` because of accessibility reasons.
- Refactored `.o-border-reline`. It will try to inherit as much as possible values and no logner relies on `$ekzo-links-border-bottom-width` and `$ekzo-links-border-bottom-style` variables. Some older styles might be affected, though.
- [breaking] Renamed `.o-border-reline` to `.o-reline-border-bottom`.
- [breaking] Refactored `.h-text--underline--rev` into `.h-text--underline:h` which now is single responsible for adding of undernline on `:hover` and `:focus`. It no longer removes `underline`, use `.h-text--underline0` for it. It also now applies styles not only to `:hover`, but also on `:focus` and `:active` because of accessibility reasons.
- [breaking] Refactored `.h-text--underline--border` to more generic `.h-border-bottom`.
- [breaking] Refactored `.h-text--underline--border--rev` into `.h-border-bottom:h` which from now resposible only for adding bottom border on ':hover'. Added `:focus` and `:active` states because of accessibility reasons.
- [breaking] Renamed `.g-text-input` to more obvious `.g-input`.
- [breaking] `.g-link0` from now does not rely on border variables and instead inherits as much as possible to make link similar to outer text. It will also inherit `:hover`, `:focus` and `:active` states. To reflect better its new nature, renamed to `.g-link--inherit`.
- [breaking] Replaced `$ekzo-links-underline` and `$ekzo-links-hover-unline` with `$ekzo-links-text-decoration` and `$ekzo-links-hover-text-decoration` which acts as much more obvious way to set default link underlines.
- [breaking] Replaced `$ekzo-btn-unline` with `$ekzo-btn-text-decoration`, added missing `$ekzo-btn-hover-text-decoration`. They now works same as similar links-related variables.
- [breaking] From now outlines on focus by default are enabled for a11y reasons.
- Typography helpers no longer using `ekzo-font-size-classes()` mixin and relies on simple `@each`.
- [breaking] Split `_typography.scss` into `_typography.scss` and `_typography.misc.scss`
- [breaking] Split `_typography.font-families.scss` into `_typography.font-families.scss` and `_typography.font-families.ui.scss`
- [breaking] Split `_colors.scss` into `_colors.scss` and `_colors.ui.scss`
- Refactored `ekzo-font-size()` mixin. Just internal optimizations.
- [breaking] Renamed `.h-cursor--arrow` to `.h-cursor--default`.
- From now framework will internally extend only via silent classes to avoid bloating of generated CSS.
- [breaking] Moved `.h-clear` to objects and renamed to `.o-clearfix` to avoid confusion with natural floats' clears.
- [breaking] Renamed `.o-btn--wide\+`, `.o-btn--wide\+--`, `.o-btn--wide\+\+\+` to  `.o-btn--wide`, `.o-btn--wide--`, `.o-btn--wide\+\+`.
- `.h-align--*` helpers no longer setting flex aligment. Use new `.h-flex--*` helpers for this.
- `.o-grid__item` no longer sets `vertical-align: top`, because it doesn't work with flex anyway. That rule moved to IE8 and IE9 related declarations.
- [breaking] `.o-grid` no longer applies margin between grid items by default. Use `h-childs-displace*`
- Refactored `.o-media` to use flexbox. It will fallback to floats based version on IE8/9, but since floats can't be aligned vertically, they will always align to top.
- [breaking] Renamed `.o-media__image` to `.o-media__aside` to represent its purpose better.
- Refactored `.o-nav` to use flexbox model. This mostly doesn't affect layout on newer browsers, except that there will be no white-space between childs. Use new `.o-nav--space` to emulate old white-space if you need it. New `.o-nav` also includes functionality of depreciated from now `.o-a-nav`, `.o-floated-nav` and `.o-pack`.
- `.o-nav--keywords` will now set delimeters on direct child anchors too, so that you can use it not on `ul`, but plain list of anchors.
- [breaking] Moved `.g-extra-help` to objects and renamed to `.o-extra-help`.
- [breaking] `.o-extra-help` will also work on ':hover' too.
- [breaking] Use `0` as modifier instead of `--flush`. For example, instead of `.h-margin0` should be used `.h-margin0`.
- `0` helpers for `margin`, `bleed` and `padding` from now generated based on relevant maps too, so you can disabled it in case you don't need it. By default it's included, so it won't break anything.
- [breaking] Renamed `.h-margin--center` to `.h-margin-sides--auto`.
- [breaking] Moved `.g-table--fixed` to helpers, where it should belong, and renamed to `.h-table--fixed`.
- [breaking] Renamed oddly named `.o-breadcrumb__entry` to more common `.o-breadcrumb__item`.
- Renamed `_main.scss` into `_root.scss`.
- [breaking] Base font-size now declared on standalone `$ekzo-font-size` variable.
- [breaking] Display helpers no longer using `display--` prefix.
- [breaking] Position helpers no longer using `position--` prefix.
- Most part of generics and objects filenames has been changed to represent properly content of partials. For example, `btn.scss` for `.o-btn` instead of `buttons.scss`, or `link.scss` for `.g-link` instead of `links.scss`.
- Make headings by default inherit font-weight styling, instead of enforcing some specific type.
- [breaking] Renamed `.h-text--uppercase` to `.h-text--caps`.
- [breaking] Moved `.h-hide` and `.h-hide--text` to objects as `.o-hide` and `.o-hide-text`.