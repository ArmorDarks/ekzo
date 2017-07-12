![Ekzo](https://cloud.githubusercontent.com/assets/4460311/23854875/16890190-07fc-11e7-862e-37f5a69b76a3.png)

<div align='center'>
  <h3>Sass framework</h3>
  <p>Atomic, OOCSS-driven, layered, design-free, BEM-based, responsive and mighty</p>
</div>

---

<p align='center'>
  <a href='https://www.npmjs.com/package/ekzo'>
    <img src='https://img.shields.io/npm/v/ekzo.svg' alt='NPM version' />
  </a>
</p>

Installation
------------

```shell
npm install ekzo --save
```


How to use
----------

Import parts which you would like to use explicitly in your stylesheet:

```scss
@import 'node_modules/ekzo/...';
```

Imports should be layered in following order:

* [Tools](https://github.com/ArmorDarks/ekzo/tree/master/tools)
* Predefined variables
* Settings (or [default settings](https://github.com/ArmorDarks/ekzo/tree/master/settings.defaults))
* [Base styles](https://github.com/ArmorDarks/ekzo/tree/master/base)
* [Generics](https://github.com/ArmorDarks/ekzo/tree/master/generic)
* [Objects](https://github.com/ArmorDarks/ekzo/tree/master/objects)
* Components
* [Helpers](https://github.com/ArmorDarks/ekzo/tree/master/helpers)

Refer to [Kotsu](https://github.com/LotusTM/Kotsu) `style.scss` as an [example](https://github.com/LotusTM/Kotsu/tree/master/source/styles).


Requirements
------------

[Sass](http://sass-lang.com/install) 3.4.2 or higher.

[Autoprefixer](https://github.com/postcss/autoprefixer) is highly advised.


Browsers support
----------------

|  IE | Edge | Chrome | Firefox | Safari | Opera | Opera Mobile | iOS Safari | Android |
|-----|------|--------|---------|--------|-------|--------------|------------|---------|
| 10+ | 12+  | 21+    | 28+     | 6.1+   | 12.1+ | 12.1+        | 7.1+       | 4.4+    |

[`_ie.scss`](https://github.com/ArmorDarks/ekzo/blob/master/_ie.scss) provides graceful regression for IE9 and below:

* Grid, media and nav objects will fallback from `flexbox` to `inline-block`, `table` or `float`-based models.
* Flexbox alignment helpers will fallback to `text-align` and `vertical-align` to imitate intended alignment on `inline-block`-based grid, media and nav objects.
* `::placeholder` and `::selection` won't be styled nor displayed.

All this will help to maintain intended flow and alignment of elements as closely as possible, but some features will be limited, especially vertical alignment.

To use, include `_ie.scss` in stylesheet, which will be served only to IE9 and below with [IE conditional comments](https://en.wikipedia.org/wiki/Conditional_comment).

Best used with
--------------

[Kotsu](https://github.com/LotusTM/Kotsu) — Advanced Web Starter Kit & Static Website Generator with docker integration.