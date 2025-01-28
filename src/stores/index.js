import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Hello from Vuex!",
    items: []
  },
  mutations: {
    setItems(state, items) {
        state.items = items; 
      },
      addItem(state, item) {
        state.items.push(item);
        console.log("Updated items array:", state.items);
      },
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    setMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    },
    fetchItems({ commit }, items) {
        commit("setItems", items);
      },
      addItem({ commit }, item) {
        commit("addItem", item);
      },

  },
  getters: {
    getMessage(state) {
      return state.message;
    },
    allItems(state) {
        return state.items;
      },
  },
});