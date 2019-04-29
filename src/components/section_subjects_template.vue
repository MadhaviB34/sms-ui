<template>
    <div>
        <div class="col-lg-12 reset-padding reset-margin">
            <div class="text-left">
                <h3 class="student-head">Subjects & Teachers</h3>
            </div>
        </div>
        <div class="col-lg-12 reset-padding reset-margin">
            <div class="text-left">
                <h4>Class Teacher:<b>{{myclass.teachername}}</b></h4>
            </div>
        </div>
        <hr>

        <div class="col-lg-12 subjectteachertable reset-padding reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Subject </div>
                        <div class="divTableCell">Subject Teacher</div>
                        <div class="divTableCell">Assign-Teacher</div>
                    </div>
                    <div class="divTableRowdata" v-for="subject in sectiondetailstodisplay.subjectteachers">
                        <div class="divTableCelldata">{{subject.subjectname}}</div>
                        <div class="divTableCelldata">{{subject.teachername}}</div>
                        <div class="divTableCelldata"><a data-toggle="modal" href="#addteacher" v-on:click.prevent="setSubjects(subject)"><i class="fa fa-plus-square fa-1x" aria-hidden="true"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
                 <div class="modal fade" id="addteacher" role="dialog" name="addstudentmodal">
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
                     <label style="margin-left: 15px">Teacher Name</label>
                  </div>
                  <div class="col-md-8 ">
                     <select class="form-control form-input" v-model="sectionsubjects.teachername">
                        <option value="" disabled selected>Select your option</option>
                        <option v-for="teacher in teachers">{{teacher.teachername}}</option>
                     </select>
                  </div>
               </div>
               <br>
               <div class="row">
                  <div class="col-lg-6 col-lg-offset-3 text-center">
                     <button id="btn-Register" type="reset" name="reset"  class="btn btn-info button"  data-dismiss="modal">Cancel</button>
                     <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="addteachertosubject" class="btn btn-info button">Add</button>
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
    props:['sectiondetails','myclass','userdetails','school'],
    data(){
        return{
        teachers:[],
        subject:{},
        sectionsubjects:{},
        sectiondetailstodisplay:this.sectiondetails,
        id:this.$cookie.get('id')
        }
    },
    created(){
        UserService.Teachers(this.id).then((response)=>{
            console.log(response.data);
            this.teachers=response.data;
        })


    },
    methods:{
        setSubjects:function(subject){
            console.log(subject);
            this.subject=subject
        },
         addteachertosubject:function(){
           var addteachertosubjectid={
                'id':this.myclass.id,
                'subjectname':this.subject.subjectname,
                'teachername':this.sectionsubjects.teachername
            }
        console.log(addteachertosubjectid);
        UserService.AssigningTeacherToSubject(addteachertosubjectid,this.id).then((response)=>{
            console.log(response);
            if(response.status==202){
                UserService.SectionDetails(this.myclass, this.id).then((response)=>{
                    this.sectiondetailstodisplay=response.data;
                    $('#addteacher').modal('hide');
            })
            }

        })
    }
    },


}
</script>
<style>
.subjectteachertable{
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
.newsection{
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
.newsection:hover{
color:white;
}
button{
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
</style>
