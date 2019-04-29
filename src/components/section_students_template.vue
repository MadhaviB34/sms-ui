<template>
    <div>
        <div class="col-lg-12 reset-padding reset-margin">
            <div class="text-left">
                <h3 class="student-head">Students</h3>
            </div>
        </div>
        <div class="col-lg-12 reset-padding reset-margin">
            <div class="text-left">
                <h4>Class Teacher:<b>{{myclass.teachername}}</b></h4>
            </div>
        </div>
        <hr>
        <div class="col-lg-12 reset-padding reset-margin">
            <a data-toggle="modal" href="#addstudent" tag="button" class="btn newstudent pull-right ">New Student</a>
        </div>
        <div class="col-lg-12 reset-margin reset-padding">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Student Name</div>
                        <div class="divTableCell">Admission number</div>
                    </div>
                    <div class="divTableRowdata" v-for="student in sectiondetailsforstudents.studentsOfClassRoom" >
                        <div class="divTableCelldata">{{student.name}}</div>
                        <div class="divTableCelldata">{{student.admissionnumber}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <a v-if="sectiondetailsforstudents.studentsOfClassRoom.length !=0" data-toggle="modal" href="#promotestudents" class="pull-right">Do you want to promote them to next class? Click Here</a>
        </div>
        <div class="modal fade" id="addstudent" role="dialog" name="addstudentmodal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add Student</h4>
                    </div>
                    <div class="modal-body">
                        <form id="form" class="form-horizontal" role="form" name="studentregistrationform" >
                        <div class="row">
                            <div class="col-lg-10">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>Student Name</label>
                                    </div>
                                    <div class="col-md-8">
                                        <select class="form-control form-input" v-model="addingstudenttosection.admissionnumber" required>
                                            <option value="" disabled selected>Select your option</option>
                                            <option v-for="student in studentsofgrade" v-bind:value=student.admissionnumber>{{student.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                <div class="col-lg-6 col-lg-offset-3 text-center">
                                    <button id="btn-reset" type="reset" class="btn btn-info resetbutton"> Reset</button>
                                    <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newstudenttosection" class="btn button" ng-disabled="studentregistrationform.$invalid">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    <div class="modal fade" id="promotestudents" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button  class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                    <h4>Class:<b>{{myclass.gradenumber}}{{myclass.sectionname}}</b></h4>
                    <div class="divTable">
                        <div class="divTableBody">
                            <div class="divTableRow">
                                <div class="divTableCell">Student Name</div>
                                <div class="divTableCell">Admission number</div>
                            </div>
                            <div class="divTableRowdata" v-for="student in sectiondetailsforstudents.studentsOfClassRoom" >
                                <div class="divTableCelldata">{{student.name}}</div>
                                <div class="divTableCelldata">{{student.admissionnumber}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-2">
                            <h4>To: <b>{{myclass.gradenumber+1}}</b></h4>
                        </div>
                        <div class="col-lg-6 sectioncolumn">
                            <div class="row">
                                <div class="col-lg-4">
                                    <label>Section:</label>
                                </div>
                                <div class="col-lg-8">
                                    <select class="form-control form-input selectsection" required>
                                        <option value="" disabled selected>Select your option</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 sectioncolumn">
                            <a  tag="button" class="btn btn-info">Promote</a>
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

    export default{
        props:['sectiondetails','myclass','userdetails','school'],
        data(){
            return{
                sectiondetailsforstudents:this.sectiondetails,
                studentsofgrade:[],
                addingstudenttosection:{},
                id:this.$cookie.get('id')
            }
        },
        created(){
            console.log(this.myclass)
            UserService.StudentsOfGrade(this.myclass,this.id).then((response)=>{
                this.studentsofgrade=response.data;
            })
        },
        methods:{
            newstudenttosection:function(){
                console.log(this.addingstudenttosection);
                var studentid={
                    'id':this.myclass.id,
                    'admissionnumber':this.addingstudenttosection.admissionnumber
                }
                console.log(studentid)
                UserService.NewStudentToSection(studentid,this.id).then((response)=>{
                    if(response.status==200){
                        UserService.SectionDetails(this.myclass,this.id).then((response)=>{
                        this.sectiondetailsforstudents=response.data;
                        $('#addstudent').modal('hide');
                        })
                    }
                })

            }
        }
    }
</script>
<style scoped>
.studentstable{
width:100%;
}
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
.newstudent{
background-color: #039be5;
background-image: none;
border-color: #039be5;
color:white;
padding: 5px 30px;
margin-top: -2px;
font-size: 14px;
font-weight: bold;
text-transform: uppercase;
text-decoration:none;
border-radius:0px
}
.newstudent:hover{
color:white;
}
resetbutton{
background-color:#039be5;
}
.btn{
    border-radius:0px;
    color:#fff
}
.btn:hover, .btn:focus {
    color: #fff;
    text-decoration: none;
}
.selectsection{
    margin-left: -42px;
    margin-top: -3px;
}
.sectioncolumn{
    margin-top: 10px;
}
a:active, a:hover,a:focus {
    outline: 0;
}
</style>