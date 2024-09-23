let szamok = []



function sorbaRendez() {
    // Beolvasás
    let szamokInput = document.getElementById('szamok').value;
    szamok.push(Number(szamokInput));

    // Lista elem törlése
    let lista = document.getElementById('lista');
    lista.innerHTML = '';

    // Számok sorba rendezése hagyományos módszerrel (buborékos rendezés)
    for (let i = 0; i < szamok.length - 1; i++) {
        for (let j = 0; j < szamok.length - i - 1; j++) {
            if (szamok[j] > szamok[j + 1]) {
                // Csere
                let temp = szamok[j];
                szamok[j] = szamok[j + 1];
                szamok[j + 1] = temp;
            }
        }
    }

    // For ciklus a lista generálásához
    for (let i = 0; i < szamok.length; i++) {
        let li = document.createElement('li');
        li.textContent = szamok[i];
        lista.appendChild(li);
    }
}