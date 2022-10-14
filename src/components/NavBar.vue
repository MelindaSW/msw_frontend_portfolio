<template lang="">
    <nav>
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
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        /* align-items:center; */
        justify-content: space-evenly;
    }

     a.nav-link {
        transform: rotate(-90deg);
        text-transform: uppercase;
        margin-bottom: 55px;
        margin-top: 10px;
        text-decoration: none;
    }   

    img {
        width: 30px;
        height: 30px;
        margin-top: 19px;
        align-self: flex-end;
    }

    a:hover {
    }

    .icon-links {
        margin-bottom: 78px;
    }
</style>