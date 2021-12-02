let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
<section>
<!-- JavaScript para la animación de la ventana que aparecerá -->
<script>
  // Cuando le da clic en el elemento, vemos la ventana emergente
  function funcionVentanaEmergente() {
    // creando una variable para guardar el elemento ventana_emergente
    var popup = document.getElementById("ventana_emergente");
    // mostrando la ventana emergente cuando alguien le da clic por llamar al CSS que todavia definimos
    popup.classList.toggle("show");
  }
  </script>
</section>