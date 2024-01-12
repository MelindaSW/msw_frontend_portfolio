<template>
  <a href="#about">
    <img
      @click="setNextDestination"
      class="scrollicon"
      src="./icons/upscrollarrow_icon.png"
      alt="scroll up"
    />
  </a>
  <img
    @click="setNextDestination"
    class="scrollicon"
    src="./icons/scrollarrowtodown_icon.png"
    alt="scroll down"
  />
</template>

<script lang="ts">
export default {
  data: () => ({
    destinations: ["#home", "#about", "#projects", "#contact"],
    currentDestination: 1,
    displayUp: false,
  }),
  methods: {
    setNextDestination() {
      this.currentDestination =
        this.currentDestination === 3
          ? 0
          : (this.currentDestination = this.currentDestination + 1)
    },
    scrollIntoView() {
      // window.scrollTo("#about")
    },
  },
}
</script>

<style scoped>
.scrollicon {
  background-color: white;
  border: 2px solid #0e062e;
  border-radius: 50%;
  width: 50px;
  cursor: pointer;
  position: fixed;
  padding: 9px;
  bottom: 20vh;
  right: 5vw;
  z-index: 10;
  transition: transform 0.5s;
}

.scrollicon:hover {
  transform: scale(1.2, 1.2);
}

@media (max-width: 561px) {
  .scrollicon {
    bottom: 2vh;
    right: 5vw;
  }
}
</style>
