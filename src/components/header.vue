<template>
  <div>
     <div>
  <header class="contaioner">
    <nav class="navbar navbar-right navbar-fixed-top">
      <div class="col-md-offset-1 navbar-header">
        <router-link to="/"><img src="http://ischool-project.s3-website-us-east-1.amazonaws.com/ischoollogo.png"  style="width:40%"></router-link>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#linkpages" >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
      </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/" active-class="active" class="btn btn-clear btn-sm btn-min-block"href="/">HOME</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active" class="btn btn-clear btn-sm btn-min-block">ABOUT</router-link>
          </li>
          <li>
            <router-link to="/features" active-class="active" class="btn btn-clear btn-sm btn-min-block">FEATURES</router-link>
          </li>
          <li>
            <router-link to="/pricing" active-class="active" class="btn btn-clear btn-sm btn-min-block">PRICING</router-link>
          </li>
          <li>
            <router-link to="/login" active-class="active" v-on:click.native="errormessage()" class="btn btn-clear btn-sm btn-min-block" >LOGIN</router-link>
          </li>
          <router-link class="get-started btn btn-ready btn-sm btn-min-block" to="/register">GET STARTED</router-link>
        </ul>
      </nav>
    </header>
    </div>
  <!-- <div>
    <div class="header-nav" v-if="this.$cookie.get('userrole')=='ADMIN'">
      <div class="container-fluid">
        <nav class="dashnavbar" >
         <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#linkpages" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link class="navbar-brand" to="/dashboard">{{school.schoolname}}</router-link>
            </div>
            <div class="collapse navbar-collapse" id="linkpages">
                <ul class="nav navbar-nav navbar-right acdemicyearform">
                  <li>
                    <div class="col-lg-12 academicyearandboard">
                      <div class="col-lg-3">
                        <label class="pull-right">Year</label>
                      </div>
                      <div class="col-lg-3">
                        <select class="forminput" v-on:change="changingacademicyear()" v-model="acdemicyearandboard.academicyearid" >
                          <option v-for="academic in academicsandboards.academics" v-bind:value="academic.id">{{academic.passingyear}}</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="col-lg-12 academicyearandboard">
                      <div class="col-lg-3">
                        <label class="pull-right">Board</label>
                      </div>
                      <div class="col-lg-3 ">
                        <select class="forminput" v-model="acdemicyearandboard.syllabustype" v-on:change="changingboard" >
                          <option v-for="board in academicsandboards.boards">{{board.syllabustype}}</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                      <a class="navbar-brand" href="/">{{userdetails.username}}</a>
                  </li>
                  <li>
                    <a href="/login" >Logout</a>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div>
    <div class="header-nav-one" v-if="this.$cookie.get('userrole')=='ADMIN'">
      <div class="container-fluid">
        <nav class="dashnavbar" >
          <div class="container-fluid">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#linkpages" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
               </button>
            </div>
            <div class="collapse navbar-collapse" id="linkpages">
               <ul class="nav navbar-nav ">
                    <li>
                    <router-link  to="/dashboard" active-class="active">Dashboard</router-link>
                    </li>

                    <li>
                    <router-link  to="/admin" active-class="active">Admin</router-link>
                    </li>
                    <li>
                    <router-link  to="/students" active-class="active">Students</router-link>
                    </li>
                    <li>
                    <router-link  to="/teachers" active-class="active">Teachers</router-link>
                    </li>
                    <li>
                    <router-link  to="/tests" active-class="active">Tests</router-link>
                    </li>
                    <li>
                    <router-link  to="/crm" active-class="active">Sections</router-link>
                    </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div>
    <div class="header-nav-two" v-if="this.$cookie.get('userrole')=='ADMIN'">
      <div class="container-fluid">
        <nav class="dashnavbar" >
          <div class="container-fluid">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#linkpages" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
               </button>
            </div>
            <div class="collapse navbar-collapse" id="linkpages">

            </div>
          </div>
        </nav>
      </div>
    </div>
  </div> -->
  <!-- <div>
    <div class="header-nav" v-if="this.$cookie.get('userrole')=='TEACHER'">
      <div class="container-fluid">
        <nav class="dashnavbar" >
         <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#linkpages" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link class="navbar-brand" to="/dashboard">{{school.schoolname}}</router-link>
            </div>
            <div class="collapse navbar-collapse" id="linkpages">
                <ul class="nav navbar-nav navbar-right top-header ">
                  <li>
                      <a class="navbar-brand" href="/">{{userdetails.username}}</a>
                  </li>
                  <li>
                     <a href="/login">Logout</a>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div>
    <div class="header-nav-one"  v-if="this.$cookie.get('userrole')=='TEACHER'">
      <div class="container-fluid">
        <nav class="dashnavbar" >
         <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#linkpages" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="linkpages">
                <ul class="nav navbar-nav navbar-left top-header ">
                  <li>
                    <router-link  to="/dashboard" active-class="active">Dashboard</router-link>
                  </li>
                  <li>
                    <router-link  to="/myclass" active-class="active">My Class</router-link>
                  </li>
                  <li>
                    <router-link  to="/mysubjects" active-class="active">My Subject</router-link>
                  </li>
                    <li>
                     <router-link  to="/mysubjects" active-class="active">My Subject</router-link>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div>
    <div class="header-nav-two"  v-if="this.$cookie.get('userrole')=='TEACHER'">
      <div class="container-fluid">
        <nav class="dashnavbar" >
         <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#linkpages" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="linkpages">

            </div>
          </div>
        </nav>
      </div>
    </div>
  </div> -->
   </div>
