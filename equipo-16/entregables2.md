## Etapa 2 del proyecto final

- Número del equipo: 16
- Nombre del equipo: Super equipo 16
- Nombre de todos miembros en su equipo:
   - Natalia López Gutiérrez
   - Vania Rebeca Ramos López 
   - Kristhel Fiorelly Orellana Orellana

- El título de su proyecto: Contaminación en Latinoamérica
- La lista de recursos y referencias que han usado:
   - Contaminación : https://www.bbc.com/mundo/noticias-56001440
   - Imágenes 
     - https://pixabay.com/es/illustrations/search/ciudad/
     - https://it.freepik.com/vettori-gratuito/citta-vuota-illustrazione_7588754.htm
     - https://www.freepik.es/vector-gratis/ilustracion-hitos-horizonte-ciudad_11852628.htm#page=1&query=ciudad%20ilustracion&position=13&from_view=keyword
     - https://www.freepik.es/vector-gratis/ciudad-ciudad-calle-ilustracion-verano_6168821.htm#page=1&query=paisaje%20vector&position=25&from_view=keyword
- Graben un video de 5-min usando el modelo “Entrega 2 Proyecto Final Patrones Hermosos”. Utilicen el template de diapositivas en nuestra plataforma, que está publicado en la plataforma, para grabar el video. Subanlo a YouTube o Vimeo. Pongan la liga del vídeo aquí: https://youtu.be/NVO7JSNmwKI
- Escriban las preguntas/dudas que tienen sobre su proyecto y/o su código para las moderadoras. Cuando las moderadoras les escribirán con retroalimentación en el foro, incluirán sugerencias a estas preguntas. Añadan sus preguntas aquí:
   -¿Es recomendable que las imágenes que utilicemos para nuestra obra de arte, tenga posición relativa o es mejor utilizar posición absoluta?

No se olviden de entregar el código que ustedes han escrito para el proyecto final. Instrucciones para subir archivos a Github están disponibles en la plataforma.


Código en HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--ruta de la hoja de estilos-->
        <link rel="stylesheet" href="style.css">
    <title>Contaminación</title>
</head>
<body>
    <div id="container">
        <header>
            <h1>¡La contaminación en latinoamerica!</h1>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
        </header>
     
        <section1 id="content">
            <div>
                <p>ciudad ecológica</p>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
                <img src="img/plaza.jpg" alt="ciudad ecológica"
                style="object-fit:contain;
                position:relative;
                           width:100%;
                           height:100%"/>
            </div>

        </section2 id="content">
        <div>
            <p>Texto2</p>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
            <img src="img/verde2.jpg" alt="Texto2"
            style="object-fit:contain;
            position:relative;
                       width:100%;
                       height:100%"/>
        </div>

    </section3 id="content">
    <div>
        <p>Texto3</p>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
        <img src="img/verano.jpg" alt="Texto3"
        style="object-fit:contain;
        position:relative;
                   width:100%;
                   height:100%"/>
    </div>
        <footer>
            <h3>Diseñado por Súper equipo 16</h3>
  
        </footer>
    </div> 
</body>
</html>

código en CSS

body{
    font-family: 'Times New Roman', Times, serif;
    line-height: 1.8;
    font-size: 16px;
    background: #fff;
    color: #848484;
    font-weight: 300;
    overflow-x: hidden;
    margin: 25px 50px 75px;
}
header{
    color: #212121;
    font-family:'Dancing Script', cursive;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    margin: 0 0 340px 0;
}
section1{
    background-color: transparent;
    color: #3f2c53;
    font-family:'Dancing Script', cursive;
    font-weight: 400;
    font-size: 85px;
    text-align: center;
    margin: 0 0 340px 0;
}
section2{
    background-color: transparent;
    color: #3f2c53;
    font-family:'Dancing Script', cursive;
    font-weight: 400;
    font-size: 85px;
    text-align: center;
    margin: 0 0 340px 0;
}
section3{
background-color: transparent;
color: #3f2c53;
font-family:'Dancing Script', cursive;
font-weight: 400;
font-size: 85px;
text-align: center;
margin: 0 0 3400px 0;
}

footer{
    float: left;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 12px;
    width: 100%;
    background: #ebebeb;
    padding-top: 12px;
    padding-bottom: 12px;
    box-sizing: border-box;
    text-align: center;
    color: #999999;
}
