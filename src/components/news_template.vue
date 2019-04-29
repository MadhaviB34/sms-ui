<template>
    <div>
      <div class="col-lg-12">
            <div class="col-lg-10 text-left">
                <h3 class="student-head">News</h3>
            </div>
        <div class="col-lg-2 reset-padding reset-margin">
            <router-link to="/admin/postnews" tag="button" class="btn newnewsbutton pull-right ">Post News</router-link>
        </div>
        </div>
        <div class="col-lg-12 newstable reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Headline</div>
                        <div class="divTableCell">Release Date</div>
                        <div class="divTableCell">Description</div>
                        <div class="divTableCell">Edit</div>
                        <div class="divTableCell">Delete</div>
                    </div>
                    <div class="divTableRowdata" v-for="news in news">
                        <div class="divTableCelldata">{{news.headline}}</div>
                        <div class="divTableCelldata">{{getDateOfRelease(news.releasedate)}}</div>
                        <div class="divTableCelldata">{{news.description}}</div>
                        <div class="divTableCelldata"><a data-toggle="modal" href="#editnews" v-on:click.prevent="setnews(news)"><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i></a></div>
                        <div class="divTableCelldata"><a data-toggle="modal" v-on:click.prevent="deletenews(news)"><i class="fa fa-trash fa-1x" aria-hidden="true"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editnews" role="dialog" name="editnewsmodal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Edit News</h4>
                    </div>
                    <div class="modal-body">
                        <form name="editnewsmodal">
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Release Date</label>
                                </div>
                                <div class="col-md-8 ">
                                    <date-picker lang="en" v-model="setreleasedate"></date-picker>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Headline</label>
                                </div>
                                <div class="col-md-8 ">
                                    <input type="text" class="form-control form-input" id="" name="headline" placeholder="headline*" v-model="newsmodel.headline"   required>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="class">Description</label>
                                </div>
                                <div class="col-md-8">
                                    <textarea name="about" class="form-control" rows="7" cols="50" placeholder="description about news......*" id="message" v-model="newsmodel.description" required></textarea>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-lg-6 col-lg-offset-3 text-center">
                                    <button id="btn-reset" data-dismiss="modal" class="btn button">Cancel</button>
                                    <button id="btn-post" type="post" name="post" v-on:click.prevent="editnews" class="btn button" >Update</button>
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
import DatePicker from 'vue2-datepicker';
import moment from 'moment'

export default{
    components: { DatePicker },
    props:['school','userdetails'],
    data(){
        return{
            news:[],
            newsmodel:{},
            setreleasedate:'',
            id:this.$cookie.get('id')
        }
    },
    created(){
        UserService.News(this.id).then((response)=>{
           this.news=response.data;
          
        }).catch((error)=>{
            console.log(error.response.data);
        })
    },
    methods:{
        deletenews:function(news){
            var newsid={
                "id":news.id
            }
            UserService.DeleteNews(newsid,this.id).then((response)=>{
                if(response.status==200){
                    UserService.News(this.id).then((response)=>{
                        this.news=response.data;
                    })
                }
            }).catch((error)=>{
                console.log((error.response.data))
            })

        },
        setnews:function(news){
            this.newsmodel=news;
            this.setreleasedate=new Date();
            this.setreleasedate.setTime(news.releasedate);
        },
        editnews:function(){
            var editnews={
                "id":this.newsmodel.id,
                "releasedate":this.setreleasedate.getTime(),
                "headline":this.newsmodel.headline,
                "description":this.newsmodel.description
            }
            console.log(editnews);
            UserService.EditNews(editnews,this.id).then((response)=>{
                if(response.status==200){
                    $('#editnews').modal('hide');  
                }
            }).catch((error)=>{
                console.log(error.response.data)
            })
        },
        getDateOfRelease:function(date){
            return moment(date).format('DD/MM/YYYY')
        }

    }
}
</script>
<style>
.newstable{
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
.newnewsbutton{
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
.newnewsbutton:hover{
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
