<template>
    <div>
        <div class="col-md-12">
            <div class="col-lg-10 text-left reset-padding reset-margin">
		        <h3>Academics</h3>
            </div>
            <div class="col-lg-2 reset-padding reset-margin">
                <router-link to="/admin/newacademic" tag="button" class="btn newacademicbutton pull-right ">New Academic</router-link>
            </div>
        </div>
		<hr/>
	    <div class="col-lg-12 syllabustables reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Passing Year</div>
                        <div class="divTableCell">Academic Year Starting</div>
                        <div class="divTableCell">Academic Year Ending</div>
                        <div class="divTableCell">status</div>
                        <div class="divTableCell">Edit</div>
                    </div>
                    <div class="divTableRowdata" v-for="acd in academics">
                        <div class="divTableCelldata">{{acd.passingyear}}</div>
                        <div class="divTableCelldata">{{getAcademicyearStartdate(acd.academicyearstarting)}}</div>
                        <div class="divTableCelldata">{{getAcademicyearEnddate(acd.academicyearending)}}</div>
                        <div class="divTableCelldata">{{acd.active}}</div>
                         <div class="divTableCelldata"><a data-toggle="modal" href="#editacademic" v-on:click="setacademicyear(acd)"><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    <div class="modal fade" id="editacademic" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Edit Academic</h4>
                </div>
                <div class="modal-body">
         	        <form class="form-horizantal" name="addacademicform">
            	        <div class="row">
                            <div class="col-md-3">
                                <label>Passing Year</label>
                            </div>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="passingyear" placeholder="passingyear*" v-model="setacdeimyeardetailsforupdating.passingyear" ng-pattern="" required>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-3">
                                <label>Academic Year start</label>
                            </div>
                            <div class="col-md-9">
                                <date-picker lang="en"  v-model="setAcademicyearstartingforUpdate"></date-picker>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-3">
                                <label>Academic Year Ending</label>
                            </div>
                            <div class="col-md-9">
                                <date-picker lang="en"  v-model="setAcademicyearendingforUpdate"></date-picker>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-3">
                                <label>Status</label>
                            </div>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="status" placeholder="status*" v-model="setacdeimyeardetailsforupdating.active" ng-pattern="" required>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-lg-6 col-lg-offset-3 text-center">
                                <button id="btn-reset" data-dismiss="modal" class="btn button">Cancel</button>
                                <button id="btn-Register" type="submit" name="submit"  v-on:click.prevent="updateacademicyear()" class="btn button" ng-disabled="creategradeform.$invalid">Submit</button>
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
import DatePicker from 'vue2-datepicker';
import UserService from '../services/userService.js';
import moment from 'moment'
var count=0;
export default{
    components: { DatePicker },
    props:['school','userdetails'],
    data(){
        return{
            academics:[],
            setacdeimyeardetailsforupdating:{},
            setAcademicyearstartingforUpdate:'',
            setAcademicyearendingforUpdate:'',
            id:this.$cookie.get('id')
        }
    },
    created(){
        UserService.AcademicYears(this.id).then((response)=>{
        this.academics=response.data.academics;
        console.log(this.academics);
    })
},
    methods:{
        setacademicyear:function(acd){
            this.setacdeimyeardetailsforupdating=acd;
            this.setAcademicyearstartingforUpdate=new Date();
            this.setAcademicyearstartingforUpdate.setTime(acd.academicyearstarting);
            this.setAcademicyearendingforUpdate=new Date();
            this.setAcademicyearendingforUpdate.setTime(acd.academicyearending);
        },
        updateacademicyear:function(){
           var acdemicyeardetailsforUpdate={
               "id":this.setacdeimyeardetailsforupdating.id,
               "passingyear":this.setacdeimyeardetailsforupdating.passingyear,
               "active":this.setacdeimyeardetailsforupdating.active,
               "academicyearstartdt":this.setAcademicyearstartingforUpdate.getTime(),
               "academicyearenddt":this.setAcademicyearendingforUpdate.getTime()
           }
          UserService.UpdateAcademiYear(acdemicyeardetailsforUpdate,this.id).then((response)=>{
              $('#editacademic').modal('hide');
          }).catch((error)=>{
              console.log(error.response.data)
          })

        },
        getAcademicyearStartdate:function(date){
            return moment(date).format('DD/MM/YYYY');
        },
        getAcademicyearEnddate:function(date){
            return moment(date).format('DD/MM/YYYY')
        }
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
.newacademicbutton{
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
.newacademicbutton:hover{
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