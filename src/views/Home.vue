<template>
    <div>
        <h3>Página de acesso </h3>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    <div>
        <form @submit.prevent="Login">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button type="submit">Entrar</button>
        </form>
    </div>
    </div>
</template>

<script>
import * as firebase from "firebase/compat/app"
import "firebase/compat/auth"

    export default {
    data(){
        return {
            email : '',
            password: ''
        }
    },
    methods: {
        Login: async function(){
            try{
                const result = await firebase.default.auth().signInWithEmailAndPassword(this.email, this.password);
                console.log(result);
                this.$router.replace({name: "Estoque"});
                this.$store.commit('logIn');
            }
            catch(err) {
                console.log(err)
            }
        }
    }        
    }
</script>

<style scoped>

</style>