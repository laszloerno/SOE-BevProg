
let db = 0
let termekek = ['Tej', 'Vaj', 'Plüssmaci', 'Kávé']


function reset() {
    console.log('Termékek változó:',termekek)
    console.log('Ez a plüssmaci?',termekek[2])
    
    
    let bLista = document.getElementById("bev_lista")
    bLista.innerHTML = ''
    for (termek of termekek) {
        console.log(termek)
        bLista.innerHTML += `<li>${termek}</li>`
    }
    



  

}

function hozzaad() {

    let cuccNeve = document.getElementById("cucc").value
    //let bLista = document.getElementById("bev_lista")
    
    //bLista.innerHTML += `<li>${cuccNeve}</li>`
    termekek.push(cuccNeve)
    db = db + 1
    
    document.getElementById("darab").innerHTML = db

    console.log("darab:",db)
    reset()

}