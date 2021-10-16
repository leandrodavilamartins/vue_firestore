<template>
    <div>
        <b-container>        
            <h5>Digite Ctrl + F para pesquisar </h5>
            <br>
            <b-table striped hover :items="itemsFormatted" :fields="fields" sortable=true dark=true></b-table>
            <!-- <h6>{{itemsSorted}}</h6> -->
        </b-container>
    </div>
</template>

<script>

import {db} from '../firebase'

    export default {
        data(){
            return{
                fields: [
                    { key: 'data', sortable: false },
                    { key: 'nota', sortable: false },
                    { key: 'comprador', sortable: false },
                    { key: 'obs', sortable: false },
                    {key: 'valor', sortable: false}
                    ],
                items:[]
            }
        },
        created(){
            db.collection('vendas').get()
            .then(response =>{
                let docs = response.docs;
                docs.forEach( doc => {
                    let item = doc.data()
                    this.items.push(item);
                })
            })
            .catch(err => {
                console.error(err);
            })
        },
        computed: {
            itemsFormatted: function(){
                let formatted = [];
                this.itemsSorted.forEach(item => {
                    let secs = item.data.seconds;
                    let date = new Date(secs * 1000);
                    let formattedValue = item.valor.toFixed(2);
                    //console.log(date);
                    item.data = date.toLocaleDateString();
                    item.valor = formattedValue;
                    //console.log(formattedValue)
                    formatted.push(item);
                })
                return formatted;
            },
            itemsSorted: function(){
                let sorted = [...this.items];
                sorted.sort((a,b) => {
                    return b.data.seconds - a.data.seconds
                })
                return sorted;
            }
    }
}
</script>

<style scoped>

</style>