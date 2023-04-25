<template>
    <h1>Perfil</h1>
    {{ perfil }}
</template>

<script setup>
    //Importar paquetes, servicios y librerias que se deban utilizar
    import { ref, onMounted } from "vue"
    import authService from "@/service/AuthService"
    //Declarar variables
    const perfil = ref (null)

    onMounted(async () => {
        //alert("Lo primero que se ejecuta")
        perfil.value = await authService.perfil()
    })
    //Metodo que me ayuda a controlar el ciclo de vida del componente

    //declarar metodos o funciones
    
</script>