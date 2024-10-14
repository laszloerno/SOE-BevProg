function otFtSzamol() {
    szamolj('ot',5)
}

function tizFtSzamol() {
    szamolj('tiz',10)

}

function szamolj(cimlet, ertek) {
    let darab = document.getElementById(`${cimlet}ft`).value
    document.getElementById(`${cimlet}ft_sum`).innerHTML = ertek*darab
    
    vegosszeg()

}

function vegosszeg() {
    let vegosszeg = 0
    vegosszeg += Number(document.getElementById("otft_sum").innerText)
    vegosszeg += Number(document.getElementById("tizft_sum").innerText)

    document.getElementById("vegosszeg").innerHTML = vegosszeg
}
