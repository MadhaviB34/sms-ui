<template>
    <div class="container-fluid"> 
        <div>
            <h1>Attendance of a grade by stacked Chart</h1>
            <hr>
            <br>
            <column-chart download="data" :stacked="true" xtitle="Grade" ytitle="%" :data="booksdata"  :messages="{empty: 'No data'}" :min="0" :max="100"></column-chart>
        </div>
         <div>
            <h1>Attendance of a grade by Month</h1>
            <hr>
            <br>
            <column-chart download="data"  xtitle="Grade" ytitle="Absentees" :data="[['Kinder-Garten', 2],['Grade-1', 5], ['Grade-2',1],['Grade-3', 2],['Grade-4',4],['Grade-5',0],['Grade-6',2],['Grade-7',8],['Grade-8',1],['Grade-9',3],['Grade-10',0]]"></column-chart>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                booksdata : [
                    {
                        name: "High", 
                        data: [["Kinder-Garten", 10],["Grade-1", 7],["Grade-2", 5], ["Grade-3", 4], ["Grade-4", 5],["Grade-5", 10],["Grade-6", 6],["Grade-7", 7],["Grade-8", 8],["Grade-9", 10],["Grade-10", 0]]
                    },
                    {
                        name: "Average", 
                        data: [["Kinder-Garten", 9],["Grade-1", 5],["Grade-2", 3], ["Grade-3", 4], ["Grade-4", 4],["Grade-5", 5],["Grade-6", 5],["Grade-7", 5],["Grade-8", 6],["Grade-9", 1],["Grade-10", 0]]
                    },
                    {
                        name: "Low", 
                        data: [["Kinder-Garten", 8],["Grade-1", 4],["Grade-2", 1], ["Grade-3", 0], ["Grade-4", 1],["Grade-5", 2],["Grade-6", 3],["Grade-7", 1],["Grade-8", 4],["Grade-9", 2],["Grade-10", 0]]
                        
                    
                    }
                ]
            }
        }
    }
</script>
