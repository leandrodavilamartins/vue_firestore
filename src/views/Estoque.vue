<template>
  <div class="about">
  <!-- <div class="lds-ripple"><div></div><div></div></div> -->
      <div v-show="loading">
          <b-spinner></b-spinner>
      </div>
    <b-container>
      <h5>Digite Ctrl + F para pesquisar </h5>
      <br>
      <b-table striped hover :items="items" :fields="fields" dark=true></b-table>
    </b-container>
  </div>
</template>

<script>

import {db} from '../firebase'

export default {
  data() {
    return {
      fields: [{key:'ingrediente', sortable:true}, 'consumoDiario', 'consumoEsperado', 'estoque', 'un',{key:'diasEstoque', sortable:true}],
      items: [],
      loading: true
    }
  }, 
  created() {
    this.loading = true;
    this.fetchData();
    this.loading = false;
  },
  methods : {
    fetchData : async function() {
      db.collection('estoque').get()
      .then( response => {
        let docs = response.docs ; 
        docs.forEach( doc => {
        let item = doc.data()
        this.items.push(item);
      })
    })
    .catch(err => {
      console.log(err);
    })
    }
  }
}
</script>

<style scoped>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(20, 19, 19);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
