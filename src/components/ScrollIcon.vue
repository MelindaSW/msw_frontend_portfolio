<template>
  <a href="#about">
    <!-- <img
      @click="setNextDestination"
      class="scrollicon"
      src="./icons/upscrollarrow_icon.png"
      alt="scroll up"
      v-if="displayUp"
    /> -->
    <img
      class="scrollicon"
      src="./icons/scrollarrowtodown_icon.png"
      alt="scroll down"
    />
  </a>
</template>

<script lang="ts">
export default {
  // data: () => ({
  //   displayDown: true,
  // }),
  // created() {
  //   window.addEventListener("scroll", this.handleScrollEvent)
  // },
  // unmounted() {
  //   window.removeEventListener("scroll", this.handleScrollEvent)
  // },
  methods: {
    // handleScrollEvent() {
    //   console.log("scrolling")
    //   const isVisible = (element: HTMLElement | null) => {
    //     if (element !== null) {
    //       const { top, bottom } = element.getBoundingClientRect()
    //       const vHeight =
    //         window.innerHeight || document.documentElement.clientHeight
    //       return (top > 0 || bottom > 0) && top < vHeight
    //     }
    //     return this.displayDown
    //   }
    //   const homeElement = window.document.getElementById("home")
    //   const visible = isVisible(homeElement)
    //   console.log({ homeElement, visible })
    //   this.displayDown = visible
    // },
  },
  computed: {},
}
</script>

<style scoped>
.scrollicon {
  background-color: white;
  border: 2px solid #0e062e;
  border-radius: 50%;
  width: 45px;
  cursor: pointer;
  /* position: fixed; */
  padding: 9px;
  /* bottom: 20vh;
  right: 50vw; */
  z-index: 10;
  transition: transform 0.5s;
  margin: auto;
}

.scrollicon-hidden {
  visibility: hidden;
}

.scrollicon:hover {
  transform: scale(1.2, 1.2);
}

@media (max-width: 561px) {
  .scrollicon {
    /* bottom: 2vh;
    right: 5vw; */
    /* visibility: hidden; */
  }
}
</style>
