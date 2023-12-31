const { createApp } = Vue;

const dt = luxon.DateTime;
console.log(dt);
console.log(dt.now().setLocale("it").toLocaleString());

const app = createApp({
  data() {
    return {
      toDo: {
        whatToDo: {
          text: "",
          done: false,
        },
      },
      lista: [],
      errorVisible: false,
    };
  },
  methods: {
    addToList: function () {
      console.log("Lista");
      if (this.toDo.whatToDo.text === "") {
        /* alert("Non c'è nulla da inserire nella lista!"); */
        this.errorVisible = true;
      } else {
        this.lista.unshift({
          text: this.toDo.whatToDo.text,
          done: this.toDo.whatToDo.done,
        });
        this.toDo.whatToDo.text = "";
        console.log(this.lista);
      }
    },
    removeToDo: function (index) {
      console.log("remove", this.lista);
      this.lista.splice(index, 1);
      console.log(this.lista);
    },
    toDoDone: function (done, index) {
      console.log("done", this.lista);
      this.lista[index].done = !done;
    },
    removeErrorVisible() {
      this.errorVisible = false;
    },
  },
}).mount("#app");
