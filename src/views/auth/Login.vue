<template>
    <h1>Ingresar</h1>
    <label for="">Ingrese Email</label>
    <input type="email" v-model="usuario.email">
    <br>
    <label for="">Contraseña</label>
    <input type="password" v-model="usuario.password">
    <br>
    <button type="button" @click="loginConLaravel()">Ingresar</button>
    {{ usuario }}
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import AuthService from "@/service/AuthService"

    const usuario = ref({
        email: "",
        password: ""
    })
    const loginConLaravel = async () => {
        //const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', usuario.value)
        const res = await AuthService.loginConLaravel(usuario.value)
        console.log(res.data)
    }
</script>