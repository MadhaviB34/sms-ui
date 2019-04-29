<template>
    <div>
        <div class="col-lg-2 adminreset-padding adminreset-margin">
            <sidebar></sidebar>
        </div>
        <div class="col-lg-10">
            <router-view></router-view>
        </div>
    </div>

</template>
<script>
import classroomanalyticssidebar from './classroomanalyticssidebar_template.vue';
export default{
    components:{
        'sidebar':classroomanalyticssidebar
    }

}
</script>
<style>
.adminreset-padding{
    padding:0;
}
.adminreset-margin{
    margin:0
}
</style>