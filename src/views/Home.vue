<template>
  <div class="home">
    <v-container  class="grey pa-0">
      <v-row>
        <v-col class="blue col-4 pa-4">
          <Sidebar />
        </v-col>
        <v-col class="red col-8">
          <GeneralViewWeeks />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar";
import GeneralViewWeeks from "@/components/GeneralViewWeeks";

export default {
  name: 'Home',
  components: {
    GeneralViewWeeks,
    Sidebar,
  }
}
</script>

<style scoped>
.container{
  max-width: none;

}
.col{
  height:100vh
}
</style>
