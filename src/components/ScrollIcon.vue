<template>
  <a :href="destinations[toDestination]">
    <img
      @click="setNextDestination"
      class="scrollicon"
      src="./icons/upscrollarrow_icon.png"
      alt="scroll up"
      v-if="displayUp"
    />
    <img
      @click="setNextDestination"
      class="scrollicon"
      src="./icons/scrollarrowtodown_icon.png"
      alt="scroll down"
      v-if="!displayUp"
    />
  </a>
</template>

<script lang="ts">
export default {
  data: () => ({
    destinations: ["#home", "#about", "#projects", "#contact"],
    toDestination: 1,
    displayUp: false,
  }),
  created() {
    window.addEventListener("scroll", this.handleScrollEvent)
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScrollEvent)
  },
  methods: {
    setNextDestination() {
      this.toDestination =
        this.toDestination === 3
          ? 0
          : (this.toDestination = this.toDestination + 1)

      this.displayUp = this.toDestination === 3
    },
    handleScrollEvent() {},
  },
  computed: {},
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
