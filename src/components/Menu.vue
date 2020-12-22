<template>
  <div id="nav" class="purple">
    <router-link :to="{name:'trackingActivities'}" >TrackingActivities</router-link>
    <span class="mr-3 ml-3">|</span>
    <router-link :to="{name:'planning'}">Planning</router-link>
    <span class="mr-3 ml-3">|</span>
    <router-link to="/statistics">Statistiques</router-link>
  </div>
</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>

</style>