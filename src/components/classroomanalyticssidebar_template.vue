<template>
<div>
    <div class="col-lg-12  sidebar7 sectionreset-padding">
        <div class="left-navigation">
          <ul class="sidebar-ul">
            <li class="sidebar-li"><router-link to="/classroomanalytics/marks" active-class="classroomanalyticsactive">Marks</router-link></li>
            <li class="sidebar-li"><router-link to="/classroomanalytics/marksofallstudents" active-class="classroomanalyticsactive">Marks Of All Students</router-link></li>

          </ul>
        </div>
    </div>

  </div>
</template>
<style>
.sectionreset-padding{
    padding:0;
}
.sidebar7
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
.classroomanalyticsactive{
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
.sidebar-ul >li .classroomanalyticsactive {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar7
  {

  height:70vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar7
  {
  height:88.5vh;
  background:#696969;
  }
}
</style>
