<template>
    <div class="container-fluid">
        <h2>Number of students in each Board</h2>
        <hr>
        <br>
        <pie-chart width="800px" height="500px"  download="data"  :data="[['STATE', 44], ['CBSE', 23],['ICSE', 33],['IB',10],['CAMBRIDGE',5]]"></pie-chart>
    </div>
</template>
//:donut="true"