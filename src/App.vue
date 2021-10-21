<template>
  <div id="app">
    <top-header></top-header>
    <div id="nav">
      <router-link to="/estoque">Estoque</router-link> |
      <router-link to="/addItem">Adicionar</router-link> |
      <router-link to="/updateItem">Atualizar</router-link> |
      <router-link to="/pagamentos">Pagamentos</router-link> |
      <router-link to="/recebimentos">Recebimentos</router-link> |
      <router-link to="/formulas">Fórmulas</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'

export default {
  created(){
    document.body.style.backgroundColor = "#3E444A"; // changes not only the component's background color but the entire app's background color
  },
  components: {
    'top-header': TopHeader
  },
  methods: {
    signOut: function(){
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  background-color: #3E444A;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #3E444A;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #42b983;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid #3E444A;  /* creates padding around scroll thumb */
}
</style>
