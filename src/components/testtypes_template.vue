<template>
<div>
<div class="col-lg-12">
    <div class="col-lg-10  text-left reset-padding reset-margin">
		<h3>Test Types</h3>
	
	</div>
    <div class="col-lg-2 reset-padding reset-margin">
        <router-link to="/admin/newtesttype" tag="button" class="btn newtesttypebutton pull-right ">New Test Type</router-link>
    </div>
    </div>
    <div class="col-lg-12 syllabustables  reset-margin">
        <div class="divTable">
            <div class="divTableBody">
                <div class="divTableRow">
                    <div class="divTableCell">S.No</div>
                    <div class="divTableCell">Test Type</div>
                </div>
                <div class="divTableRowdata" v-for="testtype in testypes">
                    <div class="divTableCelldata">{{testtype.id}}</div>
                    <div class="divTableCelldata">{{testtype.testtype}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import UserService from '../services/userService.js'
export default{
    props:['school','userdetails'],
    data(){
        return{
            testypes:[],
            id:this.$cookie.get('id')
        }
    },
    created(){
        UserService.TestTypes(this.id).then((response)=>{
        this.testypes=response.data
       }).catch((error)=>{
           console.log(error.response.data);
       })
    }
}
</script>
<style scoped>
.reset-padding
{
padding: 0;
} 
.reset-margin{
 margin: 0;
}
.syllabustables{
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
.newtesttypebutton{
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
.newtesttypebutton:hover{
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