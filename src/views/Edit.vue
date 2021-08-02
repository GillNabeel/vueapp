<template>
<section class = 'container'>
    <form @submit ='editSubmit'>
    <div class ='mb-2'>
        <label for ='edittask' class='label-control'>Edit-Task</label>
        <input id='edittask' class ='form-control' v-model='task' type='text'>

    </div>
    <div class ='mb-1'>
        <label class ='form-label' for ='editdescription'>Edit-Description</label>
        <textarea type='text' id='editdescription' class='form-control' v-model ='description'></textarea>

    </div>
    <button class ='btn btn-outline-primary' type='submit'>Edit</button>
    </form>
</section>
</template>
<script>
export default {
    props:["id"],
    data(){
        return {
        task: "",
        description: ""
        }
    },
    mounted(){
    fetch("http://localhost:3000/todo/" + this.id)
    .then(resp => resp.json())
    .then(data => {
        this.task = data.task,
        this.description = data.description
    })
    },
    methods:{
    editSubmit(e){
        e.preventDefault()
    fetch("http://localhost:3000/todo/" + this.id,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            task :this.task,
            description: this.description
        })
    }).then(()=>{
        this.$router.push("/")
    })
        
        
    }
       
    }
}
</script>

<style scoped>

</style>