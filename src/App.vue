<template>
  <div>
    <nav-item></nav-item>
    <home-page></home-page>
    <footer-item></footer-item>
    
  </div>
</template>

<script>
import nav from './components/nav.vue'
import footer from './components/footer.vue'
import home from './components/home.vue'
 export default{
   components:{
     'nav-item': nav,
     'footer-item': footer,
     'home-page': home
   },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
