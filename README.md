# Глобальные стили.

## Миксины

- [mixins.scss](./src/app/gStyles/mixins.scss) храняться все используемые миксины в приложении стили для кнопок. Каждый миксин должен быть детально описани ниже<br/>

```scss
/* Fonts Mixins*/
@mixin Spongition(
  $fz,
  $fw,
  $lh: auto /* Optional */,
  $upcase: false /* Optional */
) {
}

@mixin Montserrat(
  $fz,
  $fw,
  $upcase: false /* Optional */
) {
}

/*Button Mixin*/
@mixin Button(
  $round: 0 /* Optional */,
  $py: 0px /* Optional */,
  $px: 0px /* Optional */,
  $fz: 0 /* Optional */,
  $fw: 0 /* Optional */,
  $lh: auto /* Optional */,
  $upcase: false /* Optional */
) {
  @include Spongition($fz, $fw, $lh, $upcase);
}
```

<br/>

## Кнопки

- `.button` - добавляется ко всем кнопка на сайте. Меняет фон и текст на нужные параметры;

- [buttons.scss](./src/app/gStyles/buttons.scss) храняться все дополнительные стили для кнопок. Настраиваются через [mixin](./src/app/gStyles/mixins.scss) <br/>

```scss
/* Пример использования Button mixin */

.btn-name {
  @inculde Button(8px, 16px, 16px, 24px, 400, 130%, $upcase: true);
  /* Button(border-radius, py, px, fz, fw, lh, isUppercase) */
}
```

```html
<!-- Пример для кнопки с иконкой -->
<button class="header__buttons-link button btn-header">
  <img src="./assets/svg/x.svg" alt="" />
  <p>Start Now</p>
</button>
```

</br>

## Шрифты

- `.N-fw-u-18` - пример класса для шрифта, где </br>
  `N - первая бука шрифта (M - Montserrat)` </br>
  `u - обозначает требуется uppercase или нет` </br>
  `fw - первая бука значения толщины (B - bold)` </br>
  `18 - размер шрифта в пикселях (18 - 18px)` </br>
- Для более глобальных случае (H1, NavLink, Logo, etc.) можно использовать одноименную форму записи. `.logo для логотоипа, .h1 - для заголовка первого уровня и т.д`

- [fonts.scss](./src/app/gStyles/fonts.scss) храняться все классы шрифтов. Настраиваются через [mixin](./src/app/gStyles/mixins.scss) <br/>

```scss
/* Пример использования Fonts mixin */

.S-b-u-24 {
  @include Spongition(24px, 700, $upcase: true);

  /*
  S - Spongition
  b - bold
  u - Требуется uppercase
  24 - 24px
  */

  /* Spongition(fz, fw, lh, isUppercase) */
  /* Montserrat(fz, fw, isUppercase) */
}
```

</br>

## Отступы

- `.npN` - форма записи для отступов, где </br>
  `n - первая бука типа отступа (m - margin)` </br>
  `p - первая буква позиции для отступа (t - top; x - используется для left+right, y - используется для top+bottom)` </br>
  `N - размер отступа (18 - 18px)` </br>

- [idents.scss](./src/app/gStyles/idents.scss) храняться все классы отступов<br/>

```scss
/* Пример для записии отступов */

.mt50 {
  margin-top: 50px;
}
```

</br>

## Контейнер

- [container.scss](./src/app/gStyles/container.scss) храняться стили для одного, глобального контейнера, а так же медиа запросы для его адаптации

<br/>

## Алиасы

- Для быстрого доступа к разным каталогам будем добавлять алиасы. На данный момент всего 1 алиас

```ts
@gStyle - './src/app/gStyles/*'
```

- Алиасы добавляются в [tsconfig.json](./tsconfig.json) в compilerOptions -> paths

</br>

## Изображения

- Изображения разделяются по папкам.

```ts
assets / svg - .svg;
assets / png - .png;
assets / jpg - .jpg;
assets / webp - .webp;
```
