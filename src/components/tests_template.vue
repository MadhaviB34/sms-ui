<template>
    <div>
       <div>
            <nav class="navbar navbar-light testsbar" v-if="grades.length != 0">
                <div class="container-fluid">
                    <ul class="nav navbar-nav  navbar-left testnavbar">
                        <li v-for="grade in grades">
                            <router-link :to="{path:'/tests/'+grade.id}" active-class="active" v-on:click.native="gradestestdetails(grade)">{{grade.gradename}}</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
                <router-view v-bind:listoftests="listoftests" v-bind:gradeid="gradeid" v-bind:userdetails="userdetails" v-bind:school="school" v-bind:testsubjectdetails="testsubjectdetails"></router-view>
            
       </div>
    </div>
</template>
<script>
import UserService from '../services/userService.js';
import EventBus from '../event-bus';
export default{
    props:['school','userdetails','acdemicyearandboard'],
    data(){
        return{
   
            board:{
                syllabustype:this.acdemicyearandboard.syllabustype
            },
            grades:[],
            listoftests:[],
            gradeid:{
                id:'',
                academicyear:''
            },
            userdetailsforheader:{
                id:this.school.id,
                userid:this.userdetails.userid,
                username:this.userdetails.username,
                userrole:this.userdetails.userrole,
                authdata:this.userdetails.authorization,
                tenant:this.userdetails.tenant,
                schoolname:this.userdetails.schoolname
            },
            testsubjectdetails:'',
            id:this.$cookie.get('id')
        }
    },
    created(){
            console.log(this.acdemicyearandboard)
        
        UserService.Grades(this.acdemicyearandboard.syllabustype,this.id).then((response)=>{
            console.log(response);
            this.grades=response.data;
            
        })
    },
    methods:{
        gradestestdetails:function(grade){
            this.testsubjectdetails=""
          this.gradeid={
             id:grade.id,
             academicyear:this.acdemicyearandboard.academicyearid 
          }
            console.log(this.gradeid)
            UserService.ListOfTests(this.gradeid,this.id).then((response)=>{
                console.log(response);
                this.listoftests=response.data
            })
        }
    },
            mounted(){
            var ref=this;
            EventBus.$on('GRADES', function (syllabustype,id) {
                UserService.Grades(syllabustype,id).then((response)=>{
                    ref.grades=response.data;
                    console.log(ref.grades)
                  
                })
            });
        }
}
</script>
<style>
    .testsbar{
        background:#eee;
        border-radius:0px;
        height:50px
    }
  .active{
   border-bottom:3px solid #fb6750;
   }
   .testnavbar>li>a:focus{
       background-color:transparent;
   }
</style>