<template>
    <div id="online-friend">
        <h2>Online Friends</h2>
         <div v-for="friend in friends" v-bind:key="friend">
            <span v-if="friend.online">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineFriends',
    props: ['friends'],
    data(){
        return {
            
        }
    }
}
</script>

<style>
    
</style>