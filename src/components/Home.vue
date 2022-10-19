<template lang="">
    <div id="homecontainer">
        <img id="profilepic" src="../assets/profilepic-circle.png"/>
        <h1>Melinda S-Wagner</h1>
        <h2>Software developer</h2>
        <p>
            Hi and welcome to my portfolio!
            I am a junior software developer consultant, working mainly with Java, Javascript and related frameworks.         
        </p>
        <p>
            Here you can find a <a href="">selection of projects</a> and <a href="">more information</a> about me.
            If you have any questions or simply want to get in touch, <a href="">email me</a> and I will answer as soon as possible!
        </p>
        <img id="scrolldownicon" src="./icons/scrollarrowtodown_icon.png" alt="">
    </div>
</template>

<script lang="ts">
export default {
    
}
</script>

<style scoped>
    #homecontainer {
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #profilepic {
        width: 50%;
        margin-top: 2rem
    }

    h1 {
        font-weight: 500;
        font-size: 1.3rem;
        text-transform: uppercase;
        margin-top: 1rem;
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

    /* For wider wiewports: */
    #scrolldownicon {
        width: 30px;
        cursor: pointer;
        position: sticky;
        margin: auto;
        display: none;
    }

</style>