# Bevezetés a programozásba - JSON 

[W3Schools - JSON ](https://www.w3schools.com/js/js_json_intro.asp)


Egy JSON minta:

```json
{
    "nev": "Példa Fanni",
    "eletkor": 22,
    "varos": "Sopron",
    "hobbi": {
        "nev": "Programozás",
        "szint": "Haladó"
    },
    "kedvencFilmek": [
        {
            "cim": "Inception",
            "ev": 2010
        },
        {
            "cim": "Interstellar",
            "ev": 2014
        }
    ]
}
```

Ebben a példában egy JSON objektumot találunk, amely egy embert reprezentál. Három tulajdonsággal rendelkezik: "név", "kor" és "város". Ezeknek a tulajdonságoknak az értékei rendre "Példa Fanni", 30 és "Sopron".

A JSON formátumban lehet egymásba ágyazott hierarchikus adatokat is tárolni:
``` JSON
{
    "nev": "Példa Fanni",
    "eletkor": 22,
    "cim": {  // itt egy sima hierarchia látható
        "irsz":9400,
        "varos":"Sopron",
        "cim":"Fő tér 1.",
        },
    "hobbi": {
        "nev": "Programozás",
        "szint": "Haladó"
    },
    "kedvencFilmek": [ // vegyük éeszre hogy itt egy tömbben több érték is található
        {
            "cim": "Inception",
            "ev": 2010
        },
        {
            "cim": "Interstellar",
            "ev": 2014
        }
    ]
}
```

A JSON elemekre JavaScriptben a pont operátorral lehet hivatkozni. A példában látható JSON struktúrában a cím elérése a következőképpen történik:

```javascript
let adat = {
    "nev": "Példa Fanni",
    "eletkor": 22,
    "cim": {  // itt egy sima hierarchia látható
        "irsz":9400,
        "varos":"Sopron",
        "cim":"Fő tér 1.",
        },
    "hobbi": {
        "nev": "Programozás",
        "szint": "Haladó"
    },
    "kedvencFilmek": [ // vegyük éeszre hogy itt egy tömbben több érték is található
        {
            "cim": "Inception",
            "ev": 2010
        },
        {
            "cim": "Interstellar",
            "ev": 2014
        }
    ]
}


console.log(adat.cim.irsz, adat.cim.varos, adat.cim.cim) // 9400 Sopron Fő tér 1.

console.log(adat.kedvencFilmek[0].cim); // "Az első kedvenc film előkeresése = Inception"
```
Első esetben az `adat` változóban tárolt JSON objektum `cim` adatait írjuk ki

Második esetben a `adat` változóban tárolt JSON objektum `kedvencFilmek` tömbjének első elemének `cim` tulajdonságát írjuk ki a konzolra. A kimenet "Inception" lesz.






