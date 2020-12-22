<template>
  <div class="navbar">
    <TrackingActivities id="trackingActivities"/>
    <hr>
    <AddSlot />
  </div>
</template>

<script>
import AddSlot from "@/components/Tracker/Sidebar/AddSlot";
import TrackingActivities from "@/components/Tracker/Sidebar/TrackingActivities";
export default {
name: "Sidebar",
  components: {TrackingActivities, AddSlot}
}
</script>

<style scoped>
hr{
  margin:5px
}
#trackingActivities{
  height:66vh;
}
</style>