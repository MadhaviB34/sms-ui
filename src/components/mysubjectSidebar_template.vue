<template>
<div>
    <div class="col-lg-2  sidebar4 mysubjectreset-padding">
        <div class="left-navigation">
            <ul class="sidebar-ul">
                <li class="sidebar-li"><router-link  :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/students'}"  active-class="mysubjectsidebar">Students</router-link></li>
                <li class="sidebar-li"><router-link  :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/tests'}"  active-class="mysubjectsidebar">Tests</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/assignments'}" active-class="mysubjectsidebar">Assignments</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/worksheets'}" active-class="mysubjectsidebar">Worksheets</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/mysubjecttimetable'}" active-class="mysubjectsidebar">Timetable</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/journal'}" active-class="mysubjectsidebar">Journal</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/attendance'}" active-class="mysubjectsidebar">Attendance</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/messages'}" active-class="mysubjectsidebar">Messages</router-link></li>
            </ul>
        </div>
    </div>
    <div class="col-lg-10">
       <router-view v-bind:mysubject="mysubject" v-bind:school="school" v-bind:userdetails="userdetails"  v-on:student="Student($event)"  v-bind:acdemicyearandboard="acdemicyearandboard" v-bind:singlestudent="singlestudent" v-bind:academicsandboards="academicsandboards" v-bind:userid="userid"></router-view>
    </div>
</div>
</template>
<script>
import UserService from '../services/userService.js';
export default{
    props:['mysubject','school','userdetails','acdemicyearandboard','academicsandboards','userid'],
      data(){
        return{
            id:this.$cookie.get('id'),
            singlestudent:{}
            }
        },
        methods:{
                Student:function(student){
                 UserService.Studentdetails(this.id,student).then((response)=>{
                     console.log(response)
                     this.singlestudent=response.data
            }).catch((error)=>{
                console.log(error.data)
            })
        }
        }
}
</script>
<style>
.mysubjectreset-padding{
    padding:0;
}
.sidebar4
{
padding-right:0px;
height:83vh;
background:#696969;
}

.sidebar-li
{
  list-style-type: none;
}
.sidebar-ul{
  padding-left:0px;
}
.mysubjectsidebar{
  background-color:#eee;
  color:black;
  margin-right: 50px;
  position: relative;
  display: block;
  color:black;
  }
.sidebar-ul > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
  color:#fff;
  text-align: left;
  text-transform:uppercase;
}
.sidebar-ul > li :hover{
  color:white;
}
.sidebar-ul >li .mysubjectsidebar {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar4
  {

  height:65vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar4
  {
  height:83vh;
  background:#696969;
  }
}
</style>
