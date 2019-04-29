<template>
    <div>
        <h3>Marks of a student in each subject</h3>
        <hr>
        <br>
        <div class="row">
            <div class="col-lg-12">
                <div class="col-lg-3">
                    <label class="pull-right classlabel">Class:</label>
                </div>
                <div class="col-lg-3">
                    <select class="forminput pull-left" >
                        <option v-for="classes in classes">{{classes.gradenumber}}{{classes.sectionname}}-{{classes.syllabustype}}</option>
                    </select>
                </div>
                <div class="col-lg-3 studentslabelone">
                    <label class="classlabel">Students:</label>
                </div>
                <div class="col-lg-3 studentlabel">
                    <select class="forminput">
                        <option>Mohan</option>
                        <option>Gayatri</option>
                    </select>
                </div>
            </div>
        </div>
        <br>
        <br>
        <column-chart download="data" xtitle="Subjects" ytitle="Marks" :data="booksdata"  :messages="{empty: 'No data'}" :min="0" :max="100"  style="height: 400px; width:1200px "></column-chart>
    </div>
</template>
<script>
    export default{
        props:['classes'],
        data(){
            return{
                booksdata : [
                    {
                        name: "High Score", 
                        data: [["Telugu", 99],["Hindi", 99],["English", 98], ["Maths", 100], ["Science", 100],["Social", 100]]
                    },
                    {
                        name: "Low Score", 
                        data: [["Telugu", 35],["Hindi", 35],["English",40], ["Maths", 45], ["Science", 48],["Social", 50]]
                    },
                    {
                        name: "Your Score", 
                        data: [["Telugu", 88],["Hindi", 84],["English",71], ["Maths",86], ["Science", 75],["Social", 90]]
                        
                    
                    }
                ]
            }
        }
    }
</script>