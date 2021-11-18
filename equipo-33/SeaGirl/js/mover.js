function main() {
    //código para mover el cuadrado con las flechas del teclado.
    let caballo = document.querySelector("#caballo img");
  
    //Función para obtener el código de las arrow keys presionadas.
    document.addEventListener("keydown", (elEvento) => {
      const marginLeftText = caballo.style.marginLeft.replace("px", "");
      const marginLeft = parseInt(marginLeftText || "0");
      let newMarginLeft = marginLeft;
  
      const marginTopText = caballo.style.marginTop.replace("px", "");
      const marginTop = parseInt(marginTopText || "0");
      let newMarginTop = marginTop;
  
      if (elEvento.code == "ArrowLeft") {
        newMarginLeft--;
      } else if (elEvento.code == "ArrowRight") {
        newMarginLeft++;
      } else if (elEvento.code == "ArrowUp") {
        newMarginTop--;
      } else if (elEvento.code == "ArrowDown") {
        newMarginTop++;
      }
  
      caballo.style.marginLeft = newMarginLeft + "px";
      caballo.style.marginTop = newMarginTop + "px";
    });
  }
  
main();




var velocity = 150;
var position = 120;

var estrella = document.getElementById("#estrella img");

function myFunction() {
    if(position > 600 || position < 30){
        velocity = (-1) * velocity;
    }
// Define la posición de “ball” 
position = position + velocity;
estrella.style.left = position + 'px';
}
setInterval(myFunction,300);