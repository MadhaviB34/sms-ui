<template>
<div>
    <div class="col-lg-2  sidebar3 sectionreset-padding">
        <div class="left-navigation">
          <ul class="sidebar-ul">
            <li class="sidebar-li"><router-link :to="{path:'/mychild/'+this.mychild.name+'/tests'}" active-class="sectionsidebar" v-on:click.native="getTestdetails">Tests</router-link></li>
            <li class="sidebar-li"><router-link :to="{path:'/mychild/'+this.mychild.name+'/attendance'}" active-class="sectionsidebar">Attendance</router-link></li>
            <li class="sidebar-li"><router-link :to="{path:'/mychild/'+this.mychild.name+'/worksheets'}" active-class="sectionsidebar">Worksheets</router-link></li>
            <li class="sidebar-li"><router-link :to="{path: '/mychild/'+this.mychild.name+'/journal'}" active-class="sectionsidebar">Journal</router-link></li>
            <li class="sidebar-li"><router-link :to="{path:'/mychild/'+this.mychild.name+'/assignments'}" active-class="sectionsidebar">Assignments</router-link></li>
            <li class="sidebar-li"><router-link :to="{path: '/mychild/'+this.mychild.name+'/messages'}" active-class="sectionsidebar">Messages</router-link></li>
          </ul>
        </div>
    </div>
    <div class="col-lg-10">
      <router-view  v-bind:mychild="mychild" v-bind:userdetails="userdetails" v-bind:school="school" v-bind:testdetails="testdetails"></router-view>
  </div>
  </div>
</template>
<script>
import UserService from '../services/userService.js';
  export default{
        props:['school','userdetails','mychild'],
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
            var studentid = {
              "id":this.mychild.gradeid
            }
            UserService.ChildTests(this.id,studentid).then((response)=>{
              console.log(response);
              this.testdetails=response.data
              this.mychild['testCreateId'] = this.testdetails[0] && this.testdetails[0].id;
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
