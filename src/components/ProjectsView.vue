<script lang="ts">
import { projects } from "../assets/projects"
export default {
  data: () => ({
    projects,
  }),
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`../assets/${name}`, import.meta.url).href
    }
    return { getImageUrl }
  },
  methods: {},
}
</script>

<template>
  <div id="projectscontainer">
    <h1>Projects</h1>
    <div class="grid">
      <div class="projectcard griditem" v-for="(p, i) in projects" :key="i">
        <img :src="getImageUrl(p.img)" :alt="p.title" />
        <h3>{{ p.title }}</h3>
        <p>{{ p.description }}</p>
        <div id="techp">
          <div class="tech" v-for="(t, i) in p.tech" :key="i">{{ t }}</div>
        </div>
        <p>
          <a :href="p.repo">REPOSITORY</a> {{}}
          <a v-if="p.url" :href="p.url">VIEW IT LIVE</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#projectscontainer {
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  padding-bottom: 2.7rem;
  margin: 4rem auto;
}

h1 {
  margin-bottom: 2rem;
  font-size: xx-large;
}

h3 {
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 1rem;
}

.griditem {
  margin: auto;
}

.projectcard {
  background-color: white;
  border-radius: 0.5rem;
  border: 5px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  width: 87%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
}

p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

img {
  border-radius: 0.5rem;
  border: 1.5px solid #dfdfdf;
  width: 100%;
  height: 50%;
}

#techp {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.tech {
  background-color: #dfdfdf;
  border-radius: 3px;
  margin-left: 5px;
  margin-top: 5px;
  padding-left: 3px;
  padding-right: 3px;
}

a {
  background-color: #dfdfdf;
  border-radius: 3px;
  text-decoration: none;
  font-weight: bold;
  color: #455889;
  padding: 3px;
}

@media (min-width: 800px) {
  #projectscontainer {
    width: 80%;
    font-size: larger;
  }
}
</style>
