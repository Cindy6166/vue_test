<template>
  <div class="student">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Age: {{ age }}</h2>
    <button @click="sendStudentName">Let student name transfer to school </button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data() {
        return {
            name: "Tom",
            age: 17,
            number: 0
        };
    },
    mounted(){
      // console.log(this.x);
    
    },
    methods: {
      sendStudentName(){
        // this.$bus.$emit('hello', this.name)
        pubsub.publish('hello', 666)
      }
    }
};
</script>
<style scoped>
.student{
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>