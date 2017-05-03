pantalla=document.getElementById('display')
var acum=""
var cadena=""
pantalla.innerHTML="0"
uno=document.getElementById('1')
dos=document.getElementById('2')
tres=document.getElementById('3')
cuatro=document.getElementById('4')
cinco=document.getElementById('5')
seis=document.getElementById('6')
siete=document.getElementById('7')
ocho=document.getElementById('8')
nueve=document.getElementById('9')
cero=document.getElementById('0')
on=document.getElementById('on')
signo=document.getElementById('sign')
punto=document.getElementById('punto')
on.addEventListener("click",function(){
borra()
})
signo.addEventListener("click",function(){
cadena=validaSigno(cadena)
})
uno.addEventListener('click', function(){
cadena=digitar(cadena,"1")
})
dos.addEventListener('click', function(){
cadena=digitar(cadena,"2")
})
tres.addEventListener('click', function(){
cadena=digitar(cadena,"3")
})
cuatro.addEventListener('click', function(){
cadena=digitar(cadena,"4")
})
cinco.addEventListener('click', function(){
cadena=digitar(cadena,"5")
})
seis.addEventListener('click', function(){
cadena=digitar(cadena,"6")
})
siete.addEventListener('click', function(){
cadena=digitar(cadena,"7")
})
ocho.addEventListener('click', function(){
cadena=digitar(cadena,"8")
})
nueve.addEventListener('click', function(){
cadena=digitar(cadena,"9")
})
cero.addEventListener('click', function(){
    cadena=comprueba0(cadena)
})
punto.addEventListener('click', function(){
compruebaPunto(cadena)
})
function digitar (cadena,num){
  if ((cadena.length>=9&& cadena[0]== "-")
   ||(cadena.length>=8&& cadena[0]!= "-")){
    pantalla.innerHTML=acum
  }else {
    pantalla.innerHTML=acum+num
    acum=acum+num
  }
  return acum
}

function comprueba0(cadena){
  if ((cadena.length<=8&& cadena[0]== "-")
   ||(cadena.length<=7&& cadena[0]!= "-")){
     if (cadena=="") {
       pantalla.innerHTML=0
     }else {
       pantalla.innerHTML=acum+"0"
       acum=acum+"0"
     }
     return acum
  }else {
    return acum
  }


}
function borra() {
  pantalla.innerHTML="0"
  cadena=""
  acum=""
}
function validaSigno(cadena){
  acum=cadena*-1
  acum=acum.toString()
  pantalla.innerHTML=acum
  if (acum==-0){
    acum=""
  }
    return acum
}
function compruebaPunto(cadena){
  var punto=0;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i]=="."){
       punto=1
    }
  }
  if(cadena[0]==""||cadena[0]==undefined){
    pantalla.innerHTML="0."
    acum="0."
    return acum
  }
  if (punto==0) {
    pantalla.innerHTML=acum+"."
    acum=acum+"."
    return acum
  }
}
