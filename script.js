let v1 = document.getElementById('valor1')
let v2 = document.getElementById('valor2')
let res = document.getElementById('res')


function Somar(){
    Soma= parseFloat(v1.value)+ parseFloat(v2.value)
    res.innerHTML=`<p> o valor da Soma é ${Soma}<p>`
    
}
function Subtrair(){
    Subtrair = parseFloat(v1.value)-parseFloat(v2.value)
    res.innerHTML=`<p> o valor da subtração é ${Subtrair}<p>`
}
function Multiplicar(){
    Multiplicar= parseFloat(v1.value)*parseFloat(v2.value)
    res.innerHTML=`<p> o valor da multiplicação é ${Multiplicar}<p>`
}
function Dividir(){
    Dividir=parseFloat(v1.value)/parseFloat(v2.value)
    res.innerHTML=`<p> o valor da divisão é ${Dividir}<p>`
}