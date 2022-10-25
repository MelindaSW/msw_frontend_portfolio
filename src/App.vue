<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import ProjectsView from "./components/ProjectsView.vue";
import ContactView from "./components/ContactView.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar />
  <main>
    <HomeView />
    <AboutView />
    <ProjectsView />
    <ContactView />
    <Footer />
  </main>
</template>

<style scoped>
main {
  /* margin-top: 55px; */
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55px;
}
</style>
