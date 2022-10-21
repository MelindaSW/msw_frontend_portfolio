<template lang="">
    <div id="aboutcontainer">
        <h1>About</h1>
        <p>
            After graduating from a two year long vocational Java EE education at YRGO in Gothenburg, I embarked on a journey as a software developer consultant. 
            The education included both backend and frontend development, as well as two longer internship courses. 
        </p>
        <h2>Frontend</h2>
        <p>
            JavaScript | TypeScript | Node.js | Vue.js | React.js
        </p>
        <h2>Backend</h2>
        <p>
            Java | Java EE | Spring Boot | SQL
        </p>
        <h2>DevOps</h2>
        <p>
            GitHub | Docker | Azure DevOps | Maven 
        </p>
    </div>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style scoped>
    #aboutcontainer {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    h2 {
        text-transform: uppercase;
    }

    p {
        padding: 2rem;
    }

</style>