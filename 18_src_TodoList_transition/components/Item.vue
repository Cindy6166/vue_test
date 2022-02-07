<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/> 

      <!-- below can realize this feature, but not recommended, because it against the principle of don't modify props -->
      <!-- <input type="checkbox" v-model="todo.done"> -->

      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        v-show="todo.isEdit" 
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">Delete</button>
    <button v-show="!todo.isEdit" class="btn btn-primary" @click="handleEdit(todo)" >Edit</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:['todo'],
  methods:{
    // checked or unchecked
    handleCheck(id){
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    // delete
    handleDelete(id){
      if(confirm('Are you sure to delete this task?')){
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)
      }
    },
    // edit
    handleEdit(todo){
      // todo.hasOwnProperty('isEdit')
      if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')){
        todo.isEdit = true
      }else{
        this.$set(todo, 'isEdit', true )
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
      
    },
    handleBlur(todo, e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('Not allow empty')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}


</style>