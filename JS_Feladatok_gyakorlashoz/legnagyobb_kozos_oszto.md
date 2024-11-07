# Kis matek... legnagyobb közös osztó

A feladatban kérj be két számot és add meg a legnagyobb közös osztóját.

## 1 Számok bekérése

Input mezővel kérd be.


## 2 legnagyobb közös osztó

A legnagyobb közös osztó meghatározására az Euklideszi algoritmus ajánlanám: ami kb így néz ki.

ez egy rekurzív függvény ami meghívja önmagát addig amigy a két szám nem lesz azonos.

pszeudo kóddal az alábbiakban nézne ki egy ilyen függvény:

```
function lnko(a, b)
    

  -if a = b then  lnko := a 

  -if a < b then lnko := lnko(a, b-a) 

  -if a > b then lnko := lnko(a-b, b) 

 

```
## 3 Lista a számításokról
A kért számításokat egy listában írja ki a végén
