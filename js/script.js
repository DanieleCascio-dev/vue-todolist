const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      toDo: {
        whatToDo: "",
      },
      lista: [],
    };
  },
  methods: {
    addToList: function () {
      console.log("Lista");
      this.lista.push(this.toDo.whatToDo);
      this.toDo.whatToDo = "";
      console.log(this.lista);
    },
    removeToDo: function (index) {
      console.log("remove");
      this.lista.splice(index, 1);
      console.log(this.lista);
    },
  },
}).mount("#app");
