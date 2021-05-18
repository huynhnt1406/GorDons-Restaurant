<template>
  <div id="app" class="app-design">
    <Header/>
    <router-view/>
    <Book/>
    <Footer/>
  </div>
</template>

<script>
import Header from './core/Header'
import Book from './core/Book'
import Footer from './core/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Book,
    Footer
  }
}
</script>

<style>
.app-design{
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
}
</style>
