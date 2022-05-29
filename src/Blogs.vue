<template>
    <div class="blogs">
        <input type="text" v-model="searchTerm" class="input" placeholder="Search...">
        <div class="post" v-for="post in filteredPost" :key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.body | datatampil}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Blogs',
    data() {
        return {
            posts: [], searchTerm: ''
        }
    },
    methods: {
     
    },
    computed: {
        filteredPost() {
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    created(){
        axios.get('http://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log(response)
            this.posts = response.data
        })
    },
}
</script>

<style>
    .blogs {
        width: 900px;
        margin: auto;
        background-color: rgb(214, 133, 133);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    }    
    .post {
        margin-left: 20px;
        margin-right: 20px;
    }
    .post:hover {
        background-color: rgba(206, 185, 185, 0.803);
    }
    .input {
        width: 200px;
        height: 30px;
        margin-left: 20px;
        border-radius: 50px;
        margin-top: 20px;
    }
</style>