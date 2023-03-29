const { createApp } = Vue;

createApp({
  data() {
    return {
      isAwesome: true,
      userColor: "green",
      userInput: "",
      isVisible: true
    };
  },
  methods: {
    handleUserInput() {
      console.log("ciao");
      this.userColor = this.userInput;
    },
  },
}).mount("#app");
