<template>
  <div id="nav" class ='text-center container'>
    <router-link :to="{name: 'Home'}">Projects</router-link> |
    <router-link :to="{name: 'New'}">Add Project</router-link>
  
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   background: #4CA1AF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #C4E0E5, #4CA1AF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #C4E0E5, #4CA1AF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */







}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-top:2rem

}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
