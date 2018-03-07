export const myFilter3={
  computed: {
    myFilter3(){
      var arr=this.stringEx1.split("");
      var out = "";
      for(var i=arr.length-1;i>-1;i--){
        out+=arr[i];
      }
      return out;
    }
  }
};
