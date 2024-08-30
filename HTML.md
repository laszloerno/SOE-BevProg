# Bevezetés a programozásba - HTML összefoglaló

## Skeleton

Minden feladat esetében az alábbi skeletonból indulhatunk ki:

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- a megjelenítendő karakterek kódolása -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script>
      // JS kod (mukodes)
    </script>
  </head>
  <body>
    HTML kod (feluleti elemek, megjelenes)
  </body>
</html>
```

## HTML Elemek általánosságban

Minden (majdnem minden) elemnek lehet egy `id` és / `vagy` class tulajdonsága

```
id= valami
class= valami
```

Minden elemnél jelölni kell a kezdetét és a végét

Kezdő Tag `< >` jelek között vég tag `</ >` jelek között

```html
<tag_neve> tartalom </tag_neve>
```

Kivétel `<br>` tag, amely sortörést jelent

## Alap HTML elemek

Bővebb lista, részletesebb leírások a [W3Schools](https://www.w3schools.com/html/) oldalán, de az általunk használt fontosabb dolgok egyben:

### Címsorok / Headings

Az HTML hat szintű címsorokat biztosít, a `<h1>`-től `<h6>`-ig. Az `<h1>` elem jelenti a legmagasabb szintű címsort, míg a `<h6>` a legalacsonyabb szintet képviseli.

Példa:

```html
<h1>Ez egy 1. szintű címsor</h1>
<h2>Ez egy 2. szintű címsor</h2>
<h3>Ez egy 3. szintű címsor</h3>
```

A címsorok hasznosak a tartalom strukturálásához és az információ hierarchiájának jelzéséhez a weboldalon.

### Bekezdések

A bekezdések HTML-ben arra szolgálnak, hogy csoportosítsák és szervezzék a szöveg blokkjait. A `<p>` taggel vannak reprezentálva. Amikor bekezdéseket használunk, fontos, hogy a tartalmat a nyitó és záró tag közé helyezzük:

```html
<p>Ez egy bekezdés.</p>
```

Alapértelmezés szerint a bekezdések előtt és után van némi térköz, amely vizuális elválasztást hoz létre a szöveg blokkok között. Azonban szükség esetén módosíthatja ezt a térközt CSS segítségével.

A bekezdések általában arra szolgálnak, hogy strukturálják és formázzák a szöveges tartalmat a weboldalakon.

## Linkek

A linkek az HTML-ben a `<a>` (anchor) elem segítségével hozhatók létre. A `<a>` elemnek van egy `href` attribútuma, amely megadja a link célját, vagyis a hivatkozott URL-t. Például:

```html
<a href="https://www.example.com">Egy példa link</a>
```

Ezenkívül a `<a>` elemnek lehet egy opcionális `target` attribútuma is, amely meghatározza, hogy a linket hol nyissa meg a böngésző. Például:

```html
<a href="https://www.example.com" target="_blank"
  >Egy új ablakban megnyíló link</a
>
```

A linkek hasznosak a weboldalak közötti navigációhoz, más weboldalakra való hivatkozáshoz, vagy akár a dokumentumon belüli ugrásokhoz is.

## Képek

A képek beillesztése az HTML-ben a `<img>` elem segítségével történik. Az `<img>` elemnek van egy `src` attribútuma, amely megadja a kép forrását, vagyis a kép URL-jét. Például:

```html
<img src="path/to/image.jpg" alt="Kép leírása" />
```

Az `alt` attribútum opcionális, és a kép leírását tartalmazza. Ez a szöveg jelenik meg, ha a kép nem töltődik be helyesen, vagy ha a felhasználók képernyőolvasót használnak.

Ezenkívül az `<img>` elemnek további attribútumai is lehetnek, például a `width` és `height`, amelyekkel beállíthatjuk a kép méretét. Például:

```html
<img src="path/to/image.jpg" alt="Kép leírása" width="300" height="200" />
```

Fontos megjegyezni, hogy a kép forrása relatív vagy abszolút elérési út lehet. Ha a kép a webhelyen belül található, akkor a relatív elérési út használata ajánlott.

### SPAN

```
    <span> szoveg </span>
```

"Nem csinál semmit", de használhatjuk, ha egy adott részhez `id`-t szeretnénk rendelni később

### DIV elem

A `<div>` elem az egyik leggyakrabban használt HTML elem, amelyet általában a tartalom csoportosítására és formázására használnak. A `<div>` elemnek nincs speciális jelentése vagy funkciója, csak egy üres tartalomtartó blokkot jelöl.

Példa:

```html
<div id="myDiv">Ez a tartalom a div elemen belül van.</div>
```

A `<div>` elemnek lehet egy `id` attribútuma, amely egyedi azonosítót ad a div elemnek. Ez hasznos lehet, ha később hivatkozni szeretnénk rá CSS vagy JavaScript kódban.

A `<div>` elemet széles körben használják a weboldalak elrendezéséhez és a tartalom csoportosításához. A CSS segítségével testreszabhatjuk a div elem megjelenését és elrendezését a weboldalon.

### Listák

Pottyos lista:

```html
<ul>
  <li>Elso elem</li>
  <li>Masodik elem</li>
</ul>
```

Sorszámozott lista:

```html
<ol>
  <li>Elso elem</li>
  <li>Masodik elem</li>
</ol>
```

### Sortörés

```html
<br />
```

### Beviteli mező

Egyszerű szövegbeviteli mező:

```html
<input id="fieldid" />
```

Alapértelmezetten szöveg (`type="text"`), de állítható másra is, pl az alábbi számot kér be (de megenged beírni alapértelmezetten mást is):

```html
<input type="number" id="fieldid" />
```

### Gomb

```html
<button onclick="function_name()">Gomb szovege</button>
```

## CSS használata

A CSS-t három módon lehet hozzáadni az HTML dokumentumokhoz:

- Inline - az HTML elemekben a style attribútum használatával
- Internal - a `<style>` elem használatával a `<head> `szakaszban
- External - a `<link>` elem használatával egy külső CSS fájlra mutató linkkel

A leggyakoribb módja a CSS hozzáadásának az, hogy a stílusokat külső CSS fájlokban tároljuk. Azonban a félév során inline és internal stílusokat fogunk használni.
