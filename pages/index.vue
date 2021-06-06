<template>
  <div class="container">
    <div class="menu_lateral">
      <Menu />
    </div>

    <div class="content">
      <div class="text">
        <h1 class="title">
          ¡Hola, soy Ainara Martínez!
        </h1>
        <h2>
          Estudiante de diseño gráfico
        </h2>
        <p>
          Hola, soy Ainara y soy estudiante de diseño gráfico. Mis trabajos
          incluyen diseño UX/UI, ilustración y diseño editorial entre otrros.
        </p>
        <div class="contact">
          <div class="email">
            <h3>
              Email:
            </h3>
            amx899@gmail.com
          </div>
          <div class="git">
            <h3>
              Github:
            </h3>
            Ainara21
          </div>
        </div>
        <button>
          Descarga mi CV
        </button>
      </div>
      <div class="mancha">
        <img src="/foto_porfolio.png" alt="" />
      </div>
      <div class="opciones" data-aos="zoom-out-up">
        <div class="cuadro">
          <font-awesome-icon icon="check" />
          <div class="cuadro_text">
            <h4><NuxtLink to="/">Últimos trabajos</NuxtLink> </h4>
            Echa un vistazo a lo más reciente
          </div>
        </div>
        <div class="cuadro">
          <font-awesome-icon icon="check" />
          <div class="cuadro_text">
            <h4><NuxtLink to="/">Galería de fotos</NuxtLink></h4>
            Mockups y más
          </div>
        </div>
        <div class="cuadro">
          <font-awesome-icon icon="check"  />
          <div class="cuadro_text">
            <h4><NuxtLink to="/">Todos los trabajos</NuxtLink></h4>
          </div>
        </div>
      </div>
      <div class="skills">
        <h2>
          Mis habilidades de diseño
        </h2>
        Aquí puedes ver un resumen de mis habilidades de diseño, asi como los
        programas que manejo en mi día a día y mi nivel de conocimiento en cada
        uno de ellos.
        <div class="niveles" data-aos="fade-right">
          <div class="porcentaje"></div>
          <div class="item ">
             <h4 >
            Indesign 
            </h4>
            90%

          </div>
          <div class="item">
             <h4 >
            Illustrator
            </h4>
            90%

          </div>
          <div class="item">
             <h4 >
            Visual Studio Code
            </h4>
            80%

          </div>
          <div class="item">
             <h4 >
            Figma
            </h4>
            80%

          </div>
         
          
        </div>
      </div>
      <div class="skillstwo" >
        <div class="square" data-aos="zoom-in">
          <div class="icon">
            <img src="/gdesign.png" alt="">


          </div>
          <div class="square_text">
            Diseño gráfico

          </div>
        </div>
        <div class="square" data-aos="zoom-in" data-aos-duration="500">
          <div class="icon">
            <img src="/gdesign.png" alt="">


          </div>
          <div class="square_text">
            Diseño gráfico

          </div>
        </div>
        <div class="square" data-aos="zoom-in" data-aos-duration="800">
          <div class="icon">
            <img src="/gdesign.png" alt="">


          </div>
          <div class="square_text">
            Diseño gráfico

          </div>
        </div>
        <div class="square" data-aos="zoom-in" data-aos-duration="1100">
          <div class="icon">
            <img src="/gdesign.png" alt="">


          </div>
          <div class="square_text">
            Diseño gráfico

          </div>
        </div>
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
      .contact {
        display: flex;
        .email {
          display: flex;
          flex-flow: column;
          margin-right: 5rem;
          h3 {
            font-weight: bold;
          }
        }
        .git {
          display: flex;
          flex-flow: column;

          h3 {
            font-weight: bold;
          }
        }
      }
      button {
        border-radius: 20px;
        border: none;
        color: #f47fc2;
        padding: 0.7rem;
        margin-top: 2rem;
      }
    }
    .mancha {
      height: 30rem;
      width: 30rem;
      margin-top: 6rem;
      margin-left: 4rem;

      img {
        margin-top: 3rem;
        height: 20rem;
        border-radius: 50px;
      }
    }
    .opciones {
      display: flex;
      justify-content: space-around;
      grid-column-start: 1;
      grid-column-end: 3;
      padding-left: 10rem;
      padding-right: 22rem;
      margin-top: -2rem;
      .cuadro {
        box-shadow: 5px 5px 5px rgb(151, 151, 151);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 6rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 50px;
        
        .cuadro_text {
          padding-left: 1rem;
          font-size: 0.5rem;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: flex-start;
          
          h4 {
            margin-bottom: 0.2rem;
            margin-top: 0;
            font-size: 1rem;
            color: #f47fc2;
            a{
              text-decoration: none;
              color: #f47fc2;
            }
            a:hover{
              color:  rgb(119, 98, 117);
            }
            
          }
        }
      }
    }
    .skills{
      text-align: start;
      padding-left: 8rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
      .niveles{
        .item{
          font-size: 1rem;
            
            border-bottom:solid 2px #f47fc2 ;
           
            // padding-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h4{
              color: #f47fc2;
            }
           

        }
        
      }
    }
    .skillstwo{
      padding-left: 5rem;
      display:flex ;
      flex-wrap: wrap;
      padding-right: 5rem;
      padding-top: 2rem;
      margin-bottom: 5rem;
      margin-top: 3rem;
      .square{
        box-shadow: 5px 5px 5px rgb(151, 151, 151);
        height: 10rem;
        width: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        margin-right: 2rem;
        margin-top: 1rem;
        border-radius: 10px;
        
        .icon{
          img{
            width: 5rem;
            height: 5rem;
          }

        }
        .square_text{

        }
      }
    }
  }
}
</style>
