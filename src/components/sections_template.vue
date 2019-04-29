<template>
    <div>
    <div class="col-lg-12">
        <div class="col-lg-10 text-left">
            <h3 class="student-head">Sections</h3>
        </div>
        <div class="col-lg-2 reset-padding reset-margin">
            <router-link to="/admin/newsection" tag="button" class="btn newsection pull-right ">New Section</router-link>
        </div>
        </div>
        <div class="col-lg-12 sectionstable reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Grade</div>
                        <div class="divTableCell">Section</div>
                        <div class="divTableCell">Class Teacher</div>
                        <div class="divTableCell">Edit</div>
                    </div>
                    <div class="divTableRowdata" v-for="section in sections">
                        <div class="divTableCelldata">{{section.gradename}}</div>
                        <div class="divTableCelldata">{{section.sectionname}}</div>
                        <div class="divTableCelldata">{{section.teachername}}</div>
                        <div class="divTableCelldata"><a data-toggle="modal" href="#editclass" v-on:click="setSection(section)"><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i></a></div>

                    </div>
                </div>
   	        </div>
        </div>
        <div class="modal fade" id="editclass" role="dialog">
    <div class="modal-dialog text-center">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit Section</h4>
            </div>
            <div class="modal-body">
                <form name="editclassmodal">
                    <div class="editclass ">
                        <div class="row">
                            <div class="col-md-4">
                                <label>Teacher</label>
                            </div>
                            <div class="col-md-8">
                                <select class="form-control form-input" v-model="setSectionDetails.teachername">
                                    <option value="" disabled selected>Select your option</option>
                                    <option v-for="teacher in teachers">{{teacher.teachername}}</option>
                                </select>
                            </div>
                        </div>
                        <br>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 reset-padding col-lg-offset-4 text-center">
                            <div class="col-lg-6">
                                <button id="btn-reset" data-dismiss="modal" class="btn btn-block button">Cancel</button>
                            </div>
                            <div class="col-lg-6">
                            <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="editsection" class="btn btn-block button">Update</button>
                            </div>
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
import EventBus from '../event-bus'
    export default{
        props:['school','userdetails','acdemicyearandboard'],
        data(){
            return{
                section:{},
                sections:[],
                teachers:[],
                setSectionDetails:{},
                yearandboard:{
                    academicyearid:this.acdemicyearandboard.academicyearid,
                    syllabustype:this.acdemicyearandboard.syllabustype
                },
                id:this.$cookie.get('id')
       
            }
        },
        created(){
            UserService.Sections(this.yearandboard,this.id).then((response)=>{
                    console.log(response.data)
                this.sections=response.data;
            }),
            UserService.Teachers(this.id).then((response)=>{
                this.teachers=response.data;
            })
        
        },
        methods:{
            setSection:function(section){
                console.log(section);
                this.setSectionDetails=section;
            },
            editsection:function(){
                console.log(this.setSectionDetails)
                UserService.UpdateSection(this.setSectionDetails,this.id).then((response)=>{
                    console.log(response);
                    if(response.status==200){
                         $('#editclass').modal('hide');
                    }

                }).catch((error)=>{
                    console.log(error.response.data)
                })
            }
        },
        mounted(){
            var ref=this;
            EventBus.$on('SECTIONS', function (yearandboard,id) {
                UserService.Sections(yearandboard,id).then((response)=>{
                    ref.sections=response.data;
                    console.log(ref.sections)
                  
                })
            });
        }

    }
</script>
<style>
.sectionstable{
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
margin-top: 10px;
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