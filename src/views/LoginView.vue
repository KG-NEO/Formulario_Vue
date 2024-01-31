<template>
    <div>
        <div class="">
            <label for="Email">Email:</label>
            <input v-model="email" type="text">
        </div>
        <div>
            <label for="Password">Password:</label>
            <input v-model="password" type="password">
        </div>
        <button :disabled="!(email.length > 0 && password.length > 8)">Login</button>
        <hr>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue' //Funcion que vamos a llamar
import type { Ref } from 'vue' //Interfaz de ref

const email:Ref<string> = ref('')
const password:Ref<string> = ref('')
    const error:Ref<boolean> = ref(true)

onBeforeUnmount(() => {
    console.log('Antes de crear');
})

onMounted(() => {
    console.log('Montado');
})
</script>

<style>
</style>
