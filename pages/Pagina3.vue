<template>
  <div class="container">
    <div class="menu_lateral">
      <Menu />
    </div>

    <div class="content">
      <div class="text">
        <h1 class="title">
          Otros trabajos
        </h1>
        <h2>
          Ilustración
        </h2>
        <p>
         Work in progress...
        </p>
     </div>
     <div class="hola">
       
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
      p{
        width: 100%;
      }
    }
    .hola{
      width: 50rem;
    }
  }
}
</style>
