<template>
    <div>
        <button @click="getStudents">get students</button>
        <button @click="getCars">get cars</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   name:'App',
   methods: {
       getStudents(){
           axios.get('http://localhost:8080/myApi/students').then(
               response => {
                   console.log('success', response.data);
               },
               error => {
                   console.log('error',error.message);
               }
           )
       },
       getCars(){
           axios.get('http://localhost:8080/api/cars').then(
               response => {
                   console.log('success', response.data);
               },
               error => {
                   console.log('error',error.message);
               }
           )
       }
   }
}
</script>
