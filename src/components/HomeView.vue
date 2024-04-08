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
        React/Typescript, Node and Java. This is my portfolio.
      </p>
      <p>
        Here you can find examples of some of my
        <a href="#projects">projects</a> and get an overview
        <a href="#about">of my skills</a>.
      </p>
      <p>
        If you want to get in touch, you can reach me via
        <a href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
          >Linkedin</a
        >
        or <a href="mailto:sandstrommelinda@gmail.com">email</a>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
#home {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2.7rem;
  color: white;
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
}

h2 {
  text-transform: uppercase;
  font-size: 1.1rem;
}

p {
  font-size: 1rem;
  width: 80%;
  margin-top: 1.5rem;
  text-align: center;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
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
    width: 330px;
  }
}

@media (min-width: 800px) {
  #home {
    height: 100vh;
    width: 60%;
  }
}

@media (min-width: 1500px) {
  #home {
    flex-direction: row;
    width: 70%;
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
    font-size: 1.1rem;
  }

  #profilepic {
    width: 320px;
    padding-bottom: 5rem;
  }
}
</style>
