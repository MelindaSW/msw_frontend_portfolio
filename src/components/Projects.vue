<template>
    <div id="projectscontainer">
        <h1>Projects</h1>
        <div class="projcard">
            {{pr[0].title}}
        </div>
    </div>
</template>

<script lang="ts">
    import {DevProjects as pr} from "../assets/projects";
    export default {
        data: () => ({
            pr
        }),
        methods: {
        }
    }
</script>

<style scoped>
    #projectscontainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>