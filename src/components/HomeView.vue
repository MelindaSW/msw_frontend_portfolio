<script setup lang="ts">
import ScrollIcon from "../components/ScrollIcon.vue"
</script>

<template lang="">
  <div id="home">
    <div id="head">
      <img id="profilepic" src="../assets/profilepic-circle.png" />
    </div>
    <div id="presentation">
      <h1>Melinda Sandström-Wagner</h1>
      <h2>Software developer</h2>
      <p>
        Hi and welcome! <br />I am a fullstack web developer, specialized in
        React/Typescript, Node and Java. The intent of this page is to showcase
        some of my personal projects and keep track my own development and
        fields of interests.
      </p>
      <p>
        Here you can find examples of some of my
        <a href="#projects">personal projects</a> and get an overview of
        <a href="#about"> my skills</a>.
      </p>
      <p>
        If you want to get in touch, you can reach me via
        <a href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
          >Linkedin</a
        >
        or <a href="mailto:sandstrommelinda@gmail.com">email</a>.
      </p>
      <p><ScrollIcon /></p>
    </div>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2.7rem;
  color: white;
  height: 100vh;
  overflow: hidden;
}

#head {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#profilepic {
  width: 50%;
  margin-top: 2rem;
}

h1 {
  text-align: center;
  color: rgb(181, 242, 250);
}

h2 {
  text-transform: uppercase;
  font-size: 22px;
}

p {
  width: 80%;
  margin-top: 1.5rem;
  text-align: center;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  color: rgb(181, 242, 250);
}

a:hover {
  text-decoration: underline;
}

@media (min-width: 561px) {
  #home {
    width: 75%;
    margin: auto;
  }

  #profilepic {
    width: 265px;
  }
}

@media (min-width: 800px) {
  #home {
    min-height: 100vh;
    width: 60%;
  }
}

@media (min-width: 1500px) {
  #home {
    flex-direction: row;
    width: 70%;
    min-height: 100%;
  }

  #presentation {
    align-items: baseline;
    padding-left: 4rem;
    padding-bottom: 5rem;
  }

  h1 {
    font-size: x-large;
    align-items: stretch;
  }

  p {
    text-align: left;
    font-size: small;
  }

  #profilepic {
    width: 320px;
    padding-bottom: 5rem;
  }
}
</style>
