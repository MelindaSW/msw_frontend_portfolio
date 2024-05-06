<script lang="ts">
export default {
  data: () => ({
    displayBMenu: false,
  }),
  methods: {
    toggleBMenu() {
      this.displayBMenu = !this.displayBMenu
    },
  },
}
</script>

<template>
  <nav>
    <img
      class="burger_menu"
      @click="toggleBMenu"
      src="./icons/burger_menu_icon.png"
      alt=""
    />
    <ul v-if="displayBMenu" class="burger-links">
      <li>
        <a class="b-link" @click="toggleBMenu" href="#home">Home</a>
      </li>
      <li>
        <a class="b-link" @click="toggleBMenu" href="#about">About</a>
      </li>
      <li>
        <a class="b-link" @click="toggleBMenu" href="#projects">Projects</a>
      </li>
      <li>
        <a class="b-link" @click="toggleBMenu" href="#contact">Contact</a>
      </li>
    </ul>

    <div class="nav-links">
      <a class="nav-link-home" href="#home">
        <img src="./icons/home_icon.png" alt="home" />
      </a>
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#projects">Projects</a>
      <a class="nav-link" href="#contact">Contact</a>
    </div>

    <ul class="icon-links">
      <li>
        <a href="mailto:sandstrommelinda@gmail.com"
          ><img src="./icons/email_icon.png" alt="email"
        /></a>
      </li>
      <li>
        <a href="https://github.com/MelindaSW" target="_blank"
          ><img src="./icons/github_icon.png" alt="gihub"
        /></a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
          target="_blank"
          ><img src="./icons/linkedin_icon.png" alt="linkedin"
        /></a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/melindas_crosshatching/"
          target="_blank"
          ><img src="./icons/instagram_icon.png" alt="instagram"
        /></a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 110px;
  min-height: 100%;
  background: #ffffff;
  color: black;
  font-size: 16px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  border-right: 1.8px solid black;
}

.burger_menu,
.burger-links {
  display: none;
}

ul {
  list-style: none;
  padding: 0px;
}

.nav-link-home {
  align-self: center;
  margin-bottom: 40px;
  margin-top: 20px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
  align-items: center;
}

a.nav-link {
  color: black;
  /* transform: rotate(-90deg); */
  text-transform: uppercase;
  margin-bottom: 55px;
  margin-top: 10px;
  text-decoration: none;
  transition: color 0.5s;
}

img {
  width: 30px;
  height: 30px;
  margin-top: 19px;
  align-self: flex-end;
  transition: transform 0.5s;
}

img:hover {
  transform: scale(1.2, 1.2);
}

a:hover {
  color: #6380ca;
}

.icon-links {
  margin-bottom: 78px;
}

@media (max-width: 560px) {
  .burger_menu {
    display: block;
    margin: auto;
    cursor: pointer;
  }

  .burger-links {
    border: 2px solid black;
    display: block;
    position: fixed;
    z-index: 100;
    left: 25px;
    top: 46px;
    background-color: #ffffff;
    padding: 16px;
    text-align: center;
  }

  .b-link {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    margin: 20px;
  }

  nav {
    position: sticky;
    top: 0;
    left: 0;
    flex-direction: row;
    height: 55px;
    width: 100%;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1.8px solid black;
  }

  .nav-link-home {
    display: none;
  }

  .nav-links {
    display: none;
  }

  .icon-links {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    line-height: 0px;
  }

  .icon-links > li {
    display: inline;
    margin: 0px;
  }

  img {
    margin: 0px 0px 0px 20px;
  }

  a {
    margin: 0px;
  }
}
</style>
