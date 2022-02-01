<template>
  <div v-show="total" class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span> <span>Completed {{doneTotal}}</span> / All {{total}} </span>
    <button class="btn btn-danger" @click="clearDone">clear all completed tasks</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos'],
  computed:{
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0
      },
      set(value){
        // this.checkAllTodo(value)
        this.$emit('checkAllTodo', value)
      }
    },
    // isAll(){
    //   return this.doneTotal === this.total && this.total > 0
    // },
    total(){
      return this.todos.length
    },
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
  },
  methods:{
    clearDone(){
      // this.clearDoneTodos()
      this.$emit('clearDoneTodos')
    }
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked)
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