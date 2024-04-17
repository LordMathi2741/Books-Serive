<script>
import { Book } from '@/books/model/book.entity.js'
import { ApiFakeService } from '@/books/service/apiFake-service.js'

export default {
  name: 'TheBookCard',
  data(){
    return {
      book: Book,
      books: [],
      apiFakeService: new ApiFakeService()
    }
  },
  async created(){
    this.apiFakeService.getAll().then((response) => {
       for(let i =0; i<response.length; i++){
         const {title, originalTitle, description,pages, cover} = response[i];
         this.book = new Book(title, originalTitle, description, pages, cover);
         this.books.push(this.book);
       }

    })
  }

};
</script>


<template>
 <div class="card-container" v-for="(book, index) in books" :key="index">
   <pv-card>
     <template #title> <h1> Book {{index+1}}</h1></template>
     <template #content>
     <div class="content-card">
        <img :src="book.image" alt="book image" style="width:200px">
        <h3>{{book.title}}</h3>
        <h4>{{book.originalTitle}}</h4>
        <p>{{book.description}}</p>
        <p>{{book.pages}}</p>

     </div>
     </template>
   </pv-card>
 </div>

</template>

<style>
  .card-container{
    border-radius: 25px;
    border: 2px solid #73AD21;
    display:flex;
    gap:2rem;
  }

  .content-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1{
    text-align:center;
  }


</style>


