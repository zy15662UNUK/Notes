const state={
  counter: 0
};
const getters = {
  doubleCounter: function(state){
    // state is the above 'state' property,
    // which is automatically passed in by vuejs
    return state.counter *2;
  },
  stringCounter: function(state){
    return state.counter + " clicks";
  }
};
const mutations = {
  increment: function(state,payload){
    state.counter+=payload;
  },
  decrement: function(state){
    state.counter--;
  }
};
const actions = {
  increment: function(context,payload){
    context.commit("increment",payload);
    // commit the increment in mutations
  },
  decrement: function(context){
    context.commit("decrement");
    // commit the increment in mutations
  },
  asyncIncrement: function(context,payload){
    setTimeout(function(){
      context.commit("increment",payload.by);
    },payload.time);
  },
  asyncDecrement: function(context){
    setTimeout(function(){
      context.commit("decrement");
    },1000);
  },
};
export default{
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
