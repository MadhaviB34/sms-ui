<template>
   <div>
        <div class="col-lg-12">
            <div class="col-lg-10 text-left">
                <h3 class="student-head">Attendance</h3>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Date Of Attendance</div>
                        <div class="divTableCell">Attendance Status</div>
                    </div>
                    <div class="divTableRowdata" v-for="presentees in attendanceData">
                        <div class="divTableCelldata">{{getDate(presentees.dateofattendance)}}</div>
                        <div class="divTableCelldata">
                          <span v-if="presentees.attendancestatus==1">Present</span>
                           <span v-if="presentees.attendancestatus==0">Absent</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>
<script>
    import UserService from '../services/userService.js';
    import moment from 'moment';
    export default{
        props:['mychild','school','userdetails'],
        data(){
            return{
            id:this.$cookie.get('id'),
            attendanceData:[],
            dateofattendance:''
            }
        },
        created(){
          const mychild = {
            "studentid": this.mychild.studentid,
            "classid": this.mychild.classid
          }
          UserService.AttendanceOfStudent(this.id,mychild).then((response)=>{
              this.attendanceData = response.data;
            }).catch((error)=>{
                console.log(error.data);
            })
        },
        methods: {
            getDate:function(date){
              return moment(date).format('DD/MM/YYYY');
          }
        }
      
    }
</script>
<style>
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
.newassignmentbutton{
    background-color: #039be5;
    background-image: none;
    border-color: #039be5;
    color:white;
    padding: 5px 30px;
    margin-top: 12%;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration:none;
    border-radius:0px
}
.newassignmentbutton:hover,.newassignmentbutton:focus{
    color:white;
    text-decoration:none;
}
</style>