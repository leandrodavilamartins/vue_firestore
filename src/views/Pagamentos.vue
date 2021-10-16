<template>
    <div>
        <b-container>
        <h5>Digite Ctrl + F para pesquisar </h5>
        <br>
        <b-table striped hover :items="itemsFormatted" :fields="fields" dark=true></b-table>
        <!-- <h6>{{items}}</h6> -->
        </b-container>
    </div>
</template>

<script>
import {db} from '../firebase'

    export default {
        data(){
            return{
                fields: ['data','situação','fornecedor','origem','obs','valor'],
                items: []
            }
        },
        created(){
            db.collection('despesas').get()
            .then(response =>{
                let docs = response.docs;
                docs.forEach( doc => {
                    let item = doc.data()
                    this.items.push(item);
                })
                })
                .catch(err => {
                    console.err(err);
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
                    console.log(formattedValue)
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