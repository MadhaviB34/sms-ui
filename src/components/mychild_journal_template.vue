<template>
    <div>
    <div class="col-lg-12">
        <div class="col-lg-10 text-left">
            <h3 class="student-head">Journal</h3>
        </div>

        </div>
        <div class="col-lg-12 worksheetstable reset-padding reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Date</div>
                        <div class="divTableCell">Tags</div>
                        <div class="divTableCell">Lesson Name</div>
                        <div class="divTableCell">Description</div>
                    </div>
                    <div class="divTableRowdata" v-for="diary in diary">
                        <div class="divTableCelldata">{{getEntryDate(diary.entrydate)}}</div>
                        <div class="divTableCelldata">{{diary.tag}}</div>
                        <div class="divTableCelldata">{{diary.lessonname}}</div>
                        <div class="divTableCelldata">{{diary.description}}</div>
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
export default{
     props:['mychild','school','userdetails'],
     components: { DatePicker },
     data(){
         return{
            diary:[],
            id:this.$cookie.get('id')
        }
     },
     
     created(){
          const classid = {
            "id": this.mychild.classid
          }
          UserService.ChildJournal(this.id,classid).then((response)=>{
              this.diary = response.data;
            }).catch((error)=>{
                console.log(error.data);
            })
     }

}
</script>
<style>
.worksheetstable{
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
.newworksheetbutton{
    background-color: #039be5;
    background-image: none;
    border-color: #039be5;
    color:white;
    padding: 5px 30px;
    margin-top: 12%;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration:none;
    border-radius:0px
}
.newworksheetbutton:hover{
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