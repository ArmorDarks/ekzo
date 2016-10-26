Ekzo.sass framework
===================

OOCSS-driven, layered, design-free, BEM-based, responsive and little, but mighty Sass framework for rapid and painless development.

Inspired by [Inuit.css](https://github.com/csswizardry/inuit.css).

Requirements
------------

[Sass](http://sass-lang.com/install) 3.4.2 or higher

[Autoprefixer](https://github.com/postcss/autoprefixer) in conjuration with Grunt or Gulp highly advised

How to use
----------

Ekzo.sass is modular framework, to make it work you need to import manually components which you'd like to use. They should be layered in following order:

* Your predefined variables
* Tools (mixins and functions)
* Your tools
* Default settings or your settings
* Base
* Your base
* Generic
* Your generic
* Objects
* Your objects
* Your components
* Helpers
* Your helpers

Order of components within layers is irrelevant, however, layers order is strict.

You can refer to Kotsu's styles-file as an [example](https://github.com/LotusTM/Kotsu/tree/master/source/styles).

Browsers support
----------------

Fully works in:

IE10+, Edge 12+, Chrome 21+, Firefox 28+, Safari 6.1+, Opera 12.1+, Opera Mobile 12.1+, iOS Safari 7.1+, Android 4.4+.

Ekzo provides graceful regression for IE9 and below:

* Grids, media and nav objects will fallback from `flexbox` model to `inline-block`, `table` or `float`-based models. While they will maintain proper flow of elements, alignment (especially vertical) will be drastically limited or differ from modern browsers.
* Flexbox alignment helpers in IE9 and below will fallback to `text-align` (horizontal alignment) and `vertical-align` (vertical alignment). This means that alignment of element might be affected differently from modern browsers.
* `::placeholder` and `::selection` won't be styled nor displayed

In general, in IE8 and IE9 websites will be browsable and not fall to pieces completely, but due to layouts model differences user experience might be affected.

To enable regression, include `_ie.scss` in stylesheet, which will be served only to IE9 and below browsers.

Best used with
--------------

[Kotsu](https://github.com/LotusTM/Kotsu) — advanced Grunt-based web starter kit with Circle CI continuous deployment integration.