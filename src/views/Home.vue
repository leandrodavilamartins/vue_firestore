<template>
    <div id="particles">
        <Particles></Particles>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    <div id="formulario" v-show="!user">
        <form @submit.prevent="Login">
            <b-form-input type="email" placeholder="email" v-model="email"></b-form-input>
            <br>
            <b-form-input type="password" placeholder="password" v-model="password"></b-form-input>
            <br>
            <br>
            <b-button type="submit">Entrar</b-button>
        </form>
    </div>
    <div v-show="user">
        <h2>Você está logado</h2>
    </div>
    <div v-show="erro">
        <br>
        <br>
        <h5 id="error_message">Usuário e/ou senha inválidos</h5>
    </div>
    </div>
    </div>
</template>

<script>
import * as firebase from "firebase/compat/app"
import "firebase/compat/auth"
import Particles from '../components/Particles.vue'


    export default {
    data(){
        return {
            email : '',
            password: '',
            erro: false
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
                this.erro = true;
            }
        }
    },
    components:{
        Particles
    }, computed: {
        user: function(){
            return this.$store.getters.getLoginState;
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
#particles{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}
#error_message{
    color: #F41492;
}
</style>