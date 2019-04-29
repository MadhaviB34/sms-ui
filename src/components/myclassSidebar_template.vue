<template>
<div>
    <div class="col-lg-2  sidebar2 myclassreset-padding">
        <div class="left-navigation">
            <ul class="sidebar-ul">
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/students'}" active-class="myclasssidebar">Students</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/tests'}"  active-class="myclasssidebar">Tests</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/assignments'}"  active-class="myclasssidebar">Assignments</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/worksheets'}"  active-class="myclasssidebar">Worksheets</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/myclasstimetable'}"  active-class="myclasssidebar">Timetable</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/journal'}"  active-class="myclasssidebar">Journal</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/attendance'}" active-class="myclasssidebar">Attendance</router-link></li>
                <li class="sidebar-li"><router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/messages'}" active-class="myclasssidebar">Messages</router-link></li>
            </ul>
        </div>
    </div>
    <div class="col-lg-10">
        <router-view v-bind:myclass="myclass" v-bind:school="school" v-bind:userdetails="userdetails" v-bind:acdemicyearandboard="acdemicyearandboard"  v-on:student="Student($event)" v-bind:singlestudent="singlestudent" v-bind:academicsandboards="academicsandboards" v-bind:userid="userid"></router-view>
    </div>
</div>
</template>
<script>
import UserService from '../services/userService.js';
    export default{
        props:['myclass','school','userdetails','acdemicyearandboard','academicsandboards','userid'],
        data(){
        return{
            id:this.$cookie.get('id'),
            singlestudent:{},
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
        },
    
        }
    }
</script>

<style>
.myclassreset-padding{
    padding:0;
}
.sidebar2
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
.myclasssidebar{
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
.sidebar-ul >li .myclasssidebar {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar2
  {

  height:65vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar2
  {
  height:83vh;
  background:#696969;
  }
}
</style>