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
  },
}).mount("#app");
