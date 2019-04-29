<template>
<div>
<div class="col-lg-12">
            <div class="col-lg-10 text-left">
                <h3 class="student-head">Period Types</h3>
            </div>
         <div class="col-lg-2 reset-padding reset-margin">
            <router-link to="/admin/newperiodtype" tag="button" class="btn newperiodbutton pull-right ">New Timing</router-link>
        </div>
        </div>
            <div class="col-lg-12 periodtable reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">From Time</div>
                        <div class="divTableCell">To Time</div>
                        <div class="divTableCell">Name</div>
                        <div class="divTableCell">Number Of Periods</div>
                        <div class="divTableCell">Edit</div>
                        <div class="divTableCell">Delete</div>
                    </div>
                    <div class="divTableRowdata" v-for="periodtype in periods">
                        <div class="divTableCelldata">{{GetFromTime(periodtype.fromtime)}}</div>
                        <div class="divTableCelldata">{{GetFromTime(periodtype.totime)}}</div>
                        <div class="divTableCelldata">{{periodtype.name}}</div>
                         <div class="divTableCelldata">{{periodtype.numberofperiods}}</div>
                        <div class="divTableCelldata"><a data-toggle="modal" href="#editholidays" ><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i></a></div>
                        <div class="divTableCelldata"><a data-toggle="modal" ><i class="fa fa-trash fa-1x" aria-hidden="true"></i></a></div>
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
 props:['school','userdetails'],
 data(){
     return{
         periods:[],
         id:this.$cookie.get('id')
    }
 },
    created(){
        UserService.Getperiodtypes(this.id).then((response)=>{
            this.periods=response.data;
        }).catch((error)=>{
            console.log(error.response.data)
        })
    },
    methods:{
            GetFromTime:function(time){
                if(time>720){
                  var temp = time-720;
                return (temp-(temp%60))/60+":"+(temp%60)+" PM";
                }
                else{
                      return (time-(time%60))/60+":"+(time%60)+" AM"; 
                }
            },
        }
    }
</script>
<style scoped>
.periodtable{
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
.newperiodbutton{
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
.newperiodbutton:hover{
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