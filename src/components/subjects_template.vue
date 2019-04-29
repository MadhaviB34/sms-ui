<template>
    <div>
        <div class="col-lg-12">
        <div class="col-lg-10 text-left reset-padding reset-margin">
		    <h3>Subjects</h3>
		 
	    </div>
  
        <div class="col-lg-2 reset-padding reset-margin">
            <router-link to="/admin/newsubject" tag="button" class="btn newsubjectbutton pull-right ">New Subject</router-link>
        </div>
  </div>
    
        <div class="col-lg-12 subjectstable reset-padding reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Id</div>
                        <div class="divTableCell">Subject Name</div>
                        <div class="divTableCell">Testable</div>
                    </div>
                    <div class="divTableRowdata" v-for="subject in subjects" >
                        <div class="divTableCelldata">{{subject.id}}</div>
                        <div class="divTableCelldata">{{subject.subjectname}}</div>
                        <div class="divTableCelldata">{{subject.istestable}}</div>
                    </div>
                </div>
            </div>
        </div>
   
    </div>                                                                                     
</template>
<script>
import UserService from '../services/userService.js';
export default{
    props:['school','userdetails'],
    data(){
        return{
            subjects:[],
            id:this.$cookie.get('id')
        }
    },
    created(){
        UserService.Subjects(this.id).then((response)=>{
        this.subjects=response.data
    }).catch((error)=>{
        console.log(error.response.data)
    })
}
  
}
</script>
<style>
.subjectstable{
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
.newsubjectbutton{
background-color: #039be5;
background-image: none;
border-color: #039be5;
color:white;
padding: 5px 30px;
  margin-top:10px;
font-size: 14px;
font-weight: bold;
text-transform: uppercase;
text-decoration:none;
border-radius:0px
}
.newsubjectbutton:hover{
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