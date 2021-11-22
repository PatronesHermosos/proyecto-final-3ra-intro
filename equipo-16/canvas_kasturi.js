var c = document.getElementById("proyecto");
var lienzo = c.getContext("2d");
//montañas
var monta = new Image();
monta.src = "img/montaña.png";
monta.onload = function(){
    lienzo.drawImage(monta, 0, 35, 100, 300);
    lienzo.drawImage(monta, 400, 35, 200, 300);
}
//ciudad
var img = new Image();
img.src = "img/citygreen.png";
img.onload = function(){
      lienzo.drawImage(img, 50, 40, 300, 360);
}
//parque
var arboles = new Image();
arboles.src = "img/arboleda.png";
arboles.onload = function(){
      lienzo.drawImage(arboles, 345, 230, 100, 100);
      lienzo.drawImage(arboles, 390, 230, 100, 100);
      lienzo.drawImage(arboles, 480, 230, 100, 100);
}
   //Nubes
function nubecita(lienzo,xc,yc){
    lienzo.beginPath();
    lienzo.fillStyle = "white";
    lienzo.arc(xc-20,yc,10,0,Math.PI*2,false); // Dibuja el circulo en sentido horario
    lienzo.arc(xc-10,yc-15,15,0,Math.PI*2,false);
    lienzo.arc(xc,yc+5,15,0,Math.PI*2,false);
    lienzo.arc(xc+10,yc,15,0,Math.PI*2,false);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
    lienzo.closePath;
    lienzo.fill();

}
nubecita(lienzo,80,50);
nubecita(lienzo,300,80);
nubecita(lienzo,100,100);
nubecita(lienzo,280,20);
nubecita(lienzo,400,20);
//Parque
lienzo.fillStyle = "#5B8A72"; 
lienzo.fillRect(0, 310, 600, 100);
 //Vereda
lienzo.fillStyle = "#F4F9F9";  
lienzo.fillRect(0,360,1400,30);
var cera =0;
for(cera = 0; cera<1450;){
    lienzo.strokeRect(cera,360,10,30);
    cera = cera + 10;
  }
//Molino
var molino = new Image();
molino.src = "img/molinoViento.png";
molino.onload = function(){
      lienzo.drawImage(molino, 0, 240, 80, 140);
}
//Personas 
var biker = new Image();
biker.src = "img/biker.png";
biker.onload = function(){
      lienzo.drawImage(biker, 0, 420, 80, 80);
}
var skater = new Image();
skater.src = "img/skater.png";
skater.onload = function(){
      lienzo.drawImage(skater, 50, 350, 50, 50);
      lienzo.drawImage(skater, 390, 350, 50, 50);
      lienzo.drawImage(skater, 300, 350, 50, 50);
}
var patinadora = new Image();
patinadora.src = "img/patinadora.png";
patinadora.onload = function(){
      lienzo.drawImage(patinadora, 480, 350, 50, 50);
}
var pareja = new Image();
pareja.src = "img/pareja.png";
pareja.onload = function(){
      lienzo.drawImage(pareja, 200, 350, 50, 50);
}
var ciclistaM = new Image();
ciclistaM.src = "img/ciclistaM.png";
ciclistaM.onload = function(){
      lienzo.drawImage(ciclistaM, 200, 380, 50, 50);
      lienzo.drawImage(ciclistaM, 80, 380, 50, 50);
}
var ciclistaH = new Image();
ciclistaH.src = "img/ciclistaH.png";
ciclistaH.onload = function(){
      lienzo.drawImage(ciclistaH, 200, 420, 80, 80);
}
var couple = new Image();
couple.src = "img/couple.png";
couple.onload = function(){
      lienzo.drawImage(couple, 300, 400, 120, 120);
}
//calle
lienzo.fillStyle = "black"; 
lienzo.fillRect(0, 390, 1400, 120);
var lineas = 0;
for(lineas=0; lineas< 1450;){
    
      lienzo.clearRect(lineas, 450, 10, 10);
      lineas = lineas + 20;   
}
//cesped
lienzo.fillStyle = "#5B8A72"; 
lienzo.fillRect(0, 500, 600, 20);
//río
lienzo.fillStyle = "#A4EBF3";  
lienzo.fillRect(0,510,1400,100);
//Peces
function animarPecesRight(){
      setInterval("pecesRight()",100);
}
// var pecesD = new Image();
// pecesD.src = "img/pecesD.png";
// pecesD.onload = function(){
//       lienzo.drawImage(pecesD, 0, 520, 40, 40);
//       lienzo.drawImage(pecesD, 100, 520, 40, 40);
//       lienzo.drawImage(pecesD, 320, 520, 40, 40);
//       lienzo.drawImage(pecesD, 420, 520, 40, 40);
//       posicionX = posicionX + 10;
// }
// var unidad_tiempo = 100;
// var distancia = 10;
// var posicion = 0;
// setInterval(function peces(){
//   if (posicion > 200 || posicion < 0) {
//         distancia = -1*distancia;
//   }
//   posicion = posicion + distancia;
//   pecesD.style.left = posicion + 'px';
// },unidad_tiempo);

var pecesI = new Image();
pecesI.src = "img/pecesI.png";
pecesI.onload = function(){
      lienzo.drawImage(pecesI, 80, 560, 40, 40);
      lienzo.drawImage(pecesI, 190, 560, 40, 40);
      lienzo.drawImage(pecesI, 300, 560, 40, 40);
      lienzo.drawImage(pecesI, 480, 560, 40, 40);
}
var forma = document.getElementById('');

 