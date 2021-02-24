<template>
    <header>
      
      <nav class="navbar navbar-expand-lg navbar-light hello">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FakeStore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{{nav1}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{nav2}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">{{nav3}}</a>
        </li>
        <li><button @click="clickedBtn()" class="btn btn-light">Blog</button></li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
    </header>
</template>

<script>
export default{

  data(){
    return{
      nav1: "shop",
      nav2: "cart",
      nav3: "checkout"
    }
  
},
    mounted () {
      this.$nextTick(() =>{
          $('.hello').hide();
          $('.hello').fadeIn('slow')

      })
    } 
}
</script>

<style scoped>
  header{
    background: #ff4646;
    padding: 10px 10px 40px 10px;
    
  }
  li{
   
    text-align: center;
    float: left;
    display: inline;
    padding: 0px 20px;
  }

  li>a{
     color: #ffffff !important;
     text-decoration: none;
  }
</style>


