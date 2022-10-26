<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import ProjectsView from "./components/ProjectsView.vue";
import ContactView from "./components/ContactView.vue";
import FooterView from "./components/FooterView.vue";
</script>

<template>
  <NavBar />
  <main>
    <HomeView />
    <AboutView />
    <ProjectsView />
    <ContactView />
    <FooterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55px;
}

@media (min-width: 561px) {
  main {
    margin-left: 60px;
    top: 0px;
  }
}
</style>
