<template>
    <div class="app">
        <h1>{{msg}}, {{name}}</h1>
        <School :getSchoolName="getSchoolName"/>

        <!-- 1st way: v-on or @ -->
        <!-- <Student @customize="getStudentName" @demo="m1"/> -->
        <!-- <Student @customize.once="getStudentName"/> -->

        <!-- 2nd way: ref  -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
   name:'App',
   components:{School, Student},
   data(){
       return {
           msg:'Hello!',
           name:''
       }
   },
   methods:{
       getSchoolName(name){
           console.log(name)
       },
       getStudentName(name, ...params){
           console.log(name, params);
           this.name = name
       },
       m1(){
           console.log('demo event run');
       },
       show(){
           alert('show up!')
       }
   },
   mounted(){
       this.$refs.student.$on('customize', this.getStudentName)
    //    this.$refs.student.$on('customize', (name, ...params)=>{
    //         console.log(name, params);
    //         this.name = name
    //    }) // must be a arrow function

    //    this.$refs.student.$once('customize', this.getStudentName)
    //    setTimeout(()=>{
    //        this.$refs.student.$on('customize', this.getStudentName)
    //    }, 3000)
   }
}
</script>
<style>
.app{
    background-color: #ddd;
    padding: 5px;
}
</style>
