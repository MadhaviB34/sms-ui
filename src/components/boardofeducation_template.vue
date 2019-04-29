<template>
  <div class="">
        <div class="col-lg-12  text-left reset-padding reset-margin">
		    <h3>Board Of Education</h3>
		    <hr>
	    </div>
        <div class="col-lg-12 syllabustables reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">S.No</div>
                        <div class="divTableCell">SyllabusType</div>
                    </div>
                    <div class="divTableRowdata" v-for="bde in boardofeduction">
                        <div class="divTableCelldata">{{bde.id}}</div>
                        <div class="divTableCelldata">{{bde.syllabustype}}</div>
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
            boardofeduction:[],
            id:this.$cookie.get('id')
        }
    },
    created(){
        UserService.BoardOfEducation(this.id).then((response)=>{
           this.boardofeduction=response.data
       }).catch((error)=>{
           console.log(error.response.data)
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
</style>