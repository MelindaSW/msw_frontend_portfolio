<script lang="ts">
export default {
  data: () => ({
    displayBMenu: false,
  }),
  methods: {
    toggleBMenu() {
      this.displayBMenu = !this.displayBMenu;
    },
  },
};
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
        <a class="b-link" @click="toggleBMenu" href="#homecontainer">Home</a>
      </li>
      <li>
        <a class="b-link" @click="toggleBMenu" href="#aboutcontainer">About</a>
      </li>
      <li>
        <a class="b-link" @click="toggleBMenu" href="#projectscontainer"
          >Projects</a
        >
      </li>
      <li>
        <a class="b-link" @click="toggleBMenu" href="#contactcontainer"
          >Contact</a
        >
      </li>
    </ul>

    <a class="nav-link-home" href="#homecontainer">
      <img src="./icons/home_icon.png" alt="home" />
    </a>
    <div class="nav-links">
      <a class="nav-link" href="#aboutcontainer">About</a>
      <a class="nav-link" href="#projectscontainer">Projects</a>
      <a class="nav-link" href="#contactcontainer">Contact</a>
    </div>

    <ul class="icon-links">
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
  width: 82px;
  height: 100vh;
  background: #ffffff;
  color: black;
  font-size: 16px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

a.nav-link {
  color: black;
  transform: rotate(-90deg);
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
    box-shadow: 0px 0px 5px #6380ca92;
    border-radius: 50%;
    display: block;
    position: fixed;
    z-index: 100;
    left: 13px;
    top: 70px;
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
    flex-direction: row;
    height: 55px;
    width: 100%;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
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
