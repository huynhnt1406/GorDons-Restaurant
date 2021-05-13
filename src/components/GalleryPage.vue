<template>
    <div class="gallery-page">
        <Header/>
        <Albums/>
        <Book/>
        <Footer/>
    </div>
</template>
<script>
import Albums from '../core/Albums'
import Header from '../core/Header'
import Book from '../core/Book'
import Footer from '../core/Footer'
export default {
    components:{
        Header,
        Book,
        Footer,
        Albums
    }
}
</script>
<style >
.gallery-page{
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
}
</style>