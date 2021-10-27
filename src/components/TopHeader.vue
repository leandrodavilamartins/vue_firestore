<template>
    <div>
<!--         Logged in 
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span> -->
    <div>
        <b-button @click="signOut">   Sair  </b-button>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        methods: {
            signOut: function(){
                this.$store.dispatch('logOut')
                this.$router.replace({name: 'Home'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>