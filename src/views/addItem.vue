<template>
    <div id="content">
        <b-container>
        <br>
        <h3>Adicionar Item</h3>
        <br>
        <br>
        <b-form-input placeholder="nome do item" v-model.trim="data.ingrediente" ></b-form-input>
        <br>
        <br>
        <b-form-input placeholder="quantidade" v-model.trim="data.quantidade" ></b-form-input>
        <br>
        <br>
        <b-form-input placeholder="consumo" v-model.trim="data.consumoDiario" ></b-form-input>
        <br>
        <br>
        <b-form-input placeholder="unidade" v-model.trim="data.un" ></b-form-input>
        <br>
        <br>
        <br>
        <b-button v-on:click="saveItem" variant="success">Adicionar</b-button>
        <br>
        <br>
        <h5 v-show="msg">Item salvo com sucesso!</h5>
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
        </b-container>
    </div>
</template>

<script>
import {db} from '../firebase'

    export default {
        data() {
            return{
                data : {
                    ingrediente: '',
                    quantidade : '',
                    consumoDiario: '',
                    un: ''
                },
                msg: false
            }
        },
        methods : {
            saveItem: async function() {
                const res = await db.collection('estoque').add(this.data);
                console.log(res);
                this.msg = !this.msg;
            }
        }
    }
</script>

<style scoped>
h5 {
    color: #42b883;
}

#content {
    width: 40%;
    margin : auto;
}
</style>