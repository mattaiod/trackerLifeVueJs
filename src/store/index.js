import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activities: [],
    week: {}
  },

  getters: {

    getDay(state) {
      console.log(state.week);
      return state.week;
    }
  },

  mutations: {
    //////////// Activity //////////////

    CREATE_ACTIVITY(state, payload) {
      let storedNames;
      if (!localStorage.activities) {
        localStorage.setItem("activities", JSON.stringify([payload]));
        state.activities = [payload];
      } else {
        storedNames = JSON.parse(localStorage.getItem("activities"));
        storedNames.push(payload);
        localStorage.setItem("activities", JSON.stringify(storedNames));
        state.activities.push(payload);
      }
    },

    DELETE_ACTIVITY(state, payload) {
      let storedNames = JSON.parse(localStorage.getItem("activities"));
      storedNames.splice(payload, 1);
      localStorage.setItem("activities", JSON.stringify(storedNames));
      state.activities = storedNames;
    },
    INIT_ACTIVITIES(state) {
      if (localStorage.activities)
        state.activities = JSON.parse(localStorage.getItem("activities"));
    },
    ///////////// CreatePlanning ////////////////

    INIT_WEEK(state) {
      if (localStorage.week)
        state.week = JSON.parse(localStorage.getItem("week"));
    },

    ADD_DETAIL_DAY(state, payload) {
      let storedPayload = {};
      storedPayload[payload.nameDay] =
          {
            slot: payload.slot,
            activity: payload.activity
          };
      let localStorageParsed = JSON.parse(localStorage.getItem("week"));

      if (localStorageParsed == null ) {
        storedPayload[payload.nameDay] = [storedPayload[payload.nameDay]];
        localStorage.setItem("week", JSON.stringify(storedPayload));
        state.week = storedPayload;
      } else if (localStorageParsed[payload.nameDay] == null) {
        localStorageParsed[payload.nameDay] = [storedPayload[payload.nameDay]];
        localStorage.setItem("week", JSON.stringify(localStorageParsed));
        state.week[payload.nameDay] = [storedPayload[payload.nameDay]];
      } else {
        localStorageParsed[payload.nameDay].push(storedPayload[payload.nameDay]);
        localStorage.setItem("week", JSON.stringify(localStorageParsed));
        state.week[payload.nameDay].push(storedPayload[payload.nameDay]);
      }
    },
  },

  actions: {
    //////////// Activity //////////////
    createActivityAction({commit}, payload) {
      commit('CREATE_ACTIVITY', payload);
    },
    deleteActivityAction({commit}, payload) {
      commit('DELETE_ACTIVITY', payload);
    },
    initActivities({commit}) {
      commit('INIT_ACTIVITIES');
    },
    ///////////// CreatePlanning ////////////////
    addDetailDayACTION({commit}, payload) {
      commit('ADD_DETAIL_DAY', payload);
    },
    initWeek({commit}) {
      commit('INIT_WEEK');
    },


  }

})
