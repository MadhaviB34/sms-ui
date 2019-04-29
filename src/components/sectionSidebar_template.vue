<template>
<div>
    <div class="col-lg-2  sidebar3 sectionreset-padding">
        <div class="left-navigation">
          <ul class="sidebar-ul">
            <li class="sidebar-li"><router-link :to="{path:'/crm/'+myclass.gradeid+myclass.sectionname+'/sectionsubjects'}" active-class="sectionsidebar">Subjects</router-link></li>
            <li class="sidebar-li"><router-link :to="{path:'/crm/'+myclass.gradeid+myclass.sectionname+'/sectionstudents'}" active-class="sectionsidebar">Students</router-link></li>
            <li class="sidebar-li"><router-link :to="{path:'/crm/'+myclass.gradeid+myclass.sectionname+'/sectiontests'}" active-class="sectionsidebar" v-on:click.native="getTestdetails">Tests</router-link></li>
            <li class="sidebar-li"><router-link :to="{path:'/crm/'+myclass.gradeid+myclass.sectionname+'/sectiontimetable'}" active-class="sectionsidebar">TimeTable</router-link></li>
          </ul>
        </div>
    </div>
    <div class="col-lg-10">
      <router-view v-bind:sectiondetails="sectiondetails" v-bind:myclass="myclass" v-bind:userdetails="userdetails" v-bind:school="school" v-bind:testdetails="testdetails" v-bind:sections="sections" v-bind:acdemicyearandboard="acdemicyearandboard"></router-view>
  </div>
  </div>
</template>
<script>
import UserService from '../services/userService.js';
  export default{
        props:['school','userdetails','myclass','sectiondetails','acdemicyearandboard','sections'],
        data(){
          return{
                requestheaders:{
                    headers:{
                    "Content-Type": 'application/json; charset=utf-8',
                    "authorization":this.userdetails.authorization,
                    "tenant":this.userdetails.tenant
                    }
                },
                id:this.$cookie.get('id'),
                testdetails:[]
          }
        },
        methods:{
          getTestdetails(){
            var sectionids={
              academicyear:this.acdemicyearandboard.academicyearid,
              id:this.myclass.gradeid
            }
            console.log(sectionids)
            UserService.TestDetailsOfSection(sectionids,this.id).then((response)=>{
              console.log(response);
              this.testdetails=response.data
            })
          }
        }
    }
</script>
<style>
.sectionreset-padding{
    padding:0;
}
.sidebar3
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
.sectionsidebar{
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
.sidebar-ul >li .sectionsidebar {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar3
  {

  height:65vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar3
  {
  height:83vh;
  background:#696969;
  }
}
</style>
