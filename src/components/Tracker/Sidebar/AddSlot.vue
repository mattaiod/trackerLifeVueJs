<template>
  <div>
    <v-text-field
        v-model="first"
        label="Nouvelle Activité"
        outlined
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "SettingTimeActivities",
  data: () => ({
    activite: '',
  })
}
</script>

<style scoped>

</style>