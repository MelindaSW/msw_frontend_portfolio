<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import HomeView from "./components/HomeView.vue"
import AboutView from "./components/AboutView.vue"
import ProjectsView from "./components/ProjectsView.vue"
import ContactView from "./components/ContactView.vue"
import ScrollIcon from "./components/ScrollIcon.vue"
</script>

<template>
  <div id="main">
    <!-- <ScrollIcon />  TODO: Uncomment after fixing scroll to actions-->
    <NavBar />
    <main>
      <HomeView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </main>
  </div>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
  margin-left: 110px;
  align-items: center;
  justify-content: center;
}

@media (max-width: 561px) {
  main {
    margin-left: 0px;
  }
}
</style>
