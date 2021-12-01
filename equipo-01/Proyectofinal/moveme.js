//PANEL 1
//Isla de calor
var calor = document.getElementById('isla');
var limite = 900
var i = 5
function islas(){
if(limite> 920 || limite <900){
  i = (-1)*i;
  calor.style.background = 'rgb(245, 290, 37)';//cambio color 
  if(i >0){
  i = i/2;      
  calor.style.background = 'rgb(245, 219, 73)';// color inicial
  }else{
  i = i *2;
  }
}
limite= limite + i;
};


//Smog
var smog1 = document.getElementById('monoxido1');
var smog2 = document.getElementById('monoxido2');
var smog3 = document.getElementById('monoxido3');
var crece = 5;
var ancho = 100;

function smogs(){
    if(ancho> 120 || ancho <100){
      ancho=100;
    }
      ancho= ancho + crece;
      smog1.style.width = ancho + 'px';
      smog2.style.width = ancho + 'px';
      smog3.style.width = ancho + 'px';
      };

//Flecha izq
var base_izq1 = document.getElementById('flecha1');
var punta_izq1 = document.getElementById('triangulo1');

//Flecha derecha
var base_der1 = document.getElementById('flecha2');
var punta_der1 = document.getElementById('triangulo2');

//Avion
var avion= document.getElementById('avion');
var vol_inicio= 700;

function vuelo(){
if (vol_inicio> 850|| vol_inicio<460){
  vol_inicio= 460;  
}
vol_inicio=vol_inicio+dist;
avion.style.left=vol_inicio+ 'px';
};

// PANEL 2
//Nube 
var nube=document.getElementById('nube2');  
var nube2=document.getElementById('lluvia2');      
var partida=430;
var partida2=580;
var dist=5;        
        
function nubes(){
if (partida && partida2 > 965 || partida && partida2 < 430) {
            partida= 430;
            partida2= 580;
          }
          partida= partida+dist;
          partida2= partida2+ dist;
          nube.style.left=partida+'px';
          nube2.style.left=partida2+'px';
        };

//Flecha izquierda
var base_izq = document.getElementById('flecha4');
var punta_izq = document.getElementById('triangulo4');
var position_base_izq = 230;
var position_punta_izq= 194;
var dist_flecha=2;

function flechaizq(){
if (position_base_izq && position_punta_izq>560 || position_base_izq && position_punta_izq < 500) {
position_base_izq= 500;
position_punta_izq= 540;
        }
      position_base_izq= position_base_izq + dist_flecha;
      position_punta_izq= position_punta_izq + dist_flecha;
      base_izq.style.left= position_base_izq - 'px';
      base_izq.style.top = position_base_izq + 'px';
      punta_izq.style.left= position_punta_izq - 'px';
      punta_izq.style.top= position_punta_izq + 'px';
      base_izq1.style.left= position_base_izq - 'px';
      base_izq1.style.top = position_base_izq + 'px';
      punta_izq1.style.left= position_punta_izq - 'px';
      punta_izq1.style.top= position_punta_izq + 'px';
      };

//Flecha derecha
var base_der = document.getElementById('flecha5');
var punta_der = document.getElementById('triangulo5');
var position_base_der = 1300;
var position_punta_der= 1260;
var dist_flecha=2;

function flechader(){
if (position_base_der && position_punta_der>510 || position_base_der && position_punta_der < 445) {
position_base_der= 445;
position_punta_der= 490;
        }
      position_base_der= position_base_der + dist_flecha;
      position_punta_der= position_punta_der + dist_flecha;
      base_der.style.left= position_base_der - 'px';
      base_der.style.top = position_base_der + 'px';
      punta_der.style.left= position_punta_der - 'px';
      punta_der.style.top= position_punta_der + 'px';
      base_der1.style.left= position_base_der - 'px';
      base_der1.style.top = position_base_der + 'px';
      punta_der1.style.left= position_punta_der - 'px';
      punta_der1.style.top= position_punta_der + 'px';
      };

//Movimiento

setInterval(function(){
    smogs();
    setTimeout(flechaizq, 300);
    flechader();
    islas();
    vuelo();
},300);

setInterval(function(){
  nubes();
  setTimeout(flechaizq, 300);
  flechader();
},200);


/*"Cuando una página está en segundo plano, no se repinta en absoluto,
 por lo que el callback no se ejecutará: la animación se suspenderá y no consumirá recursos. Eso es genial."*/
//Fuente: https://es.javascript.info/js-animation

 function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction va de 0 a 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // calcular el estado actual de la animación
      let progress = timing(timeFraction);
  
      draw(progress); // dibujar
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }