<template>
    <div id="content">
        <b-container>
            <br>
            <h3>Atualizar Item</h3>  
            <br>
            <br>
            <b-form-select v-model='selected' :options="options" size="lg"></b-form-select>
            <br>
            <br>
            <br>
            <br>
            <b-button v-on:click="selectedQuery" variant="success">Selecionar</b-button>
        </b-container>
        <br>
        <br>
        <h5 v-if="infoItem">{{selectedItem}}</h5>
        <br>
        <b-form-input v-if="formulario" placeholder="Digite a nova quantidade"></b-form-input>
        <br>
        <br>
        <b-form-input v-if="formulario" placeholder="Digite o novo consumo diario"></b-form-input>
        <br>
        <br>
        <b-button v-if="formulario" variant="info">  Salvar alterações </b-button>
        <b-button v-if="formulario" v-on:click="resetSelection" variant="danger"> Limpar campos</b-button>
        <br>
        <br>
    </div>
</template>

<script>

import {db} from '../firebase' 

    export default {
        data() {
            return {
                selected: null,
                items : [],
                selectedItem : [],
                formulario : false,
                infoItem : false
            }
        },
        computed: {
            options: function() {
                let names = [{ value: null, text: 'Selecione um item' }];
                this.items.forEach( item => {
                    return names.push(item.ingrediente);
                })
                return names;
            }
        },
        methods: {
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
        },
        getOption: function() {
            console.log(this.selected);
            },
        selectedQuery: async function() { // função que retorna o item que foi selecionado no elemento select 
            const itemRef = db.collection('estoque');
            const snapshot = await itemRef.where('ingrediente','==', this.selected).get()
            snapshot.forEach( doc => {
                console.log(doc.data())
                this.selectedItem.push(doc.data());
            })
            this.infoItem = true
            this.formulario = true
            return ;
        },
        resetSelection: function(){
            this.infoItem = false
            this.selected = null
            this.selectedItem = []
            this.formulario = false;
        }
        },
        created() {
            this.fetchData();
        }
    }

</script>

<style scoped>
#content {
    width: 40%;
    margin : auto;
}
</style>