</template>
<script>
import UserService from '../services/userService.js';
import EventBus from '../event-bus';
export default{
    props:['school','userdetails','academicsandboards','acdemicyearandboard','error'],
    data(){
      return{
              requestheaders:{
                headers:{
                "Content-Type": 'application/json; charset=utf-8',
                "authorization":this.userdetails.authorization,
                "tenant":this.userdetails.tenant
                }
              },
              id:{
                id:this.school.id
              },
              board:'STATE',



            }
        },
        methods:{
          changingacademicyear:function(){
            this.$emit('changingacademicyear',this.acdemicyearandboard.academicyearid)
          },
          changingboard:function(){
            this.$emit('changingboard',this.acdemicyearandboard.syllabustype)
          },
          errormessage(){
            this.$emit('errormessage');
          },
          deletecookie(){
            this.$cookie.delete('userid');

          },


        },
        created(){
          for(var i=0;i<this.academicsandboards.academics.length;i++){
            if(this.academicsandboards.academics[i].active==1){
             return this.passingyear=this.academicsandboards.academics[i].passingyear
            }
          }
        },




  }
</script>
<style scoped>
   .navbar-brand {
      position: relative;
       z-index: 2;
}
   .navbar-nav.navbar-right .btn { position: relative; z-index: 2; padding: 4px 20px; margin: 10px auto; transition: transform 0.3s; }
   .navbar .navbar-collapse { position: relative; overflow: hidden !important; }
   .navbar .navbar-collapse .navbar-right > li:last-child { padding-left: 22px; }
   .navbar .nav-collapse { position: absolute; z-index: 1; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding-right: 120px; padding-left: 80px; width: 100%; }
   .navbar.navbar-default .nav-collapse { background-color: #f8f8f8; }
   .navbar.navbar-inverse .nav-collapse { background-color: #222; }
   .navbar .nav-collapse .navbar-form { border-width: 0; box-shadow: none; }
   .nav-collapse>li { float: right; }
   .btn.btn-circle { border-radius: 50px; }
   .btn.btn-outline { background-color: transparent; }

   .navbar.navbar-default .nav-collapse,
   .navbar.navbar-inverse .nav-collapse {
   height: auto !important;
   transition: transform 0.3s;
   transform: translate(0px,-50px);
   }
   .navbar.navbar-default .nav-collapse.in,
   .navbar.navbar-inverse .nav-collapse.in {
   transform: translate(0px,0px);
   }
   @media screen and (max-width: 767px) {
   .navbar .navbar-collapse .navbar-right > li:last-child { padding-left: 15px; padding-right: 15px; }
   .navbar .nav-collapse { margin: 7.5px auto; padding: 0; }
   .navbar .nav-collapse .navbar-form { margin: 0; }
   .nav-collapse>li { float: none; }
   .navbar.navbar-default .nav-collapse,
   .navbar.navbar-inverse .nav-collapse {
   transform: translate(-100%,0px);
   }
   .navbar.navbar-default .nav-collapse.in,
   .navbar.navbar-inverse .nav-collapse.in {
   transform: translate(0px,0px);
   }
   .navbar.navbar-default .nav-collapse.slide-down,
   .navbar.navbar-inverse .nav-collapse.slide-down {
   transform: translate(0px,-100%);
   }
   .navbar.navbar-default .nav-collapse.in.slide-down,
   .navbar.navbar-inverse .nav-collapse.in.slide-down {
   transform: translate(0px,0px);
   }
   }
   .header-nav{
   background:#3c3c3c;
   -webkit-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   height:100%;
   border-radius:0px
   }
    .header-nav{
      height: 50px;
    }

    .header-nav-home{
    background: #FFF;
   -webkit-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
    height: 50px;
   border-radius:0px
    }
    .header-nav-one{
    background: #f6f6f6;
   -webkit-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   height:100%;
   border-radius:0px
    }
    .header-nav-one .nav>li>a{
      color:#000

    }
    .header-nav-two{
   background:#3c3c3c;
   -webkit-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.75);
   height:100%;
   border-radius:0px
   }
  .header-nav-two{
      height: 15px;
  }
   .nav>li>a {
   position: relative;
   display: block;
   padding: 10px 15px;
   color:#415568
   }
   .nav > li > a:hover, .nav > li > a:focus {
   background-color: transparent;
   }
   .active{
   border-bottom:2px solid #fb6750;
   }
   .navbar-brand {
   height: 80%;
   color: #fff;
   }
   .navbar .navbar-collapse .navbar-right > li:last-child {
    padding-left: 0px;
}
label{
  color:#fff;
}
.forminput{
      width:150px;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.dashnavbar{
  font-size:17px;
}
.academicyearandboard{
  margin-top:7px;
}
.acdemicyearform>li>a,.top-header>li>a{
    position: relative;
    display: block;
    padding: 10px 15px;
    color: #fff;
}
.header-nav-home-brand{
  color:#415568;
}
.navbar {
    margin-bottom: 0;
    background-color:white;
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
    border-bottom: 1px solid #cde4ed;
}
.navbar-brand {
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    margin-top: 5px;
}

.navbar li a, .navbar .navbar-brand {
    color: rgb(24, 18, 18) !important;
}
.navbar-nav>li>a {

    padding-bottom: 15px;
}
.btn-ready
{
    color: #FFF;
    background-color: #f3674c;
    border-color: #FFF;
    margin-top: 15px;
    border: 2px solid tomato;
}
.btn-ready{
	border-radius:15px;

}
.btn-ready:hover{
	color:#f3674c;
	background-color: #FFF;
}
  .btn.active{
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  .get-started{
        background-color: #eb6748;
    color: #fff;
    border-radius: 23px;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 22px;
    letter-spacing: 2px;
    -webkit-transition: background-color .3s,color .3s,width .3s;
    transition: background-color .3s,color .3s,width .3s;
    border: none;
    display: inline-block;
    border: 2px solid #eb6748;
    margin-right: 1px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: 10px;
}
</style>
