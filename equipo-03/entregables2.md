## Etapa 2 del proyecto final

- Numero del equipo: 3
- Nombre del equipo: Contaminación submarina, problema de todos
- Nombre de todos miembros en su equipo: Zoe Ailen Montes, Débora Cuestas, Arantza Lozada, Maria Camila Rojas Muñoz.
- El título de su proyecto: (Elegir título de la entrega en conjunto)
- La lista de recursos y referencias que han usado:

- Graben un video de 5-min usando el modelo “Entrega 2 Proyecto Final Patrones Hermosos”. Utilicen el template de diapositivas en nuestra plataforma, que está publicado en la plataforma, para grabar el video. Subanlo a YouTube o Vimeo. Pongan la liga del vídeo aquí: 
- Escriban las preguntas/dudas que tienen sobre su proyecto y/o su código para las moderadoras. Cuando las moderadoras les escribirán con retroalimentación en el foro, incluirán sugerencias a estas preguntas. Añadan sus preguntas aquí:

No se olviden de entregar el código que ustedes han escrito para el proyecto final. Instrucciones para subir archivos a Github están disponibles en la plataforma.


<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.55.4">
    <title>Contaminación submarina, problema de todos - Equipo 03</title>

    <link rel="canonical" href="https://getbootstrap.comdocs/4.3/examples/carousel/">

    <!-- Bootstrap core CSS -->
    <link href="docs/4.3/dist/css/bootstrap.css" rel="stylesheet">

    <!-- Favicons -->
    <link rel="apple-touch-icon" href="docs/4.3/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
    <link rel="manifest" href="docs/4.3/assets/img/favicons/manifest.json">
    <link rel="mask-icon" href="docs/4.3/assets/img/favicons/safari-pinned-tab.svg" color="#563d7c">
    <link rel="icon" href="./images/pescado.png">
    <!-- <meta name="msapplication-config" content="docs/4.3/assets/img/favicons/browserconfig.xml"> -->
    <meta name="theme-color" content="#563d7c">

    <style>
      .nav-bg{
        background-color: #5BC07B;
      }
      .bg-seco{
        background-color:  #C05BA0;
      }
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="carousel.css" rel="stylesheet">
  </head>

  <body>
    
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top nav-bg">
        <a class="navbar-brand" href="/">Equipo 03</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#scroll">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scroll">Ver más</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> -->
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control  mr-sm-2" type="text" placeholder="Buscar" aria-label="Search">
            <button class="btn text-white my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </header>

    <main role="main">

      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="logo.jpg"  alt="...">

            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Contaminación submarina, problema de todos</h1>
                <p>La contaminación del agua se produce cuando ingresan en un entorno la presencia de elementos o sustancias que son nocivas para el ecosistema</p>
                <p><a class="btn btn-lg bg-seco text-white" href="#scroll" role="button">Ver más</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="tortugabarbijo.jpg" alt="...">

            <div class="container">
              <div class="carousel-caption">
                <h1>Contaminación submarina, problema de todos</h1>
                <p>El agua es un recurso básico de importancia vital, ya que permite garantizar la vida de todos los seres vivos</p>
                <p><a class="btn btn-lg bg-seco text-white" href="#scroll" role="button">Ver más</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="oceano_mar_contaminacion.webp" alt="...">

            <div class="container">
              <div class="carousel-caption text-right">
                <h1>Contaminación submarina, problema de todos</h1>
                <p>El ser humano es el principal causante de la contaminación del agua</p>
                <p><a class="btn btn-lg bg-seco text-white" href="#scroll" role="button">Ver más</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div id="scroll" class="container marketing">

        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2 style="color: #5BC07B;">Contaminación del agua</h2>
            <p>"La contaminación del agua se produce cuando ingresan en un entorno la presencia de elementos o sustancias que son nocivas para el ecosistema, es decir, ponen en riesgo su equilibrio, viéndose perjudicada la salud de los seres humanos y los animales que habiten en ese espacio. El agua es un recurso básico de importancia vital, ya que permite garantizar la vida de todos los seres vivos. En la actualidad, se presentan diversos problemas como su escasez y la contaminación, ocasionando graves daños al ecosistema de nuestro planeta Tierra. La contaminación del agua resulta ser la más perjudicial, ya que a nivel mundial es la principal causa de muertes y enfermedades, siendo perjudicadas un aproximado de 14.000 personas diariamente."</p>
            <p><a class="btn bg-seco text-white" href=https://www.contaminacionx.com/contaminacion-agua/#¿Que_es_la_contaminacion_del_agua>Contaminación del agua en LATAM por Sebastián Álvarez</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2 style="color: #5BC07B;">El ser humano, principal responsable de la contaminación del agua
            </h2>
            <p>"El ser humano es el principal causante de la contaminación del agua, que puede verse afectada de muchas maneras: con el vertido de desechos industriales; por culpa del aumento de las temperaturas, que provocan la alteración del agua al disminuir el oxígeno en su composición; o a causa de la deforestación, que origina la aparición de sedimentos y bacterias bajo el suelo y la consiguiente contaminación del agua subterránea.
    
              De la misma manera, los pesticidas utilizados en los campos de cultivo agrícola se filtran por los canales subterráneos y llegan a las redes de consumo; y también con el vertido accidental de petróleo."</p>
            <p><a class="btn bg-seco text-white" href=https://www.aguasresiduales.info/revista/noticias/causa-y-consecuencias-de-la-contaminacion-del-agua-JNEEY>Aguas residuales INFO</a></a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2 style="color: #5BC07B;">Las soluciones a la contaminación del agua</h2>
            <p>"Las principales soluciones pasan por:

              Reducir el efecto invernadero y la temperatura del planeta. Para así restaurar el equilibrio y el nivel de oxígeno de los mares. Esto implica acelerar todas las medidas para combatir el cambio climático: mayor reciclaje, electrificación del transporte, impulso a las renovables, etc.
              Reducción del uso del plástico y de los microplásticos que ya hay en el agua. Debemos disminuir el plástico (especialmente de un solo uso) para reducir los desechos que acaban en el mar. Del mismo modo, hay que eliminar el que ya está en el agua. Por desgracia, ninguna solución que tenemos ahora es 100% efectiva, pero se están estudiando nuevos métodos de extracción, bioreactores de membrana para filtrar o bacterias que se alimenten de plásticos.
              Una gestión responsable de la pesca y el uso de recursos marinos. Para no agotar ecosistemas ya de por sí muy dañados.
              Una agricultura más sostenible. Que reduzca el uso de pesticidas que acaban llegando al agua." Entre otras...</p>
            <p><a class="btn bg-seco text-white" href=https://www.energyavm.es/causas-y-posibles-soluciones-a-la-contaminacion-del-agua/>Energya VM</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->


        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

          </div>
        </div>

        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->

      </div><!-- /.container -->
    </main>

    <!-- FOOTER -->
    <footer class="container">
        <p class="float-right "><a  class="btn text-white  my-2 my-sm-0 bg-seco " href="https://github.com/PatronesHermosos/proyecto-final-3ra-intro/tree/main/equipo-03">Repositorio en Github</a></p>
        <p>Equipo 03 - Gracias por ver nuestro proyecto &#128154; </p>
    </footer>


    
    <!--JAVASCRIPT-->  
    <script src="docs/4.3/dist/js/bootstrap.bundle.js"></script>
  </body>
</html>
