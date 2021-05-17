<template>
    <div class="gallery-page">
        <Header/>
        <Albums/>
        <GoogleMaps/>
        <Book/>
        <Footer/>
    </div>
</template>
<script>
import Albums from '../core/Albums'
import Header from '../core/Header'
import Book from '../core/Book'
import Footer from '../core/Footer'
import GoogleMaps from '../core/GoogleMaps'
export default {
    components:{
        Header,
        Book,
        Footer,
        Albums,
        GoogleMaps
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