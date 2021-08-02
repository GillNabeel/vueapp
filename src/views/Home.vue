<template>

<section class='container'>
  <div v-for="todo in todoValues" :key ='todo.id'>
           <Show :todo= "todo" @delete= "handleDelete"
           @complete = "handleComplete"
           
           />

  </div>

</section>





</template>

<script>
import Show from '../components/Show'
export default {
  components:{
    Show
  },
     data(){
       return {
             todoValues: []
       }
     },
     mounted(){
       fetch("http://localhost:3000/todo")
       .then(resp => resp.json())
       .then(req => this.todoValues =req)
       .catch(err => console.log(err.message))
     },
     methods:{
       handleDelete(id){
          this.todoValues = this.todoValues.filter((todo)=>{
            return todo.id !== id
          })
       },
       handleComplete(id){
         let p = this.todoValues.find((project)=>{
           return project.id == id
         })
         p.complete = !p.complete
       }
     }

   
     }


</script>

<style scoped>

</style>
