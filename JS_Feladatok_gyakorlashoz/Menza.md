# Menza

Készíts egy oldalt ahol a menzára lehet fogalalásokat leadni, az egyszerűség kedvéért most nem kell azzal foglalkozni, hogy melyik hétre vagy időszakra, csupán a 3 lehetséges menüből lehessen választani.

A feladatok elvégzésénél `nem cél` a szép megjelenítés

## 1 Menü foglalások rögzítése

Az oldalon legyen lehetőség 3 menüt kiválasztani A, B és C.
Egy gomb segítségével az alábbi kiértékeléseket végezzük el miután rögzítettünk rendeléseket.

## 2 Legtöbb választás

Írjuk ki, hogy melyik menüt választották a legtöbben

## 3 Költségvetés

Az egyes menük költsége és ára az alábbi minta JSON-ben szerepel. 

```javascript

const arlista = {
    menuA: {
        koltseg: 600,
        ar: 950
    },
    menuB: {
        koltseg: 700,
        ar: 1099,
    },
    menuC: {
        koltseg: 450,
        ar: 890
    }
}

```
Határozzuk meg a választások alapján a következőket:
### 3.a A legtöbbet választott menü bevétele

A legtöbbet választott menü mekkora bevételt generál.

### 3.b A legtöbbet választott menü nyeresége

az a menü amelyiket a legtöbben választották mekkora nyereséget hoz.

### 3.c Az összes választás alapján mekkora nyereségünk lesz

A választások alapján mekkora nyereséget termelünk. 
(A választott darabszám * (ár - költség) )

### Bónusz

Ha az oldal úgy működik, hogy minden választás után frissíti a statisztikát