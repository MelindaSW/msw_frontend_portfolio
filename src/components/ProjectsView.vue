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
    <v-sheet
      id="vsheet"
      class="mx-auto slide-group-sheet"
      max-width="90%"
      elevation="5"
    >
      <v-slide-group id="slidegroup" class="pa-4" show-arrows="true">
        <v-slide-item v-for="(p, i) in projects" :key="i" disabled>
          <div class="projectcard">
            <img :src="getImageUrl(p.img)" :alt="p.title" />
            <h3>{{ p.title }}</h3>
            <p>{{ p.description }}</p>
            <div id="techp">
              <div class="tech" v-for="(t, i) in p.tech" :key="i">
                {{ t }}
              </div>
            </div>
            <p class="links">
              <a v-if="p.repo" :href="p.repo">REPOSITORY</a>
              <a v-if="p.url" :href="p.url" target="_blank">VIEW IT LIVE</a>
            </p>
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <div class="projects-mobile">
      <div class="projectcard" v-for="(p, i) in projects" :key="i">
        <img :src="getImageUrl(p.img)" :alt="p.title" />
        <h3>{{ p.title }}</h3>
        <p>{{ p.description }}</p>
        <div id="techp">
          <div class="tech" v-for="(t, i) in p.tech" :key="i">{{ t }}</div>
        </div>
        <p class="links">
          <a v-if="p.repo" :href="p.repo">REPOSITORY</a>
          <a v-if="p.url" :href="p.url" target="_blank">VIEW IT LIVE</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#projects {
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  max-width: 1400px;
  margin: 4rem auto;
  min-height: 100vh;
}

.projects-mobile {
  display: none;
}

h1 {
  font-size: 1.5em;
  margin-bottom: 1em;
  margin-top: 1.6em;
  font-weight: bold;
}

h3 {
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
}

#vsheet {
  min-height: min-content;
  max-width: 90%;
  margin-top: 1em;
  border-radius: 4px;
}

.projectcard {
  background-color: #180e41;
  color: white;
  border-radius: 3px;
  box-shadow: 0 0 6px 0 rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 400px;
  min-height: 600px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
  margin-right: 30px;
  position: relative;
}

p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

img {
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
  background-color: whitesmoke;
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
  width: 100%;
  position: absolute;
  bottom: 15px;
  right: 0px;
}

a {
  background-color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  color: #455889;
  padding: 3px;
  width: 60%;
  margin: auto;
}

a:hover {
  background-color: #a8bcf044;
  color: white;
}

@media (min-width: 800px) {
  #projects {
    font-size: larger;
  }
}

@media (max-width: 1000px) {
  #vsheet {
    display: none;
  }

  .links {
    position: relative;
    bottom: 0px;
    right: 0px;
  }

  #projects {
    padding-bottom: 2.7rem;
  }

  .projects-mobile {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .projectcard {
    margin: auto;
    min-height: 600px;
  }
}
</style>
