<template>
    <div class="container-fluid">
        <h2>Number Of Students in Each Grade</h2>
        <hr>
        <br>
        <column-chart download="data" :data="[['Kinder-Garten', 182],['Grade-1', 182], ['Grade-2',150],['Grade-3', 144],['Grade-4',122],['Grade-5',126],['Grade-6',100],['Grade-7',164],['Grade-8',136],['Grade-9',144],['Grade-10',200]]"></column-chart>
    </div>
</template>
