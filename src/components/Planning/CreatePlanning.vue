<template>
  <v-card class="mt-3">
    <div class="d-flex justify-center mb-6 ">
      <div v-for="day in daysOfWeek" :key="day" >
        <v-btn  class="mr-1 ml-1" type="button" @click="selectDay(day)">{{ day }}</v-btn>
      </div>
    </div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col sm="4">
            <v-container class="grey lighten-5">
              <v-row>
                <v-col v-for="(activity) in activities" :key="activity" sm="4">
                  <div v-if="activities.length > 0">
                    <v-btn elevation = "5" rounded @click="activitySelected(activity)">
                      {{ activity }}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="justify-center">
                  <v-text-field
                      v-model="startSlot"
                      label="Début créneaux"
                      v-mask="'##-##'"
                      required
                  ></v-text-field>
                  <v-text-field
                      v-model="endSlot"
                      @keypress.enter="addDetailDay(activity)"
                      label="Fin créneaux"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
        </v-col>
        <v-col sm="8">
            <v-row>
                <v-col v-for="detail in getDay[daySelected]" :key="detail.id" sm="3" >
                  <span class="grey rounded pa-2 ">{{ detail.slot[0] }} - {{ detail.slot[1] }}: {{ detail.activity }}</span>
                </v-col>
            </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

import {mapActions, mapState, mapGetters} from "vuex";

export default {
name: "CreatePlanning",
  data: function () {
      return {
        daysOfWeek: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        daySelected: null,
        activity:null,
        startSlot:null,
        endSlot:null,
      }
    },

  methods:{
    ...mapActions(["initActivities", "addDetailDayACTION", "initWeek"]),

    selectDay(nameDay) {
      this.daySelected = nameDay;
    },
    activitySelected(activity){
      this.activity = activity;
    },
    addDetailDay(){
      let payload = {
        nameDay: this.daySelected,
        slot: [this.startSlot, this.endSlot],
        activity: this.activity
      }
      this.addDetailDayACTION(payload);

      /*const patternDay =
        {
          nameDay: '',
          details: [
            {
              slot: [],
              activity: null
            }
          ]
        };
        */
    }
  },
  created: function() {
    this.initWeek();
  },
  computed: {
    ...mapState(['activities', 'week']),
    ...mapGetters(["getDay"]),

  },
  watch: {
  }
}
</script>

<style scoped>

</style>