<template>
    <div>
        Logged in 
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
    <div>
        <button @click="signOut">Sair</button>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        computed: {
            loggedIn: function(){
                return this.$store.state.loggedIn;
            }
        },
        methods: {
            signOut: function(){
                this.$store.commit('logOut')
                this.$router.replace({name: 'Home'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>