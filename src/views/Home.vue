<template>
    <div>
        <br>
        <br>
        <br>
        <h3>Página de acesso </h3>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    <div id="formulario">
        <form @submit.prevent="Login">
            <b-form-input type="email" placeholder="email" v-model="email"></b-form-input>
            <br>
            <b-form-input type="password" placeholder="password" v-model="password"></b-form-input>
            <br>
            <b-button type="submit">Entrar</b-button>
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

#formulario{
    margin:auto;
    width: 40%;
    color: #42b983;

}
</style>