![Ekzo](https://cloud.githubusercontent.com/assets/4460311/23854875/16890190-07fc-11e7-862e-37f5a69b76a3.png)

<div align='center'>
  <h3>Sass framework</h3>
  <p>Atomic, OOCSS-driven, layered, design-free, BEM-based, responsive and mighty</p>
</div>

---

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