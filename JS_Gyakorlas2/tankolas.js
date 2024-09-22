let fogyasztas = 10;
let tank_merete = 50;

let autok = [
  {
    tipus: 'Ford',
    fogyasztas: 8,
    tank_merete: 60,
  },
  {
    tipus: 'Opel',
    fogyasztas: 10,
    tank_merete: 55,
  },
  {
    tipus: 'BMW',
    fogyasztas: 12,
    tank_merete: 70,
  },
];

window.onload = function () {
  for (auto of autok) {
    document.getElementById(
      'autok'
    ).innerHTML += `<option value="${auto.tipus}">${auto.tipus}</option>`;
  }
};

function utazas() {
  let benzinmennyiseg = document.getElementById('tank').innerHTML;
  let tavolsag_km_ben = document.getElementById('tavolsag').value;
  let benzinigeny = fogyasztas * (tavolsag_km_ben / 100);
  if (benzinigeny > benzinmennyiseg) {
    alert('Nincs elég benzin');
  } else {
    benzinmennyiseg -= benzinigeny;
    document.getElementById(
      'utvonal'
    ).innerHTML += `<li>${tavolsag_km_ben} km-t utaztunk, benzinfogyasztás: ${benzinigeny.toFixed(
      2
    )} liter</li>`;
  }
  document.getElementById('tank').innerHTML = benzinmennyiseg;
}

function tankolas() {
  let tankolas = Number(document.getElementById('tankolasliter').value);
  let benzinmennyiseg = Number(document.getElementById('tank').innerHTML);
  if (benzinmennyiseg + tankolas > tank_merete) {
    alert('Túl sok benzin');
    benzinmennyiseg = tank_merete;
  } else {
    benzinmennyiseg += tankolas;
  }
  document.getElementById('tank').innerHTML = benzinmennyiseg;
}

function autovaltas() {
  let auto = document.getElementById('autok').value;
  for (a of autok) {
    if (a.tipus == auto) {
      fogyasztas = a.fogyasztas;
      tank_merete = a.tank_merete;
      document.getElementById('tank').innerHTML = tank_merete;
    }
  }
}
