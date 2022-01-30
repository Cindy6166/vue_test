<template>
  <div class="student">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Age: {{ age }}</h2>
    <h2>SUM: {{number}}</h2>
    <button @click="add">number++</button>
    <button @click="sendStudentName">send name to App</button>
    <button @click="unbind">unbind customize event</button>
    <button @click="tearDown">destroy vc</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name: "Tom",
            age: 17,
            number: 0
        };
    },
    methods:{
      add(){
        console.log('add run');
        this.number++
      },
      sendStudentName(){
        // trigger the customize event which on student vue-component 
        this.$emit('customize', this.name, 666, 777, 888 )
        // this.$emit('demo')
      },
      unbind(){
        this.$off('customize') //unbind one customize event
        // this.$off(['customize','demo']) // unbind some customize event
        // this.$off() //unbind every event
      },
      tearDown(){
        this.$destroy() // destroy this vc and all customize event on this vc
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