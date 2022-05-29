<template>
  <div id="app">

    <h1>Aureyk Blogs</h1>
    <hr>
    <div class="navmain">
    <router-link to="/" class="navmenu">Home</router-link>
    <router-link to="/blogs" class="navmenu">Blogs</router-link>
    <router-link to="/users/:8" class="navmenu">User</router-link>
    </div>
    <hr>
    <router-view></router-view>


    <!-- <h1>{{title}}</h1> -->
    <!-- <Navbar />
    <Blogs /> -->


  </div>
</template>

<script>
// import Navbar from './Navbar.vue'
// import Blogs from './Blogs'

export default {
  // name: 'App',
  // components: {
  //   Navbar,
  //   Blogs
   
  // },
  // data() {
  //   return {
  //     title : 'Selamat Datang di Aureyk',
     
  //   }
  // },
  // methods: {
    
  // }
  data(){
    return {

    }
  }
}
</script>

<style>
  h1 {
    color: blue;
    font-weight: bold;
    text-align: center;
  }
  .navmain {
    display: flex;
    justify-content: center;
  }

  .navmenu {
    margin-right: 30px;
    text-decoration: none;
  }
</style>
