<template>
  <div>
    <v-card class="mt-3">
      <h2>Activité</h2>
      <v-container class="grey lighten-5">
        <v-row>
          <v-col sm="3">
            <v-text-field
                v-model="activityWritten"
                :counter="15"
                @keypress.enter="createActivity"
                label="Activité"
                id="field_activitate"
                required
            ></v-text-field>
            <v-btn
                :disabled="activityWritten == ''"
                color="success"
                @click="createActivity"
                rounded
            >
              +
            </v-btn>
          </v-col>
          <v-col sm="9">
              <v-container>
                <v-row>

                  <v-col v-for="(activity, index) in activities" :key="activity" sm="4">
                    <div v-if="activities.length > 0">
                    <v-btn
                        elevation = "5"
                        rounded>
                      <b>#{{ index +1 }}/ </b> {{ activity }}
                    </v-btn>
                    <v-btn type="button" @click="deleteActivity(index)">X</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import {  mapActions, mapState } from 'vuex';
export default {
name: "Activity",
  data: function () {
    return {
      activityWritten:'',
    }
  },
  methods:{
    ...mapActions([ 'createActivityAction', 'deleteActivityAction', "initActivities"]),
    createActivity() {
      this.createActivityAction(this.activityWritten);
      this.activityWritten = ''
    },
    deleteActivity(index) {
      this.deleteActivityAction(index);
    }
  },
  computed: {
    ...mapState(['activities']),
  },
  created: function() {
    this.initActivities();
  }
}
</script>

<style scoped>
</style>