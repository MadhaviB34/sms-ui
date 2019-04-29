<template>
    <div>
    <div class="col-lg-12">
        <div class="col-lg-10 text-left">
            <h3 class="student-head">Grades</h3>
      
        </div>
        <div class="col-lg-2 reset-padding reset-margin">
            <router-link to="/admin/newgrade" tag="button" class="btn newgrade pull-right ">New Grade</router-link>
        </div>
        </div>
        <div class="col-lg-12 gradestable reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Grade No</div>
                        <div class="divTableCell">Grade Name</div>
                        <div class="divTableCell">Syllabus Type</div>
                    </div>
                    <div class="divTableRowdata" v-for="grade in grades">
                        <div class="divTableCelldata">{{grade.gradenumber}}</div>
                        <div class="divTableCelldata">{{grade.gradename}}</div>
                        <div class="divTableCelldata">{{grade.syllabustype}}</div>
                    </div>
                </div>
   	        </div>
        </div>
    </div>
</template>
<script>
import UserService from '../services/userService.js';
import EventBus from '../event-bus';
    export default{
      props:['school','userdetails','acdemicyearandboard'],
        
        data(){
            return{
                grades:[],
                syllabustype:this.acdemicyearandboard.syllabustype,
                id:this.$cookie.get('id')
            }
        },
        created(){
            UserService.Grades(this.syllabustype,this.id).then((response)=>{
                this.grades=response.data;
                console.log(response.data)
            })
            
        },
        mounted(){
            var ref=this;
            EventBus.$on('GRADES', function (syllabustype,id) {
                UserService.Grades(syllabustype,id).then((response)=>{
                    ref.grades=response.data;
                    console.log(ref.grades)
                  
                })
            });
        }
    }
</script>
<style>
.gradestable{
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
.newgrade{
background-color: #039be5;
background-image: none;
border-color: #039be5;
color:white;
padding: 5px 30px;
margin-top: 10px;
font-size: 14px;
font-weight: bold;
text-transform: uppercase;
text-decoration:none;
border-radius:0px
}
.newgrade:hover{
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