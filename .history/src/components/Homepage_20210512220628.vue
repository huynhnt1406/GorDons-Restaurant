<template>
    <div class="homepage">
        <Header/>
        <Carousel/>
        <Countdown/>
        <Options/>
        <Book/>
    </div>
</template>
<script>
import Carousel from '../core/Carousel'
import Header from '../core/Header'
import Countdown from '../core/Countdown'
import Options from '../core/Options'
import Book from '../core/Book'
export default {
    components:{
        Header,
        Carousel,
        Countdown,
        Options,
        Book
    }
}
</script>
<style>
</style>