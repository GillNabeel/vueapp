<template>
<div class ='container'>
    <div class ='row'>
        <div class ='col-lg-10 offset-lg-1 col-md-8 offset-md-2 col-sm-6 offset-sm-1'>
<ul class ='list-group list_group ' :class="{complete: todo.complete}">
    
        
    <li class ='list-group-item mb-1 text-center d-flex justify-content-between'  :class="{complete: todo.complete}">
        <h3 @click='forshowing' class='forshowing'>{{todo.task}}</h3>
        <div v-if='showPro' class ='showPro text-center'>
    <h4 class ='text-center details'>{{todo.description}}</h4>
    
    </div>
    <div class='float-end  icons' style="font-size:2rem">
        <router-link :to= "{name: 'Edit', params:{id:todo.id}}">
    <i class ='fa fa-pencil fa-xl' @click='edit'></i>
        </router-link>
    <i class ='fa fa-trash fa-xl' @click='del'></i>
    <i class ='fa fa-check fa-xl' @click='check'></i>
    </div>
    </li>
    
    
 </ul>
 </div>
 </div>
 </div>
</template>
<script>
export default {
    props:[
    "todo"
    ],
    data(){
        return{
          showPro:''

        }
    },
    methods:{
        forshowing(){
            this.showPro= !this.showPro
        },
        edit(){
            
        },
        del(){
            fetch("http://localhost:3000/todo/" + this.todo.id,
            { 
                method: "DELETE"

            })
            .then(() => this.$emit('delete', this.todo.id))
            .catch((err) => console.log(err.message))

        },
        check(){
            fetch("http://localhost:3000/todo/" + this.todo.id,
            {
               method: 'PATCH',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({complete: !this.todo.complete})
            }).then(()=>this.$emit('complete', this.todo.id))
            .catch((err) => console.log(err.message))
        }
    
    }
}
</script>

<style scoped>

.list_group {
    box-shadow:5px 2px 2px 2px ;
    color:red
}
.details{
    max-width: 8rem;
}

.complete{
    box-shadow:5px 2px 2px 2px ;
    color:green
}
.forshowing{
    cursor: pointer;
}
.showPro{
    display:flexbox;
    justify-content:space-between
}
.icons i{
    margin-left:1rem;
    cursor: pointer;
    text-align:center
    
    
}
.icons a{
    text-decoration: none;
}

</style>