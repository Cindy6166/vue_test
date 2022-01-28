<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span> <span>Completed {{doneTotal}}</span> / All {{todos.length}} </span>
    <button class="btn btn-danger">clear all completed tasks</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos'],
  computed:{
    doneTotal(){
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1:0), 0)
      // const a = this.todos.reduce((pre, current)=>{
      //   console.log('a',pre, current)
      //   return pre + (current.done ? 1:0)
      // },0)
    }
  
    // doneTotal(){
    //   let total = 0
    //   this.todo.forEach( (todo) => {
    //     if(todo.done) total++
    //   })
    //   return total
    // }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>