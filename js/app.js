pantalla=document.getElementById('display')
var acum=""
var acum2=0
var acumres=0
var cont=0
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
teclas=document.querySelectorAll('.tecla')
suma=document.getElementById('mas')
resta=document.getElementById('menos')
multi=document.getElementById('por')
divi=document.getElementById('dividido')
 function cambioTecla() {
   teclas[0].style="width:20%;height:59px;margin:0% 1%"}
 function vuelveTecla() {
  teclas[0].style="width:22%;height:62.91px;margin:0%"}
  teclas[0].onmousedown=cambioTecla;
  teclas[0].onmouseup=vuelveTecla;
function cambioTecla1() {
  teclas[1].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla1() {
  teclas[1].style="width:22%;height:62.91px;margin:0%"}
  teclas[1].onmousedown=cambioTecla1;
  teclas[1].onmouseup=vuelveTecla1;
function cambioTecla2() {
  teclas[2].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla2() {
  teclas[2].style="width:22%;height:62.91px;margin:0% "}
  teclas[2].onmousedown=cambioTecla2;
  teclas[2].onmouseup=vuelveTecla2;
function cambioTecla3() {
  teclas[3].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla3() {
  teclas[3].style="width:22%;height:62.91px;margin:0%"}
  teclas[3].onmousedown=cambioTecla3;
  teclas[3].onmouseup=vuelveTecla3;
function cambioTecla4() {
  teclas[4].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla4() {
  teclas[4].style="width:22%;height:62.91px;margin:0%"}
  teclas[4].onmousedown=cambioTecla4;
  teclas[4].onmouseup=vuelveTecla4;
function cambioTecla5() {
  teclas[5].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla5() {
  teclas[5].style="width:22%;height:62.91px;margin:0%"}
  teclas[5].onmousedown=cambioTecla5;
  teclas[5].onmouseup=vuelveTecla5;
function cambioTecla6() {
  teclas[6].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla6() {
  teclas[6].style="width:22%;height:62.91px;margin:0%"}
  teclas[6].onmousedown=cambioTecla6;
  teclas[6].onmouseup=vuelveTecla6;
function cambioTecla7() {
  teclas[7].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla7() {
  teclas[7].style="width:22%;height:62.91px;margin:0%"}
  teclas[7].onmousedown=cambioTecla7;
  teclas[7].onmouseup=vuelveTecla7;
function cambioTecla8() {
  teclas[8].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla8() {
  teclas[8].style="width:22%;height:62.91px;margin:0%"}
  teclas[8].onmousedown=cambioTecla8;
  teclas[8].onmouseup=vuelveTecla8;
function cambioTecla9() {
  teclas[9].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla9() {
  teclas[9].style="width:22%;height:62.91px;margin:0%"}
  teclas[9].onmousedown=cambioTecla9;
  teclas[9].onmouseup=vuelveTecla9;
function cambioTecla10() {
  teclas[10].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla10() {
  teclas[10].style="width:22%;height:62.91px;margin:0%"}
  teclas[10].onmousedown=cambioTecla10;
  teclas[10].onmouseup=vuelveTecla10;
function cambioTecla11() {
  teclas[11].style="width:20%;height:59px;margin:0% 1%"}
function vuelveTecla11() {
  teclas[11].style="width:22%;height:62.91px;margin:0%"}
  teclas[11].onmousedown=cambioTecla11;
  teclas[11].onmouseup=vuelveTecla11;
function cambioTecla12() {
  teclas[12].style="width:27%;height:59px;margin:0% 1%"}
function vuelveTecla12() {
  teclas[12].style="width:29%;height:62.91px;margin:0%"}
  teclas[12].onmousedown=cambioTecla12;
  teclas[12].onmouseup=vuelveTecla12;
function cambioTecla13() {
  teclas[13].style="width:27%;height:59px;margin:0% 1%"}
function vuelveTecla13() {
  teclas[13].style="width:29%;height:62.91px;margin:0%"}
  teclas[13].onmousedown=cambioTecla13;
  teclas[13].onmouseup=vuelveTecla13;
function cambioTecla14() {
  teclas[14].style="width:27%;height:59px;margin:0% 1%"}
function vuelveTecla14() {
  teclas[14].style="width:29%;height:62.91px;margin:0%"}
  teclas[14].onmousedown=cambioTecla14;
  teclas[14].onmouseup=vuelveTecla14;
function cambioTecla15() {
  teclas[15].style="width:27%;height:59px;margin:0% 1%"}
function vuelveTecla15() {
  teclas[15].style="width:29%;height:62.91px;margin:0%"}
  teclas[15].onmousedown=cambioTecla15;
  teclas[15].onmouseup=vuelveTecla15;
function cambioTecla16() {
  teclas[16].style="width:27%;height:59px;margin:0% 1%"}
function vuelveTecla16() {
  teclas[16].style="width:29%;height:62.91px;margin:0%"}
  teclas[16].onmousedown=cambioTecla16;
  teclas[16].onmouseup=vuelveTecla16;
function cambioTecla17() {
  teclas[17].style="width:27%;height:59px;margin:0% 1%"}
function vuelveTecla17() {
  teclas[17].style="width:29%;height:62.91px;margin:0%"}
  teclas[17].onmousedown=cambioTecla17;
  teclas[17].onmouseup=vuelveTecla17;
function cambioTecla18() {
  teclas[18].style="width:86%;margin:2%;margin-left:10px;margin-bottom:3px"}
function vuelveTecla18() {
  teclas[18].style="width:90%;margin:0px:margin-left:10px"}
  teclas[18].onmousedown=cambioTecla18;
  teclas[18].onmouseup=vuelveTecla18;

on.addEventListener("click",function(){
  borra()})
signo.addEventListener("click",function(){
  cadena=validaSigno(cadena)})
uno.addEventListener('click', function(){
  cadena=digitar(cadena,"1")})
dos.addEventListener('click', function(){
  cadena=digitar(cadena,"2")})
tres.addEventListener('click', function(){
  cadena=digitar(cadena,"3")})
cuatro.addEventListener('click', function(){
  cadena=digitar(cadena,"4")})
cinco.addEventListener('click', function(){
  cadena=digitar(cadena,"5")})
seis.addEventListener('click', function(){
  cadena=digitar(cadena,"6")})
siete.addEventListener('click', function(){
  cadena=digitar(cadena,"7")})
ocho.addEventListener('click', function(){
  cadena=digitar(cadena,"8")})
nueve.addEventListener('click', function(){
  cadena=digitar(cadena,"9")})
cero.addEventListener('click', function(){
  cadena=comprueba0(cadena)})
punto.addEventListener('click', function(){
  cadena=compruebaPunto(cadena)})
suma.addEventListener('click', function(){
  operacion=sumar()})
resta.addEventListener('click', function(){
  operacion=restar()})
multi.addEventListener('click', function(){
  operacion=multiplicar()})
divi.addEventListener('click', function(){
  operacion=dividir()})
igual.addEventListener('click', function(){
  cadena=resultado(operacion[0],operacion[1])})
var borrar=""
function resultado(operacion,repite){
  if (operacion=="+") {
    var r=parseFloat(acum) + parseFloat(acum2)
  }else if (operacion=="-") {
    var r=parseFloat(acum2) - parseFloat(acum)
  }else if (operacion=="*") {
    var r=parseFloat(acum2) * parseFloat(acum)
  }else if (operacion=="/") {
    var r=parseFloat(acum2)/parseFloat(acum)
  }
  r=r.toString()
  if (repite>=acumres){
    acum2=r
  }else{
    acum=r
  }
  if (r.length<9) {
    pantalla.innerHTML=r
  }else{
    pantalla.innerHTML=r[0]+r[1]+r[2]+r[3]+r[4]+r[5]+r[6]+r[7]
  }
  borrar=1
  acumres=repite
  return r
}
function sumar(){
  acum2=pantalla.innerHTML
  pantalla.innerHTML=""
  acum=""
  cont=cont+1
  return ("+"+cont)
}
function restar(){
  acum2=pantalla.innerHTML
  pantalla.innerHTML=""
  acum=""
  cont=cont+1
return ("-"+cont)
}
function multiplicar(){
  acum2=pantalla.innerHTML
  pantalla.innerHTML=""
  acum=""
  cont=cont+1
  return ("*"+cont)
}
function dividir(){
  acum2=pantalla.innerHTML
  pantalla.innerHTML=""
  acum=""
  cont=cont+1
  return ("/"+cont)
}

function digitar (cadena,num){
  if (borrar==1){
    acum=""
    borrar=0
  }
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
  acum2=0
  operacion=0
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
       return acum
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
