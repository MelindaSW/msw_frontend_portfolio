<template lang="">
    <nav>
       <div class="nav-links"> 
            <a class="nav-link" href="">Home</a>
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
        align-items:center;
        justify-content: space-between;

    }

    /* .nav-links > li > a{
        margin-bottom: 50px;
        -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    } */

     a.nav-link {
        /* position: relative; */
        /* align-items: center; */
        transform: rotate(-90deg);
        text-transform: uppercase;
        margin-bottom: 50px;
        margin-top: 10px;
        text-decoration: none;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        /* text-orientation:sideways-right;
        vertical-align: top;
        text-align: start; */
    
        /* margin-bottom: 50px;
        -webkit-box-orient: vertical;
    -webkit-box-direction: normal; */
        /* text-orientation:sideways-right; */
        /* -webkit-transform: rotate(-90deg); 
        -moz-transform:    rotate(-90deg); 
        -ms-transform:     rotate(-90deg); 
        -o-transform:      rotate(-90deg); */
    }   

    #problem-child {
        /* margin-bottom: 60px; */
    }

    img {
        width: 30px;
        height: 30px;
        margin-top: 19px;
        align-self: flex-end;
    }

    a:hover {
        /* transform:rotate(190deg); */
    }

    .icon-links {
        margin-bottom: 78px;
    }
</style>