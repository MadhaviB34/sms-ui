<template>
   <div>
      <div class="container-fluid"  v-if="this.$cookie.get('userrole')=='ADMIN' || this.$cookie.get('userrole')=='PARENT'" >
         <div class="col-md-12">
            <div class="col-md-3 col-xs-12 col-sm-12">
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="eventsbanner">UPCOMING EVENTS</h4>
                     <div class="ëventsdata" v-for="events in eventsdata">
                        <h4 class="eventheading">{{events.eventname}}</h4>
                        <p><b class="eventdate">{{getEventDate(events.eventdate)}}</b> &#8286; {{events.description}}</p>
                        <p>Chiefguest:<b>{{events.chiefguest}}</b></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-12" align="left">
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="holidaybanner">NEWS & ANNOUNCEMENTS</h4>
                     <div class="newsdata" v-for="news in newsdata">
                        <p><b class="eventdate">{{getEventDate(news.releasedate)}}</b></p>
                        <h4 class="eventheading">{{news.headline}}</h4>
                        <p>{{news.description}}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-3 col-xs-12 col-sm-12" >
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="eventsbanner">HOLIDAYS</h4>
                     <div class="holidaysdata" v-for="holidays in holidaysdata">
                        <p><b class="eventdate">{{getEventDate(holidays.fromdate)}} </b>To<b class="eventdate"> {{getEventDate(holidays.todate)}}</b></p>
                        <p>occassion &#8286; &nbsp;<b class="eventdate">{{holidays.occassion}}</b></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="container-fluid" v-if="this.$cookie.get('userrole')=='TEACHER'">
         <div class="col-md-12">
             <div class="col-md-3 col-xs-12 col-sm-12">
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="eventsbanner">Schedules</h4>
                     <div class="ëventsdata" v-for="schedule in scheduleday">
                        <h4 class="eventheading schedulebanner">{{schedule.day.substring(0,3)}} &#8286;{{schedule.subjectname}}</h4>
                        <p>{{GetFromTime(schedule.periodfrom)}} To {{GetFromTime(schedule.periodto)}}</p>
                        <h4 class="eventheading">Period number:{{schedule.periodid}}</h4>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12">
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="birthdaybanner">UPCOMNIG EVENTS</h4>
                     <div class="ëventsdata" v-for="events in eventsdata">
                        <h4 class="eventheading">{{events.eventname}}</h4>
                        <p><b class="eventdate">{{getEventDate(events.eventdate)}}</b> &#8286; {{events.description}}</p>
                        <p>Chiefguest:<b>{{events.chiefguest}}</b></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-12">
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="holidaybanner">NEWS & ANNOUNCEMENT</h4>
                     <div class="newsdata" v-for="news in newsdata">
                        <p><b class="eventdate">{{getEventDate(news.releasedate)}}</b></p>
                        <h4 class="eventheading">{{news.headline}}</h4>
                        <p>{{news.description}}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-12">
            <div class="col-md-3 col-xs-12 col-sm-12" >
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="eventsbanner">HOLIDAYS</h4>
                     <div class="holidaysdata" v-for="holidays in holidaysdata">
                        <p><b class="eventdate">{{getEventDate(holidays.fromdate)}} </b>To<b class="eventdate"> {{getEventDate(holidays.todate)}}</b></p>
                        <p>occassion &#8286; &nbsp;<b class="eventdate">{{holidays.occassion}}</b></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12" >
               <div class="panel">
                  <div class="panel-heading">
                     <h4 class="birthdaybanner">BIRTHDAYS</h4>
                      <div class="col-md-6">
                         <h4><b>Today</b></h4>
                     <div class="birthdaydata" v-for="birthday in studentbirthdaydata">
                        <p ><b class="eventdate">{{birthday.name}}</b></p>
                        <p>{{birthday.gradename}}-<b class="eventdate">{{birthday.sectionname}}</b></p>
                     </div>
                     </div>
                     <div class="col-md-6">
                      <h4><b>Tomorrow</b></h4>
                        <div class="birthdaydata" v-for="birthday in tomorrowbirthdata">
                        <p ><b class="eventdate">{{birthday.name}}</b></p>
                        <p>{{birthday.gradename}}-<b class="eventdate">{{birthday.sectionname}}</b></p>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import UserService from '../services/userService.js';
