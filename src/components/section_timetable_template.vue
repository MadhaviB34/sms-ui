<template>
<div>
  <div class="row reset-padding reset-margin">
            <div class="col-lg-12 text-left">
                <h3 class="student-head">Time Table</h3>
                 <hr>
            </div>
         </div>
            <div class="col-lg-12 periodtable reset-padding reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                      <div class="divTableRow">
                       <div class="divTableCell">No.of periods</div>
                     <div class="divTableCell" v-for="timings in timetable.periods">{{timings.period_number}}</div>
                     </div>
                    <div class="divTableRow">
                    <div class="divTableCell">Timings/Days</div>
                    <div class="divTableCell" v-for="timings in timetable.periods">{{GetFromTime(timings.periodfrom)}} To {{GetFromTime(timings.periodto)}}</div>
                    </div>
                    <div class="divTableRowdata" v-for="weekdays in timetable.timeTableView">
                    <div class="divTableCell">{{weekdays.day}}</div>
                    <div class="divTableCell" v-for="timings in weekdays.timeTableDataTransferObject">{{timings.subjectname}}
                    <a data-toggle="modal" href="#addsubjects" v-on:click.prevent="setSubjects(timings,weekdays)">
                     <i class="fa fa-pencil  pull-right" aria-hidden="true"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        
      <div class="modal fade" id="addsubjects" role="dialog" name="addstudentmodal">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add Teacher</h4>
         </div>
         <div class="modal-body">

            <form name="addteachermodal">
               <div class="row">
                  <div class="col-md-3">
                     <label style="margin-left: 15px">Subject Name</label>
                  </div>
                  <div class="col-md-8 ">
                     <select class="form-control form-input" v-model="periodsubjects">
                        <option value="" disabled selected>Select your option</option>
                         <option v-for="subject in sectiondetails.subjects" v-bind:value="subject.id">{{subject.subjectname}}</option>
                     </select>
                  </div>
               </div>
               <br>
               <div class="row">
                  <div class="col-lg-6 col-lg-offset-3 text-center">
                     <button id="btn-Register" type="reset" name="reset"  class="btn btn-info button"  data-dismiss="modal">Cancel</button>
                     <button id="btn-Register" type="submit" name="submit" class="btn btn-info button" v-on:click.prevent="addsubjectstotimetable">Add</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
    </div>

</div>

</template>
<script>
import UserService from '../services/userService.js';
export default{
 props:['school','userdetails','myclass','sectiondetails'],
 data(){
     return{
         timetable:[],
         periodsubjects:{},
         id:this.$cookie.get('id')
        }
    },
   created(){
        UserService.GetTimingsforsection(this.myclass,this.id).then((response)=>{
            this.timetable=response.data;
           console.log(this.periods);
            console.log(response);
          
        })
    },
        methods:{
             setSubjects:function(timings,weekdays){
            console.log(timings,weekdays);
            this.timings=timings ;
            this.weekdays=weekdays;
        },
        
        addsubjectstotimetable:function(){
           
            var addingsubjects={
                'weekdayid':this.weekdays.id,
                'periodid':this.timings.id,
                'subjectid':this.periodsubjects,
                'classroomid':this.myclass.id
          
        }
        console.log(addingsubjects);
        UserService.AddingsubjectToPeriod(addingsubjects,this.id).then((response)=>{
            console.log(response);
             if(response.status==200){
                  $('#addsubjects').modal('hide');
                 UserService.GetTimingsforsection(this.myclass,this.id).then((response)=>{
            this.timetable=response.data;
                 })


                }
        })
        },
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
      }
}
</script>
<style scoped>
.divTable{
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
padding: 3px 10px;
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