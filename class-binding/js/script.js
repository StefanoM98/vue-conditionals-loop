const {createApp} = Vue;

createApp({
    data() {
        return {
            imgSrc: "img/milano.jpg",
            isRounded: false,
            isGray: false
            // imgClasses: "rounded gray"
        }
    },
    methods: {
        toggleRounded() {
            // if(this.isRounded) {
            //     this.isRounded = false;
            // } else {
            //     this.isRounded = true;
            // }
            this.isRounded = !this.isRounded;
        },
        toggleGray() {
            this.isGray = !this.isGray;
        }
    }

}).mount("#app")