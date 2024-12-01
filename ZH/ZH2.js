// létrehozunk egy lista típusu változót amibe a gyerekek választásait rakjuk
let gyerekek = [];

function rogzit() {
  // beolvassuk az input mezők értékeit fontos hogy az ID ugyanaz legyen mint a HTML kódban!!!
  let nev = document.getElementById('nev').value;
  let csoki = document.getElementById('csoki').value;

  // létrehozunk egy objektumot amiben a gyerek adatait tároljuk

  let gyerek = {
    Nev: nev,
    Csoki: csoki,
    // ez nem volt feladat de az 1. ZH-ban ajándékok számát kellett generálni így ide felvittem mert ugyanúgy kellett ezt is megoldani ott
    Darab: Math.floor(Math.random() * 3) + 1, // Ezzel generálok egy [0,3[ intervallumba eső véletlen számot mivel 0 nem jó és a 3 nincs benne ezért hozzá kell adnom 1-et
    // a floor függvény pedig az egészrészt vágja ki a véletlen számból így csak 1,2,3 lehet az érték
  };

  // hozzáadjuk a gyereket a listához
  gyerekek.push(gyerek);

  // kiírjuk a gyerekek listáját. Nem kell feltétlen ide írni de ha ide írjuk nem kell még egy gomb a kiíráshoz
  kiir();
}

// Ez a függvény a gyerekek listája alapján kiírja a többi feladatot
function kiir() {
  //1. feladat a gyerekeket a különböző listába tesszük bele attól függően hogy milyen csokit szeretnek

  // kezdetben mindkét listát üresre állítjuk így mindig a teljes listát írja ki
  document.getElementById('tejcsoki').innerHTML = '';
  document.getElementById('etcsoki').innerHTML = '';

  for (const gyerek of gyerekek) {
    // a HTML-ben a select mezőben a "tej" érték volt így erre vizsgálunk

    if (gyerek.Csoki == 'tej') {
      // A kiírás ilyen formában akarom hogy megjelenjen: "Név: Darab csokit kap"
      document.getElementById(
        'tejcsoki'
      ).innerHTML += `<li>${gyerek.Nev}: ${gyerek.Darab} csokit kap</li>`;
    }
    if (gyerek.Csoki == 'et') {
      document.getElementById(
        'etcsoki'
      ).innerHTML += `<li>${gyerek.Nev}: ${gyerek.Darab} csokit kap</li>`;
    }
  }

  //2. feladat a gyerekek számát kell kiírni mindegyik listának a végére
  let tejDB = 0;
  let etDB = 0;
  for (const gyerek of gyerekek) {
    // a HTML-ben a select mezőben a "tej" érték volt így erre vizsgálunk
    if (gyerek.Csoki == 'tej') {
      tejDB += 1;
    }
    if (gyerek.Csoki == 'et') {
      etDB += 1;
    }
  }
  // ezt az 1 feladat for ciklusába is be lehetne rakni de így átláthatóbb
  //a listákl végére kiírjuk a gyerekek számát. Beleraktam egy strong tagbe hogy kiemelje a számot vastaggal. nem kötelező!

  document.getElementById(
    'tejcsoki'
  ).innerHTML += `<li><strong>Összesen: ${tejDB} gyerek kap tejcsokit</strong></li>`;
  document.getElementById(
    'etcsoki'
  ).innerHTML += `<li><strong>Összesen: ${tejDB} gyerek kap tejcsokit</strong></li>`;

  //3. feladat Statisztika számítás
  // a lista hossza a gyerekek számát jelenti de a két fenti darabszám összeadása is jó lehet pl. osszesgyerek = tejDB + etDB;
  let osszesGyerek = gyerekek.length;
  // hány százalék szeretne étcsokit
  let etSzazalek = (etDB / osszesGyerek) * 100;

  // kiírjuk a statisztikát
  // először töröljük a statisztika tartalmát hogy ne írja ki egymás alá többször a statisztikákat
  document.getElementById('statisztika').innerHTML = '';
  // itt <p> taget adok hozzá mert egyszerű szöveget szeretnék kiíratni.
  document.getElementById(
    'statisztika'
  ).innerHTML += `<p>${etSzazalek}% szeretne étcsokit</p>`;

  //4. feladat a csoki költségek kiszámítása
  // a tejcsoki ára 700 Ft, az étcsoki ára 900 Ft
  // a gyerekek listáját végigjárva összeadjuk a csoki árakat hogy hány gyerek melyik csokiból mennyit kap
  let osszegEt = 0;
  let osszegTej = 0;
  for (const gyerek of gyerekek) {
    if (gyerek.Csoki == 'tej') {
      osszegTej += gyerek.Darab * 700;
    }
    if (gyerek.Csoki == 'et') {
      osszegEt += gyerek.Darab * 900;
    }
  }

  // kiírjuk a csoki költségeket
  // itt <p> taget adok hozzá mert egyszerű szöveget szeretnék kiíratni.
  document.getElementById(
    'statisztika'
  ).innerHTML += `<p>Tejcsoki költsége: ${osszegTej} Ft</p>`;
  document.getElementById(
    'statisztika'
  ).innerHTML += `<p>Étcsoki költsége: ${osszegEt} Ft</p>`;

  // melyikre költünk többet
  // itt <p> taget adok hozzá mert egyszerű szöveget szeretnék kiíratni.
  if (osszegTej > osszegEt) {
    document.getElementById(
      'statisztika'
    ).innerHTML += `<p>Tejcsokira költünk többet</p>`;
  } else {
    document.getElementById(
      'statisztika'
    ).innerHTML += `<p>Étcsokira költünk többet</p>`;
  }
}
