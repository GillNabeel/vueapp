<template>
<section class ='container'>
  <form @submit ='formSubmit'>
    <div class ='mb-2'>
      <label class ='form-label' for='formLabel' >Task</label>
      <input v-model='task' type='text' class ='form-control' id='formLabel' required>

    </div>
    <div class='mb-1'>
      <label class ='form-label' for='description'>Description</label>
       <textarea v-model='description' class= 'form-control' id='description' required></textarea>
    </div>
   <button class ='btn btn-outline-primary'>Submit</button>
  </form>
  </section> 
</template>

<script>
export default {
 data(){
   return{
      task: "",
      description:""
   }
 },
 methods:{
   formSubmit(e){
     e.preventDefault()
     let tododata={
         task :this.task,
         description: this.description
     }
     fetch("http://localhost:3000/todo",{
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(tododata)
     }).then(() =>{
       this.$router.push('/')
     })
     this.task ='',
     this.description=""
   }
 }
}
</script>

<style scoped>
body{
  background: #16BFFD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #CB3066, #16BFFD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #CB3066, #16BFFD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
