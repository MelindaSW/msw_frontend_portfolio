<template lang="">
    <nav>
        <img class="burger_menu" @click="toggleBMenu" src="./icons/burger_menu_icon.png" alt="">
        <ul v-if="displayBMenu" class="burger-links">
            <li><a class="b-link" @click="toggleBMenu" href="">Home</a></li>
            <li><a class="b-link" @click="toggleBMenu" href="">About</a></li>
            <li><a class="b-link" @click="toggleBMenu" href="">Projects</a></li>
            <li><a class="b-link" @click="toggleBMenu" href="">Contact</a></li>
        </ul>

        <a class="nav-link-home" href=""><img src="./icons/home_icon.png" alt="home"></a>
        <div class="nav-links"> 
            <a class="nav-link" href="">About</a>
            <a class="nav-link" href="">Projects</a>
            <a class="nav-link" href="">Contact</a>
        </div>

        <ul class="icon-links">
            <li><a href="https://github.com/MelindaSW" target="_blank"><img src="./icons/github_icon.png" alt="gihub"></a></li>
            <li><a href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/" target="_blank"><img src="./icons/linkedin_icon.png" alt="linkedin"></a></li>
            <li><a href="https://www.instagram.com/melindas_crosshatching/" target="_blank"><img src="./icons/instagram_icon.png" alt="instagram"></a></li>
        </ul>
    </nav>
</template>

<script lang="ts">
    export default {
        data: () => ({
            displayBMenu: false
        }),
        methods: {
            toggleBMenu () { this.displayBMenu = !this.displayBMenu },
        }
    }
</script>

<style scoped>

    nav {
        width: 82px;
        height: 100vh;
        background: #FFFFFF;
        color: black;
        font-size: 16px;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        align-items: center;
        z-index: 50;
    }

    .burger_menu, .burger-links {
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
        color:black;
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
            border-radius: 50%;
            border: 1px solid black;
            display: block;
            position: absolute;
            z-index: 100;
            left: 13px;
            top: 70px;
            background-color: #FFFFFF;
            padding: 16px;
            text-align: center;
        }

        .b-link {            
            text-decoration: none;
            color: black;
            text-transform: uppercase;
            margin: 20px;
        }

        .burger-links:hover {
            border: 1px solid #6380ca;
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


<!-- Scroll into view example: -->
<!-- <template>
  <div id="app">
    <button @click="scrollToElement">scroll to last</button>
    <p v-for="n of 100" :key="n" :ref="n === 100 ? 'last' : undefined">
      {{ n }}
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    scrollToElement() {
      const [el] = this.$refs.last;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script> -->