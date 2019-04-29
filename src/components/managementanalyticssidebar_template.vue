<template>
<div>
    <div class="col-lg-12  sidebar6 sectionreset-padding">
        <div class="left-navigation">
          <ul class="sidebar-ul">
            <li class="sidebar-li"><router-link to="/analytics/boards" active-class="managementanalyticsactive">Boards</router-link></li>
            <li class="sidebar-li"><router-link to="/analytics/students" active-class="managementanalyticsactive">Students</router-link></li>
            <li class="sidebar-li"><router-link to="/analytics/teachers" active-class="managementanalyticsactive">Teachers</router-link></li>
            <li class="sidebar-li"><router-link to="/analytics/fee" active-class="managementanalyticsactive">Fee</router-link></li>
            <li class="sidebar-li"><router-link to="/analytics/attendance" active-class="managementanalyticsactive">Attendance</router-link></li>
            <li class="sidebar-li"><router-link to="/analytics/marks" active-class="managementanalyticsactive">Student Marks</router-link></li>
            <li class="sidebar-li"><router-link to="/analytics/birthdays" active-class="managementanalyticsactive">Birthdays</router-link></li>
            <li class="sidebar-li"><router-link to="/analytics/averagemarksofagrade" active-class="managementanalyticsactive">average marks of a grade</router-link></li>
          </ul>
        </div>
    </div>

  </div>
</template>
<style>
.sectionreset-padding{
    padding:0;
}
.sidebar6
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
.managementanalyticsactive{
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
.sidebar-ul >li .managementanalyticsactive {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar6
  {

  height:70vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar6
  {
  height:88.5vh;
  background:#696969;
  }
}
</style>
