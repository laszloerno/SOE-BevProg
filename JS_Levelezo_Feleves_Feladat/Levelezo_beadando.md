# Féléves beadandó feladat

A feladatban egy telefontársaság számlázó programját kellene egyszerűsítve elkészíteni. A számlázás alapja a hívások és az SMS-ek jelentik. 
Az adatok az egyszerűség kedvéért az alábbiak szerint értelmezendők:

- __Időpont__: Melyik nap történt a hívás (1-31) közötti érték
- __SMS__: egy szám 0 vagy annál nagyobb szám, ami azt mutatja, hogy hány SMS-t küldött aznap
- __Hívás__: Az adott napon lebonyolított hívások másodpercben vagy percben 0 vagy annál nagyobb szám

Feltételezhetjük, hogy egy napra csak 1 adatot adunk meg. És nincs minden napra adat.

Az oldal felépítés és külalakja nem szempont a működés a lényeg, de alapvetően 2 blokkra érdemes osztani. Egy szakasz a beviteli lehetőségeknek illetve gomb(ok)nak.
A második szakasz pedig az eredményeknek. valahogy ilyesmi formában:
```
Eredmények:
A hónapban 37 SMS került kiküldésre és 49 percet telefonáltunk. 
A fizetendő összeg 2651 Ft.
A legtöbb SMS 4.-én volt
A leghosszabb hívás 13.-án volt
```

## 1. Feladat
A fenti adatok rögzítése és bevitele. 
(Ajánlott egy tömböt használni, benne egy JSON formátumú adattal)

## 2. feladat
Állapítsuk meg, hogy összesen hány SMS-t és hány percet telefonáltunk a hónapban és jelenítsük meg azt
(for ciklus, segédváltozók)

## 3. Feladat
A rögzített adatokkal számoljuk ki és írjuk ki a képernyőre a fizetendő díjat, ha 
- 1 SMS ára: 20 Ft
- 1 Perc telefonálás: 39 Ft

## 4. Feladat
Keressük meg a listában mely napon küldtük a legtöbb SMS-t (ha több azonos van akkor egyik elég).
Illetve melyik nap volt a legtöbb hívás. 
A két értéket írjuk ki az eredményekhez.

## Bónusz feladatok:

- az adatok megadásánál egy napra több adat is megadható
- Ha a beszélgetések időtartama több mint 60 perc akkor óra és perc megjelenítést alkalmazzunk
- napi statisztika készítése hogy melyik nap mekkora kültségünk volt (táblázatban vagy listában)


Értékelési szempontok:

- minimum egy feladat hibátlan megoldása szükséges
- ha az adatrögzítés nem sikerül használható az alábbi struktúra is.
``` javascript
const telefon = [
  { idopont: 1, SMS: 10, hivas: 23 },
  { idopont: 2, SMS: 2, hivas: 33 },
  { idopont: 3, SMS: 5, hivas: 12 },
  { idopont: 4, SMS: 3, hivas: 2 },
  { idopont: 5, SMS: 7, hivas: 11 },
  { idopont: 6, SMS: 31, hivas: 22 },
  { idopont: 7, SMS: 0, hivas: 17 },
  { idopont: 10, SMS: 9, hivas: 68 },
  { idopont: 11, SMS: 59, hivas: 19 },
  { idopont: 12, SMS: 6, hivas: 27 },
  { idopont: 13, SMS: 13, hivas: 31 },
  { idopont: 15, SMS: 2, hivas: 39 },
  { idopont: 16, SMS: 16, hivas: 41 },
  { idopont: 17, SMS: 0, hivas: 21 },
  { idopont: 19, SMS: 7, hivas: 33 },
  { idopont: 20, SMS: 20, hivas: 6 },
  { idopont: 21, SMS: 2, hivas: 14 },
  { idopont: 22, SMS: 1, hivas: 55 },
  { idopont: 23, SMS: 23, hivas: 4 },
  { idopont: 25, SMS: 0, hivas: 10 },
  { idopont: 27, SMS: 0, hivas: 26 },
  { idopont: 30, SMS: 4, hivas: 43 },
];
```