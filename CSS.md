# Bevezetés a programozásba - CSS alapok

A CSS-t három módon lehet hozzáadni az HTML dokumentumokhoz:

- Inline - az HTML elemekben a style attribútum használatával
- Internal - a `<style>` elem használatával a `<head> `szakaszban
- External - a `<link>` elem használatával egy külső CSS fájlra mutató linkkel

A leggyakoribb módja a CSS hozzáadásának az, hogy a stílusokat külső CSS fájlokban tároljuk. Azonban a félév során inline és internal stílusokat fogunk használni.

További információk a [W3SCHOOLS](https://www.w3schools.com/css/default.asp) oldalon találhatóak.

A félév során érintett legfontosabb tartalmak összegyűjtve:

## Szintaktika

egy CSS formázási elem alapvetően 3 részből áll.
`selector { property: value }`

A `selector` lehet egy `element` , `id`, `class` illetve ezek tetszőleges hierarchiája. Pl. `element`.`class { property: value, property: value }`

Hivatokzás

- `id` esetében: `#id { ... } ` módon történik
- `class` esetében `.class { ... } `
- `element` esetében `p { }`

## CSS hozzáadása HTML állományhoz

### Inline CSS

A stílust az egyes elementeknél definiáljuk pl az alábbi módon:
(A való életben végszükség esetén használunk csak ilyet...)

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 style="color:blue;text-align:center;">
      Ez egy kék színnel írt közepre rendezett cím
    </h1>
    <p style="color:red;">Ez egy piros betűs bekezdés.</p>
  </body>
</html>
```

### Internal CSS

Ezt közvetlenűl a HTML file `<header>` részben deklaráljuk a következőképpen:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: linen;
      }

      h1 {
        color: maroon;
        margin-left: 40px;
      }
    </style>
  </head>
  <body>
    <h1>Ez egy cím</h1>
    <p>Ez egy bekezdés.</p>
  </body>
</html>
```

### External CSS

Ebben az esetben a CSS stílusok külön állományba kerülnek, így ugyanaz a CSS alkalmazható a teljes oldalon ha több állományból álló projekten dolgozunk. (Való életben ilyet használnuk)

`app.css`:

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

a `HTML` állományban pedig így importáljuk:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    ...
  </body>
</html>
```

### CSS prioritási sorrend

A CSS prioritási sorrend meghatározza, hogy melyik stílus szabály érvényesül, ha több stílus szabály is alkalmazódik ugyanarra az elemre. A prioritás sorrendje a következő:

1. Inline stílus: Az inline stílus, amelyet az elem style attribútumában definiálunk, a legmagasabb prioritással rendelkezik. Ez azt jelenti, hogy az inline stílus mindig felülírja az összes másik stílus szabályt.

2. !important: Ha egy stílus szabályhoz hozzáadjuk az !important jelzőt, az azt jelenti, hogy az adott szabály mindig érvényesül, függetlenül a többi szabály prioritásától. Az !important jelzőt azonban csak mértékkel használjuk.

3. ID szabályok: Az ID alapú szabályok a következőképpen vannak definiálva: `#id { ... }`. Az ID szabályok magasabb prioritással rendelkeznek, mint az osztály vagy elem alapú szabályok.

4. Osztály szabályok: Az osztály alapú szabályok a következőképpen vannak definiálva: `.class { ... }`. Az osztály szabályok alacsonyabb prioritással rendelkeznek, mint az ID szabályok, de magasabb prioritással, mint az elem alapú szabályok.

5. Elem szabályok: Az elem alapú szabályok a következőképpen vannak definiálva: `element { ... }`. Az elem szabályok a legalacsonyabb prioritással rendelkeznek, és a legkevésbé specifikusak.

Ezen felül a prioritási sorren

1. inline
2. external
3. browser default

## Néhány fontosabb CSS tulajdonság

szín:

```css
color: #ffffff;
background-color: red;
background-image: url('gradient_bg.png');
```

keret:

```css
border-style: solid;
border-width: 5px;
border-color: red;
border-style: dotted;
```

margó vs padding:

```css
margin: 5px;
margin: 2rem, 2rem, 0, 0;
margin-top: 100px;
margin-bottom: 100px;
margin-right: 150px;
margin-left: 80px;

padding: 12px;
padding-top: 50px;
padding-right: 30px;
padding-bottom: 50px;
padding-left: 80px;
```

## A Box model

[W3Schools - Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
