<template>
  <div id="showShop">
   
    <h6>Don't Buy No Matter How Tempting it Is</h6>
   
       <h3>{{product.title}}</h3>
       <img v-bind:src="product.image" >
     
      <h4>{{product.price}}</h4>
      
      <p>{{product.description}}</p>
      <span>{{product.category}}</span>
     
   
  </div>
</template>

<script>

export default {
  data () {
    return {
        products: [],
        
        }
    },
    
    created(){
      console.log("hop in the motherfucking jet c");
      this.$http.get("https://fakestoreapi.com/products").then(function(data){
        console.log(data);
        this.products = data.body;
      })
    }

 }
</script>

<style scoped>
  img{
    height: 250px;
    width: 250px;
  }
</style>

