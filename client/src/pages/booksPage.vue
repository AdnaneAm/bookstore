<template>
    <div class="container">
        <div v-for="book in books" :key="book._id">
            <router-link :to="`/books/${book._id}`">{{book.title}}</router-link>
            <h3>{{book.price}} $</h3>
        </div>
    </div>
</template>

<script>
    import BookService from "../services/bookService";
    export default {
        data(){
            return{
                books:[],
            }
        },
        created(){
            BookService.all().then(res=>{
                this.books=res.data;
            }).catch(err=>{
                console.log(err);
            });
        }
    }
</script>
<style lang="scss" scoped>

</style>