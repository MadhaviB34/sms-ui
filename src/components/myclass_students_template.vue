<template>
    <div>
        <div class="col-lg-12 text-left">
            <h3 class="student-head">Students</h3>
            <hr>
        </div>
        <div class="col-lg-12 studentstable reset-padding reset-margin " >
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Id</div>
                        <div class="divTableCell">Name</div>
                        <div class="divTableCell">Parent/Gardian Name</div>
                        <div class="divTableCell">Admission Number</div>
                    </div>
                    <div class="divTableRowdata" v-for="student in myclassstudents">
                        <div class="divTableCelldata">{{student.id}}</div>
                        <div class="divTableCelldata"> <router-link :to="{path:'/myclass/'+myclass.gradenumber+myclass.sectionname+'-'+myclass.syllabustype+'/student'}" v-on:click.native="eachstudent(student)">{{student.name}}</router-link></div>
                        <div class="divTableCelldata">{{student.fathername}}</div>
                        <div class="divTableCelldata">{{student.admissionnumber}}</div>
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

    props:['myclass','school','userdetails','acdemicyearandboard'],
    data(){
        return{
            sectionid:{
                    id:this.myclass.id
            },
            myclassstudents:[],
            id:this.$cookie.get('id')
            
        }
    },
    methods:{
         eachstudent(student){
            console.log(student);
            this.$emit('student',student);
        }
    },
    created(){
        UserService.MyClassStudents(this.sectionid,this.id).then((response)=>{
        this.myclassstudents=response.data;
        console.log(response.data)
    })
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
</style>
