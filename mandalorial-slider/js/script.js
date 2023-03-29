/*
MILESTONE 1
Creiamo un oggetto Movie, con le seguenti proprieta: 
- images che conterra una lista di immagini
- title che conterra il titolo del film
- category che conterra la categoria del film
- length che conterra la lunghezza del film in minuti
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      activeImage: 0,
      time: 2000,
      interval: null,
      movie: {
        images: [
          "https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg",
          "https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg",
          "https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg",
          "https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg",
          "https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg",
        ],
        title: "The Mandalorian",
        category: "Action",
        length: "120",
      },
    };
  },
  mounted() {
    this.startAutoscroll();
  },
  methods: {
    showNext() {
      if (this.activeImage < this.movie.images.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
    },
    showPrev() {
      if (this.activeImage > 0) {
        this.activeImage--;
      } else {
        this.activeImage = this.movie.images.length - 1;
      }
    },
    startAutoscroll() {
      console.log("interval", this.time);
      this.interval = setInterval(this.showNext, this.time);
    },
  },
}).mount("#app");
