<template>
  
  <nav>
    <div class="nav_content">
    <img src="/Logo.png" alt="">
    <ul>
      <li>
        <NuxtLink to="/">Sobre mi</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Pagina2">UX/UI</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Pagina3">Otros trabajos</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Pagina4">Contacto</NuxtLink>
      </li>
    </ul>
    <button>
      Contáctame
    </button>
    </div>
    
    
    
   </nav>
   
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu_lateral {
  display: flex;
 

  align-items: center;
  

  


  nav {
    // display: flex;
    // align-items: center;
    // width: 100%;
    .nav_content{
      display: flex;
      align-items: center;

    
    img{
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
      

   } 
   box-shadow: 0px 5px 5px rgb(151, 151, 151);
    // margin-top: 5rem;
    display: flex;

    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;

    ul {
      display: flex;
      flex-flow: row;
      list-style: none;
      // margin-top: 8rem;
      padding: 0;
      li {
        padding: 0.5rem;
        // margin-top: 4rem;
        a {
          text-decoration: none;
          color: rgb(119, 98, 117);
           font-family: Arial, Helvetica, sans-serif;
           padding-left: 1rem;
           padding-right: 1rem;
        }
        a:hover{
          color: #f47fc2;
          border-bottom: solid 1px rgb(119, 98, 117);

        }
      }
    }
    }
    
      
      button{
        margin-left: 55rem;
        border-radius: 20px;
        border: none;
        padding: 0.5rem;
        color: #f47fc2;
        background-color: white;

      }
    
  }
}
</style>
