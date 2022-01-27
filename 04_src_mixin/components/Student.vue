<template>
  <div>
    <h2 @click="showName">Student Name: {{ name }}</h2>
    <h2>Student Gender: {{ gender }}</h2>
  </div>
</template>

<script>
  // import {mixin} from '../mixin'

  export default {
    name: "Student",
    data() {
      return {
        name:'Tom',
        gender:'Male'
      }
    },
    // mixins:[mixin]
  };
</script>
