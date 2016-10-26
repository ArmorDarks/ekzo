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

Best used with
--------------

[Kotsu](https://github.com/LotusTM/Kotsu) — advanced Grunt-based web starter kit with Circle CI continuous deployment integration.