<template>
    <div>
        <h1>{{book.title}}</h1>
        <h3>{{book.price}}</h3>
    </div>
</template>

<script>
    import BookService from "../services/bookService";
    export default {
        data(){
            return{
                id:this.$route.params.id,
                book:{}
            }
        },
        created(){
            BookService.getByID(this.id).then(res=>{
                this.book=JSON.parse(JSON.stringify(res.data))[0];
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>