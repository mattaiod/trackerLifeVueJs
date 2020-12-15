<template>
  <div class="navbar">
    <CreateModifyActivities id="createModify"/>
    <hr>
    <SettingTimeActivities />
  </div>
</template>

<script>
import SettingTimeActivities from "@/components/Sidebar/SettingTimeActivities";
import CreateModifyActivities from "@/components/Sidebar/CreateModifyActivities";
export default {
name: "Sidebar",
  components: {CreateModifyActivities, SettingTimeActivities}
}
</script>

<style scoped>
hr{
  margin:5px
}
#createModify{
  height:66vh;
}
</style>