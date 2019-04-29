<template>
  <div class="row">
    <div class="col-md-12 col-sm-4 sidebar1">
        <div class="left-navigation">
          <ul class="sidebar-ul">
            <li class="sidebar-li"><router-link to="/admin/academics" active-class="adminsidebar">Acdemic Years</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/boards" active-class="adminsidebar">Board Of Education</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/subjects" active-class="adminsidebar">Subjects</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/testtypes" active-class="adminsidebar">Test Types</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/houses" active-class="adminsidebar">Houses</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/grades" active-class="adminsidebar">Grades</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/sections" active-class="adminsidebar">Sections</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/events" active-class="adminsidebar">Events</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/news" active-class="adminsidebar">News</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/holidays" active-class="adminsidebar">Holidays</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/periodtypes" active-class="adminsidebar">meta timings</router-link></li>
            <li class="sidebar-li"><router-link to="/admin/periods" active-class="adminsidebar">timings</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<style>
.sidebar1
{
padding-right:0px;
height:88.5vh;
background:#696969;
}

.sidebar-li
{
  list-style-type: none;
}
.sidebar-ul{
  padding-left:0px;
}
.adminsidebar{
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
.sidebar-ul >li .adminsidebar {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar1
  {
  padding-right:0px;
  height:70vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar1
  {
  padding-right:0px;
  height:88.5vh;
  background:#696969;
  }
}
</style>
