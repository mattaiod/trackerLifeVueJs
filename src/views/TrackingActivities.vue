<template>
  <div class="home">
    <v-container  class="grey pa-0">
      <v-row>
        <v-col class="blue col-4 pa-4">
          <Sidebar />
        </v-col>
        <v-col class="red col-8">
          <Week />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Week from "@/components/Tracker/Week";
import Sidebar from "@/components/Tracker/Sidebar/Sidebar";

export default {
  name: 'Home',
  components: {
    Week,
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
