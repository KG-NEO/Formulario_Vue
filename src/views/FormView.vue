<template>
    <div id="app">

      <!-- Puede usar la directiva v-model para crear bindings de datos 
      bidireccionales (two-way binding) en elementos input, textarea y select de un formulario. -->

      <form @submit.prevent="submitForm">
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" required id="nombre" />
  
        <label for="apellido">Apellido:</label>
        <input v-model="apellido" type="text" required id="apellido" />
  
        <label for="edad">Edad:</label>
    <select v-model="edad" id="edad">
      <option v-for="i in 69" :key="i">{{ i }}</option>
    </select>
  
        <label for="genero">Género:</label>
        <select v-model="genero" id="genero" required>
          <option value="masculino"> Masculino </option>
          <option value="femenino"> Femenino </option>
          <option value="otro">Otro</option>
        </select>
  
        <label for="mensaje">Mensaje:</label>
        <textarea v-model="mensaje" required id="mensaje"></textarea>
  
        <button type="submit">Enviar</button>
      </form>
  
      <div v-if="datosValidos">
        <p>Datos enviados correctamente:</p>
        <ul>
          <li><strong>Nombre:</strong> {{ nombre }}</li>
          <li><strong>Apellido:</strong> {{ apellido }}</li>
          <li><strong>Edad:</strong> {{ formulario.edad }}</li>
          <li><strong>Género:</strong> {{ genero }}</li>
          <li><strong>Mensaje:</strong> {{ mensaje }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formulario: {
          nombre: '',
          apellido: '',
          edad: null,
          genero: '',
          mensaje: '',
        },
        datosValidos: false,
      };
    },
    methods: {
      submitForm() {
        // Validar que los campos no sean iguales
        if (
          this.nombre !== this.apellido &&
          this.nombre !== this.formulario.edad &&
          this.apellido !== this.formulario.edad
        ) {
          this.datosValidos = true;
        } else {
          alert('Los datos no pueden ser iguales. Por favor, corrige el formulario.');
        }
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input,
  select,
  textarea {
    margin-bottom: 15px;
    padding: 5px;
  }
  
  button {
    background-color: #3498db;
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  