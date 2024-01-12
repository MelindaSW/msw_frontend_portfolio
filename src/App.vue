<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import HomeView from "./components/HomeView.vue"
import AboutView from "./components/AboutView.vue"
import ProjectsView from "./components/ProjectsView.vue"
import ContactView from "./components/ContactView.vue"
import FooterView from "./components/FooterView.vue"
</script>

<template>
  <div id="main">
    <NavBar />
    <main>
      <HomeView />
      <AboutView />
      <ProjectsView />
      <ContactView />
      <!-- <FooterView /> -->
    </main>
  </div>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
}

main {
  display: flex;
  flex-direction: column;
  margin-left: 110px;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* top: 55px;
  width: 100%; */
}

@media (max-width: 561px) {
  main {
    /* margin-left: 60px;
    top: 0px; */
    margin-left: 0px;
  }
}
</style>
