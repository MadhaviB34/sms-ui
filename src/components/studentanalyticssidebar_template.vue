<template>
<div>
    <div class="col-lg-12  sidebar5 sectionreset-padding">
        <div class="left-navigation">
          <ul class="sidebar-ul">
            <li class="sidebar-li"><router-link to="/studentanalytics/marksofastudent" active-class="studentanalyticsactive">Marks-Box Plot</router-link></li>
            <li class="sidebar-li"><router-link to="/studentanalytics/marksofastudentinbarchart" active-class="studentanalyticsactive">marks-Bar Chart</router-link></li>
            <li class="sidebar-li"><router-link to="/studentanalytics/marksofastudentinheatmap" active-class="studentanalyticsactive">Marks-Heatmap</router-link></li>
            <li class="sidebar-li"><router-link to="/studentanalytics/attendance" active-class="studentanalyticsactive">Attendance</router-link></li>
          </ul>
        </div>
    </div>

  </div>
</template>
<style>
.sectionreset-padding{
    padding:0;
}
.sidebar5
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
.studentanalyticsactive{
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
.sidebar-ul >li .studentanalyticsactive {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar5
  {

  height:70vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar5
  {
  height:88.5vh;
  background:#696969;
  }
}
</style>