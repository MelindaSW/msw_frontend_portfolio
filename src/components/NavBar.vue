<template lang="">
    <nav>
       <div class="nav-links"> 
            <a class="nav-link" href="">Start</a>
            <a class="nav-link" href="">About</a>
            <a class="nav-link" href="">Projects</a>
            <a class="nav-link" href="">Contact</a>
       </div>
        <ul class="icon-links">
            <li><a href="https://github.com/MelindaSW" target="_blank"><img src="./icons/github_icon.png" alt=""></a></li>
            <li><a href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/" target="_blank"><img src="./icons/linkedin_icon.png" alt=""></a></li>
            <li><a href="https://www.instagram.com/melindas_crosshatching/" target="_blank"><img src="./icons/instagram_icon.png" alt=""></a></li>
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

    .nav-links {
        margin-top: 78px;
        display: flex;
        flex-direction: column;
        /* align-items:center; */
        justify-content: space-evenly;
    }

     a.nav-link {
        /* position: relative; */
        /* align-items: center; */
        transform: rotate(-90deg);
        text-transform: uppercase;
        margin-bottom: 55px;
        margin-top: 10px;
        text-decoration: none;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        /* text-orientation:sideways-right;
        vertical-align: top;
        text-align: start; */

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