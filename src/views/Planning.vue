<template>
  <div>
    <div class="d-flex justify-center mt-2">
      <v-card class="mr-1 ml-1">
        <v-card-text>
          <h3>Scolaire</h3>
        </v-card-text>
      </v-card>
      <v-card class="">
        <v-card-text>
          <h3>+</h3>
        </v-card-text>
      </v-card>
    </div>
    <Activity />
    <PlanningSelected />
    <CreatePlanning />

  </div>
</template>

<script>
import CreatePlanning from "@/components/Planning/CreatePlanning";
import PlanningSelected from "@/components/Planning/PlanningSelected";
import Activity from "@/components/Planning/Activity";

export default {
name: "Planning",
  components: {Activity, PlanningSelected, CreatePlanning}
}
</script>

<style scoped>

</style>