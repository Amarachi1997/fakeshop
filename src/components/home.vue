<template>
  <div id="showShop">
    <h1>Welcome to the Fake Store</h1>
    <h6>Remember not to Buy Anything</h6> 
    <input type="text" v-model="search" placeholder="search for product">
    <select v-model="selectedType">
    <option value="type1">Type 1</option>
    <option value="type2">Type 2</option>
  </select>
  
  <select v-model="selectedSize">
    <option value="size1">Size 1</option>
    <option value="size2">Size 2</option>
  </select>
   <div class="container">
     <div class="row">
      <div v-for="product in filteredProduct" class="single-product col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div class="product">
         <img v-bind:src="product.image" >
        <p>{{product.title}}</p><br>
        <p>{{'$' + product.price}}</p>
        <button @click="openOneProduct()" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
   </div>
   </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        products: [],
        search:'',
        selectedType: '',
    selectedSize: '',
    items: [
      {
        name: 'name1',
        type: 'type1',
        size: 'size1'
      },
      {
        name: 'name2',
        type: 'type2',
        size: 'size2'
      },
      {
        name: 'name3',
        type: 'type1',
        size: 'size1'
      },
      {
        name: 'name4',
        type: 'type2',
        size: 'size2'
      }
    ]
        }
    },
    methods:{
      openOneProduct(){

      }
    },
    created(){
      console.log("hop in the motherfucking jet c");
      this.$http.get("https://fakestoreapi.com/products").then(function(data){
        console.log(data);
        this.products = data.body.slice(0,15);
      })
    },
    computed: {
      filteredProduct: function(){
        return this.products.filter((product)=> {
          return product.title.match(this.search) 
        });
      },
       computed: {
    computed_items: function () {
      let filterType= this.selectedType,
          filterSize = this.selectedSize
      return this.items.filter(function(item){
        let filtered = true
        if(filterType && filterType.length > 0){
          filtered = item.type == filterType
        }
        if(filtered){
          if(filterSize && filterSize.length > 0){
            filtered = item.size == filterSize
          }
        }
        return filtered
      })
    }
       }
    }

 }
</script>

<style scoped>

  #showShop{
    
  }
  .product{
     border: 2px solid #fffc46;
     height: 300px;
  }
  .single-product{
   
    padding: 10px 20px;
    text-align: center;
  }
  img{
    height: 100px;
    width: 100px;
    
  }

  h1, h6{
    text-align: center;
  }
</style>