<template lang="">
  <div id="home">
    <div id="head">
      <img id="profilepic" src="../assets/profilepic-circle.png" />
    </div>
    <div id="presentation">
      <h1>Melinda S-Wagner</h1>
      <h2>Software developer</h2>
      <p>
        Hi and welcome to my portfolio! <br />I am a junior software developer
        consultant with a passion for web development.
      </p>
      <p>
        Here you can find a
        <a href="#projects">selection of projects</a> and
        <a href="#about">more information</a>. If you have any
        questions or want to reach out,
        <a href="#contact">email me</a> and I will answer as soon as
        possible!
      </p>
    </div>
    <a href="#about"
      ><img
        id="scrolldownicon"
        src="./icons/scrollarrowtodown_icon.png"
        alt="scroll down"
    ></a>
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
  color: #6380ca92;
  font-weight: bold;
}

#scrolldownicon {
  background-color: white;
  border-radius: 50%;
  width: 35px;
  cursor: pointer;
  position: sticky;
  margin: 3rem auto;
  padding: 9px;
}

#scrolldownicon:hover {
  border: 2px solid #45588970;
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

  #scrolldownicon {
    width: 50px;
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

  #scrolldownicon {
    position: relative;
  }
}
</style>
