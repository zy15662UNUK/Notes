export const fruitMixin = {
  data: function() {
    return {
      fruits: ["apple","banana","mango","melon"],
      filterText: ""
    };
  },
  computed: {
    filterFruits(){
      var self = this;
      return this.fruits.filter(function(elem){
        return elem.match(self.filterText);
      });
    }
  }
};
