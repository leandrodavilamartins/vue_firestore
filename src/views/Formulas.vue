<template>
    <div>                
        <div v-show="loading">
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <b-spinner v-if="loading" variant="success"></b-spinner>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
        <b-table striped hover dark :items="items"></b-table>
    </div>
</template>

<script>

import {db} from '../firebase'
    export default {
        data(){
            return{
                items: [],
                loading : true,

            }
        }, 
        beforeCreate(){
            this.loading = true;
        },
        created(){
            db.collection('formulas').get()
            .then(response => {
                let docs = response.docs;
                docs.forEach(doc => {
                    let item = doc.data();
                    this.items.push(item);
                    this.loading = false; 
                })
                console.log(this.items);
            })
            .catch(err => {
                console.log(err)
        })
    },
    updated(){
        console.log(this.items)
    }
}
</script>

<style lang="scss" scoped>

</style>