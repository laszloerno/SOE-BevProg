# SOE-Bevezetés a programozásba - összefoglaló

## Skeleton 

Minden feladat esetében az alábbi skeletonból indulhatunk ki:

```html
<html>
    <head>
        <script>
            // JS kod (mukodes)
        </script>
    </head>
    <body>
        HTML kod (feluleti elemek, megjelenes)
    </body>
</html>
```

## Alap HTML elemek

Bővebb lista, részletesebb leírások a [W3Schools](https://www.w3schools.com/html/) oldalán, de az általunk használt fontosabb dolgok egyben:

### SPAN 
```
    <span> szoveg </span>
```
"Nem csinál semmit", de használhatjuk, ha egy adott részhez `id`-t szeretnénk rendelni később

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
    <input id = "fieldid" >
```

Alapértelmezetten szöveg (`type="text"`), de állítható másra is, pl az alábbi számot kér be (de megenged beírni alapértelmezetten mást is):

```html
    <input type = "number" id = "fieldid" >
```

### Gomb

```html
    <button onclick="function_name()"> Gomb szovege </button>
```
