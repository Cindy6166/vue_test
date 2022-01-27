<template>
  <div class="school">
    <h1>{{msg}}</h1>
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Gender: {{ gender }}</h2>
    <h2>Student age: {{ myAge }}</h2>
    <button @click="updateAge">Modify the value of age form prop</button>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      console.log(this);
      return {
        msg:'student information',
        myAge:this.age
      }
    },
    methods:{
      updateAge(){
        this.myAge++
      }
    },
    //1
    // props:['name','gender','age']

    //2
    // props:{
    //   name:String,
    //   gender:String,
    //   age:Number
    // }

    //3
    props:{
      name:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        default:99
      },
      gender:{
        type:String,
        required:true
      }
    }
  };
</script>
