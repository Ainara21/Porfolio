<template>
  <div class="container">
    <div class="menu_lateral">
      <Menu />
    </div>

    <div class="content">
      <div class="text">
        <h1 class="title">
          Diseño UX/UI
        </h1>
        <h2>
          Rediseño app móvil de Filmin
        </h2>
        <p>
          Tras un estudio en figma de la versión desktop y app, nos hemos dado
          cuenta de que filmin tiene mucho contenido pero una mala accesibilidad
          para el usuario, que no puede filtrar el contenido para llegar más
          rápido. <br /><br />
          En este estudio nos dimos cuenta que, sobretodo, la app móvil tenía un
          serio problema de accesibilidad, con navegaciones confusas o poco
          intuitivas, así como carencias a la hora clasificar su contenido para
          una mejor distribución de cara al usuario. <br /><br />
          Además, analizando la parte gráfica de la marca y UI de su aplicación,
          hemos podido concretar un rediseño más actual pudiendo así competir
          con las plataformas más populares.
        </p>
      </div>
      <div class="mancha">
        <img src="/mockup1.png" alt="" >
      </div>
      <div class="manchaizq" data-aos="fade-right">
        <img src="/mockup2.png" alt="" >
      </div>
      <div class="soloparrafo">
        <p>
          Ahora el fondo tiene un blur que nos permite reconocer el lugar desde
          el cual se abre y además le da un toque más moderno. Usaremos el color
          corporativo secundario para ello.
        </p>

        <p class="parrafocompleto" data-aos="fade-left">
          Para mejorar la experiencia de usuario y la búsqueda de contenido
          ponemos los géneros en cada una de las pantallas “películas, series y
          clásicos”. Así el usuario, que anteriormente solo podía elegir género
          y el resultado era un conjunto de películas y series, ahora puede
          buscar por genero o solo películas, o solo series o solo clasicos.
          <br /><br />
          Filtros pasa al mismo nivel que géneros, ya que con el icono de
          hamburguesa no estaba claro para el usuario que eso fuese un filtrado,
          además de tener dos menús hamburguesa en el menú principal. Además le
          añadimos la función que se incorpora ya en el desktop, de poder
          filtrar por décadas ya que creemos que al tipo de usuario potencial de
          filmin le puede interesar una época concreta.
        </p>
      </div>
      <div class="parrafoizq" data-aos="fade-right">
        <p>
          La lupa pasa al menú inferior ya que consideramos que el usuario de
          filmin querrá buscar habitualmente contenido concreto, por lo que
          tiene sentido que se mantenga constante en el menú inferior y con un
          mayor protagonismo del que tenía hasta ahora. <br><br> Las colecciones no
          tienen tanta importancia como para sugerirse en el menú principal a la
          altura de “películas” , “series” o “clásicos”. Por qué no la tienen?
          Porque actúan a modo de categorías adicionales o listas ya creadas y
          deben sugerirse como contenido adicional para el usuario.
        </p>
        <p class="soloparrafo2">
          Ahora las olecciones aparecen en la lupa, como sugerencia de búsqueda rápida. El rediseño
          se basa en imágenes monocromáticas y con una tipografía diferente para
          cada una relacionada con su contenido, dándole así más personalidad.
        </p>
      </div>
      <div class="manchadcha" data-aos="fade-left" data-aos-duration="2100">
        <img src="/mockup3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  overflow-x: hidden;
  .menu_lateral {
    position: absolute;
    background-color: rgb(221, 221, 221);
    left: 0;
    top: 0;
    // height: 100%;
    // min-height: 100vh;
    width: 100%;
    z-index: 1;
  }
  .content {
    background-color: rgb(221, 221, 221);
    min-height: 100vh;
    padding-left: 5rem;
    // padding-right: 5rem;
    top: 0;
    // left: 15rem;
    right: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1fr);
    .text {
      padding-top: 8rem;
      text-align: justify;
      margin-left: 8rem;
      h2 {
        color: #f47fc2;
      }
    }
    .mancha {
      height: 30rem;
      width: 30rem;
      margin-top: 1rem;
      margin-left: 10rem;

      img {
        margin-top: 3rem;
        height: 40rem;
        border-radius: 50px;
      }
    }
    .span2 {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .manchaizq {
      height: 50rem;
      width: 30rem;
      margin-left: 5rem;

      img {
        margin-top: 3rem;
        height: 40rem;
      }
    }
    .manchadcha {
      height: 60rem;
      width: 30rem;
      margin-left: 10rem;
      margin-top: -25rem;

      img {
        margin-top: 3rem;
        height: 50rem;
      }
    }
    .soloparrafo {
      p {
        color: #f47fc2;
      }
      padding-top: 8rem;
      text-align: justify;
      margin-right: 8rem;
      margin-left: -20rem;
      margin-top: 3rem;
      width: 22rem;
      .parrafocompleto {
        color: black;
        margin-left: 10rem;
        width: 40rem;
      }
    }
    .parrafoizq {
      margin-top: -6rem;
      padding-left: 8rem;
      text-align: justify;
      width: 40rem;
      .soloparrafo2{
          color: #f47fc2;
          width: 22rem;
          margin-left: 25rem;
          margin-top: 2rem;

      }
    }
  }
}
</style>