import moment from 'moment'
export default{
    props:['school','userdetails','userid'],
    data(){
        return{
            eventsdata:[],
            newsdata:[],
            todayschedule:[],
            holidaysdata:[],
            studentbirthdaydata:[],

            id:this.$cookie.get('id'),
            schedules: {
                id: this.userid
            },
            tomorrowbirthdata:[],
            scheduleday:[]
        }
    },
      created(){

        UserService.AllEventsData(this.id).then((response)=>{

            this.eventsdata=response.data;
           console.log(this.eventsdata);
            console.log(response);

        }),

          UserService.AllNewsData(this.id).then((response)=>{

            this.newsdata=response.data;
           console.log(this.newsdata);
            console.log(response);

        }),

            UserService.AllHolidaysData(this.id).then((response)=>{

            this.holidaysdata=response.data;
           console.log(this.holidaysdata);
            console.log(response);

        })
            if(this.$cookie.get('userrole')!='PARENT'){
            UserService.GetTodaySchedules(this.schedules,this.id).then((response)=>{
            this.todayschedule=response.data;
            var day;
            var dayName;
            var schedule = []
            var currentday = new Date().toDateString().toUpperCase().split(" ")[0];
            for(var i=0;i<this.todayschedule.length;i++){
                    day=this.todayschedule[i].day;
                    dayName=day.substring(0,3);
                    if(dayName==currentday){
                        schedule=this.todayschedule[i];
                        this.scheduleday.push(schedule);
                    }
                }
                console.log(this.scheduleday)
            console.log(response);

         })
          

            UserService.AllStudentsBirthdayData(this.id).then((response)=>{
            this.studentbirthdaydata=response.data;
           console.log(this.studentbirthdaydata);
            console.log(response);

        })
            UserService.AllStudentstomorrowBirthday(this.id).then((response)=>{
            this.tomorrowbirthdata=response.data;
            console.log(this.tomorrowbirthdata);
            console.log(response);

        })
            }
    },
    methods:{
          GetFromTime:function(time){
                  if(time>720)
                  {
                  var temp = time-720;
            return (temp-(temp%60))/60+":"+(temp%60)+" PM";
                  }
                  else
                  {
                      return (time-(time%60))/60+":"+(time%60)+" AM";
                  }
        },
       getEventDate:function(date){
            return moment(date).format('LL');
        }
}
}
</script>
<style>

.panel-heading{
border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    }
.event-table table{
border-collapse: collapse;
width: 100%;
}
.event-table tr {
border-bottom: 1px solid #ccc;
}
.event-table thead{
background-color: #656463;
color: #fff;
}
.event-table tbody, .holiday-table tbody{
box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
}
.holiday-body .holiday-header h3{
background-color:dimgray;
color:#fff;
padding: 5px 0px 5px 8px;
margin-bottom: 0px;
}
.event-body .event-header h3{
background-color:#039be5;
color:#fff;
padding: 5px 0px 5px 8px;
margin-bottom: 0px;
}
.ëventsdata{
    border-bottom:1px dashed #ccc;
}
.newsdata{
    border-bottom:1px dashed #ccc;
}
.holidaysdata{
     border-bottom:1px dashed #ccc;
     align:leftside
}
.birthdaydata{
     border-bottom:1px dashed #ccc;
     border-right:1px solid #ccc;
}
.schedulebanner{
     background:url("http://ischool-project.s3-website-us-east-1.amazonaws.com/date_bg.png") no-repeat;
}
.eventsbanner{
    background:url("http://ischool-project.s3-website-us-east-1.amazonaws.com/events_title.png") no-repeat;
    width: auto;
    height: 46px;
    font-size: 22px;
    text-decoration: none;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-align: left;
    color: #fff;
    display: block;
    text-shadow: 1px 1px 2px #000;
    -moz-text-shadow: 1px 1px 2px #000;
    -webkit-text-shadow: 1px 1px 2px #000;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 46px;
}
.birthdaybanner{
      background:url("http://ischool-project.s3-website-us-east-1.amazonaws.com/birthday_title.png") no-repeat;
    width: auto;
    height: 46px;
    font-size: 22px;
    text-decoration: none;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-align: left;
    color: #fff;
    display: block;
    text-shadow: 1px 1px 2px #000;
    -moz-text-shadow: 1px 1px 2px #000;
    -webkit-text-shadow: 1px 1px 2px #000;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 46px;
}
.eventheading{
    color:#1a427d;
    font-size: 15px;
    font-weight: 700;
}
.eventdate{
    color:#1a427d;
}
.holidaybanner{
    background:url("http://ischool-project.s3-website-us-east-1.amazonaws.com/holidays_title.png") no-repeat;
    width: auto;
    height: 46px;
    font-size: 22px;
    text-decoration: none;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-align: left;
    color: #fff;
    display: block;
    text-shadow: 1px 1px 2px #000;
    -moz-text-shadow: 1px 1px 2px #000;
    -webkit-text-shadow: 1px 1px 2px #000;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 46px;
    padding-left:15%;
}
table, th, td {
    border: 1px solid #ccc;
}
..divTable{
display: table;
width: 100%;
text-align: center;
}
.divTableRow {
display: table-row;
background-color: dimgray;
color: white;
height: 30px;
}
.divTableRowdata {
display: table-row;
background-color: #fff;
color: #000;
height: 30px;
}
.divTableHeading {
background-color: #ffffff;
display: table-header-group;
}
.divTableCell, .divTableHead {
border: 1px solid #eee;
display: table-cell;
padding: 3px 65px;
}
.divTableCelldata{
border: 1px solid #eee;
display: table-cell;
padding: 3px 10px;
}
.divTableHeading {
background-color: #ffffff;
display: table-header-group;
font-weight: bold;
}
.divTableFoot {
background-color: #ffffff;
display: table-footer-group;
font-weight: bold;
}
.divTableBody {
display: table-row-group;
}
</style>
