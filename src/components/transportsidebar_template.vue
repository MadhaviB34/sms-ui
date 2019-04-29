<template>
  <div class="row">
    <div class="col-md-12 col-sm-4 sidebar8">
        <div class="left-navigation">
          <ul class="sidebar-ul">
            <li class="sidebar-li"><router-link to="/transport/dashboard" active-class="transportsidebar">Dashboard</router-link></li>
            <li class="sidebar-li"><router-link to="/transport/staff" active-class="transportsidebar">Transport Staff</router-link></li>
            <li class="sidebar-li"><router-link to="/transport/stops" active-class="transportsidebar">Stops</router-link></li>
            <li class="sidebar-li"><router-link to="/transport/buses" active-class="transportsidebar">Buses</router-link></li>
            <li class="sidebar-li"><router-link to="/transport/routes" active-class="transportsidebar">Routes</router-link></li>
           </ul>
        </div>
      </div>
    </div>
</template>
<style>
.sidebar8
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
.transportsidebar{
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
.sidebar-ul >li .transportsidebar {
    color: black;
}
.sidebar-ul > li > a:hover, .sidebar-ul >li>a:focus {
text-decoration: none;
}
@media only screen  and (min-width : 1224px) {
/* Styles */
  .sidebar8
  {
  padding-right:0px;
  height:70vh;
  background:#696969;
  }
}
@media only screen  and (min-width : 1824px) {
/* Styles */
   .sidebar8
  {
  padding-right:0px;
  height:88.5vh;
  background:#696969;
  }
}
</style>
