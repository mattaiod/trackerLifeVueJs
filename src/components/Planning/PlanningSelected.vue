<template>
  <div>
  <v-card class="mt-3">Afficher Planning selectioné</v-card>
  </div>
</template>

<script>
export default {
  name: "PlanningSelected",
  data: function () {
    return {
      week: [],
    }
  },

  methods:{

  },
  created: function() {
    /// INSTANCIATION PATTERN WEEK ///
    const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const patternDay =
      {
        nameDay: '',
        detail: [
          {
            slot: null,
            activity: null
          }
        ]
      };
    for (let value of daysOfWeek) {
      let elementOfWeek =  Object.create(patternDay);
      elementOfWeek.nameDay = value;
      this.week.push(elementOfWeek);
    }
  }
}
</script>

<style scoped>

</style>