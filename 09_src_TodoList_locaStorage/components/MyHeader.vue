<template>
  <div class="todo-header">
    <input type="text" placeholder="Please input your task and press enter" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid' //use nanoid to create a unique ID
export default {
  name: "MyHeader",
  props:['addTodo'],
  data(){
    return {
      title: ''
    }
  },
  methods:{
    add(){
      // console.log(e.target.value)

      // validate data
      if(!this.title.trim()) return alert('Input can\'t be empty')
      // pack input value into an object
      const todoObj = {id:nanoid(), title:this.title, done:false}
      // info App to add a todoObj 
      this.addTodo(todoObj)
      // clear input field
      this.title = ''
    }
  }
};
</script>

<style scoped>
  /*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>