<script lang="ts">
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <div id="contact">
    <h1>Contact</h1>
    <div>
      <a href="mailto:sandstrommelinda@gmail.com"
        ><img src="./icons/email_icon.png" alt="email"
      /></a>
      <a href="https://github.com/MelindaSW" target="_blank"
        ><img src="./icons/github_icon.png" alt="gihub"
      /></a>
      <a
        href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
        target="_blank"
        ><img src="./icons/linkedin_icon.png" alt="linkedin"
      /></a>
      <a
        href="https://www.instagram.com/melindas_crosshatching/"
        target="_blank"
        ><img src="./icons/instagram_icon.png" alt="instagram"
      /></a>
    </div>
    <a id="homescrollicon" href="#home">
      <img
        class="scrollicon"
        src="./icons/upscrollarrow_icon.png"
        alt="scroll up"
      />
    </a>
  </div>
</template>

<style scoped>
#contact {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2.3rem;
  padding-bottom: 2.7rem;
  margin: auto;
  margin-bottom: 5rem;
  width: 80%;
  position: relative;
}

#homescrollicon {
  position: absolute;
  right: 10px;
  bottom: 2px;
}

.info {
  font-size: 1.2em;
  width: 80%;
  margin-top: 1rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  background-color: #0e062e;
  border-radius: 4px;
  padding-top: 1rem;
  padding-bottom: 2rem;
  width: 60%;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.form-group {
  padding-top: 1rem;
  width: 50%;
}

input {
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  margin: auto;
  color: #455889;
  padding: 10px;
  width: 100%;
}

#message {
  font-family: sans-serif;
  font-size: 0.8rem;
  margin: auto;
  color: #455889;
  border-radius: 5px;
  border: none;
  padding: 15px;
  resize: none;
  width: 100%;
}

button {
  background-color: #455889;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 7px 15px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #455889;
  box-shadow: 0 0 10px #719ece;
}

a {
  text-decoration: none;
  color: #6380ca92;
  font-weight: bold;
}

img {
  height: 40px;
  margin: 15px;
  transition: transform 0.5s;
}

img:hover {
  transform: scale(1.2, 1.2);
}

@media (max-width: 1500px) {
  #contact {
    width: 90%;
  }
}

@media (max-width: 800px) {
  .form {
    width: 95%;
  }
  .form-group {
    width: 85%;
  }
}
</style>
