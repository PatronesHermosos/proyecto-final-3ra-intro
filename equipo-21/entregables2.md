## Etapa 2 del proyecto final

- Numero del equipo: 21
- Nombre del equipo: A la mesa! 
- Nombre de todos miembros en su equipo: Berenice, Belen, Brenda, Carla 
- El título de su proyecto: Hambre Cero
- La lista de recursos y referencias que han usado:
Qué recursos utilizaron desde el internet, con citas:
https://www.globalgoals.org/es/2-zero-hunger para buscar fotos
https://www.un.org/zerohunger/content/pathways-zero-hunger para acceder al desafio 
https://unsplash.com/ para buscar fotos
https://www.timetoast.com/timelines/desarrollo-sustentable-9719c70a-4b43-4c08-bb23-8f1b76e22b85 imagen acciones empresas
https://www.pactomundial.org/2019/09/el-sector-privado-ante-el-ods-2/ obtener información

- Graben un video de 5-min usando el modelo “Entrega 2 Proyecto Final Patrones Hermosos”. Utilicen el template de diapositivas en nuestra plataforma, que está publicado en la plataforma, para grabar el video. Subanlo a YouTube o Vimeo. Pongan la liga del vídeo aquí: 
- https://youtu.be/ZjjdgeK2NzY 
- Escriban las preguntas/dudas que tienen sobre su proyecto y/o su código para las moderadoras. Cuando las moderadoras les escribirán con retroalimentación en el foro, incluirán sugerencias a estas preguntas. Añadan sus preguntas aquí: como realizar la inteaccion entre los botones redondos para que se redirija a la info de PERSONAS, EMPRESAS, E INFO DE AGRICULTURA

No se olviden de entregar el código que ustedes han escrito para el proyecto final. Instrucciones para subir archivos a Github están disponibles en la plataforma.
OBRA DE ARTE: 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZERO-HUNGER GRUPO 21</title>
</head>
<body>
    <nav>


    </nav>
    <header>
        <h1>ZERO HUNGER</h1>
    </header>
    <div id="obra" style="position: absolute; left: 50px; top: 150px;">
       <figure>
           <img src="img/obra.svg" alt="obra-de-arte" width="800" height="800">
       </figure>
    </div>
    <div id="agua">
 <div style="
    z-index: 5;
    position: absolute;
    left: 950px;
    top: 450px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: orange;">
 </div>
 <figure style="z-index: 5; position: absolute; left: 950px; top: 450px;">
    <img src="img/agua.svg" alt="agua" width="200" height="300">
 </figure>
    </div>
    <!--DIV CIERRE AGUA -->
    <!--DIV INICIO PLANTAS -->
    <div id="plantas">
    <div style="
    z-index: 5;
    position: absolute;
    left: 850px;
    top: 750px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: orange;">
 </div>
 <figure style="z-index: 5; position: absolute; left: 850px; top: 750px;">
     <img src="img/plantas.svg" alt="plantas" width="200" height="300">
 </figure>
</div>
 <!--DIV CIERRE PLANTAS -->
 <!--DIV INICIO FRUTAS -->
<div id="frutas">

 <div style="
 z-index: 5;
 position: absolute;
 left: 850px;
 top: 150px;
 width: 300px;
 height: 300px;
 border-radius: 50%;
 background: orange;">
</div>
<figure style="z-index: 5; position: absolute; left: 850px; top: 150px;">
    <img src="img/frutas.svg" alt="frutas" width="200" height="300">
</figure>
</div>
<!--DIV CIERRE FRUTAS -->


</body>
</html>

ACCIONES 
<html>
    <head>
        <script src="script.js"></script>
    </head>
    <body>
        <button onclick="revealMessage()">¿Qué pueden hacer las empresas?</button>
        <div id="hiddenMessage" style="display:none">
        <ul>
            <li>Promover acciones para reducir la pérdida y el desperdicio de alimentos a través de toda
                la cadena de valor, y encontrar maneras de redistribuir el exceso de alimentos.
            <li>Disminuir el impacto medioambiental que tienen sus operaciones, para evitar 
                crisis ambientales que repercutan en la correcta nutrición de la población.
            <li>Establecer programas de alimentación para empleados, que incluyan alimentos 
                sanos y nutritivos.
        </ul>
        <br>
        <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/13518216/image/7eb19afdd65118f1cbbe1eb5fb4408a6" width="500" height="400">
        <p>Información obtenida de: </p>
        <a href="https://www.pactomundial.org/2019/09/el-sector-privado-ante-el-ods-2/">Cita</a>
        </div>

        <button onclick="revealMessage2()">¿Qué se puede hacer en el sector agroalimentario?</button>
        <div id="hiddenMessage2" style="display:none">
        <ul>
            <li>Impulsar la agricultura, ganadería, silvicultura y pesca sostenibles entre sus
                 proveedores del sector primario, evaluándolos y ayudándoles a través de formación 
                 y capacitación tecnológica, promoviendo la producción sostenible.
            <li>Promover modelos empresariales inclusivos permiten la integración responsable de 
                los pequeños productores en los mercados con el principio subyacente de que hay beneficios 
                mutuos para ellos y para el sector privado.
            <li>Establecer políticas y prácticas de comunicación transparente con los consumidores 
                sobre la información nutricional de los productos, más allá de los requisitos legales.
        </ul>
        <br>
        <img src="img/agricultura.jpg" width="500" height="500">
        <p>Información obtenida de: </p>
        <a href="https://www.pactomundial.org/2019/09/el-sector-privado-ante-el-ods-2/">Cita</a>
        </div>

        <button onclick="revealMessage3()">¿Qué pueden hacer las personas?</button>
        <div id="hiddenMessage3" style="display:none">
        <ul>
            <li>Se pueden hacer cambios en la vida cotidiana —en el hogar, en el trabajo y en la    comunidad—,    apoyando a los agricultores o a los mercados locales y tomando decisiones    sostenibles sobre la alimentación, apoyando la buena nutrición para todos y luchando contra el desperdicio de alimentos.
            <li>También podemos utilizar nuestro poder como consumidores y votantes, exigiendo que las        empresas y los gobiernos tomen las decisiones y realicen los cambios que hagan posible lograr el objetivo del Hambre Cero. 
            <li> Aquellos que deseen apoyar la visión establecida en la ZHC pueden hacerlo de varias maneras dependiendo de su capacidad para comprometerse ellos mismos o su organización para llevar a cabo acciones reales hacia el Hambre Cero
            Como Partidario:  Cualquier persona, empresa u organización puede convertirse en  Partidario  de la ZHC uniéndose al Movimiento Global por el Hambre Cero,  comprometiéndose a defender y trabajar para marcar la diferencia en su propia vida diaria.
            
            <a href= https://www.un.org/zerohunger/content/pathways-zero-hunger>Cita</a>
        </div>
        </ul>
        <br>
        <img src="img/zero hunger.JPG" width="100" height="100">
        </div>
    </body>
</html>
