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
  <div id="projects">
    <h1>Projects</h1>
    <div class="grid">
      <div class="projectcard griditem" v-for="(p, i) in projects" :key="i">
        <img :src="getImageUrl(p.img)" :alt="p.title" />
        <h3>{{ p.title }}</h3>
        <p>{{ p.description }}</p>
        <div id="techp">
          <div class="tech" v-for="(t, i) in p.tech" :key="i">{{ t }}</div>
        </div>
        <p class="links">
          <a :href="p.repo">REPOSITORY</a>
          <a v-if="p.url" :href="p.url" target="_blank">VIEW IT LIVE</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#projects {
  background-color: white;
  /* border-radius: 10px; */
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
}

h3 {
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80%, 1fr));
  grid-gap: 5px;
}

.griditem {
  margin: auto;
}

.projectcard {
  background-color: #180e41;
  color: white;
  /* border-top: 3px solid #455889;
  border-left: 3px solid #455889; */
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
}

p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

img {
  /* border-radius: 0.5rem; */
  border: 2px solid #dfdfdf;
  width: 100%;
  aspect-ratio: 18 / 9;
  object-fit: cover;
}

#techp {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.tech {
  background-color: #dfdfdf;
  color: #07090e;
  border-radius: 3px;
  margin-left: 5px;
  margin-top: 5px;
  padding-left: 3px;
  padding-right: 3px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
}

a {
  background-color: #dfdfdf;
  border-radius: 3px;
  text-decoration: none;
  font-weight: bold;
  color: #455889;
  padding: 3px;
}

a:hover {
  /* border: 1px solid #455889; */
  background-color: #a8bcf044;
  color: white;
}

@media (min-width: 800px) {
  #projects {
    width: 80%;
    font-size: larger;
  }
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
}
</style>
