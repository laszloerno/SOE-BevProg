function listatGeneral() {
    // Beolvasás
    let szamokInput = document.getElementById('szamok').value;
    let szamok = szamokInput.split(',').map(Number);

    // Lista elem törlése
    let lista = document.getElementById('lista');
    lista.innerHTML = '';

    // For ciklus a lista generálásához
    for (let i = 0; i < szamok.length; i++) {
        let li = document.createElement('li');
        li.textContent = szamok[i];
        lista.appendChild(li);
    }
}