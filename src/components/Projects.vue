<script lang="ts">
    export default {
        data: () => ({
            projects : [
                {
                    title: "Haiku generator",
                    repo: "https://github.com/MelindaSW/poetry-generator-api",
                    description: "A haiku generator api. Can be run with maven: ./mvnw spring-boot:run. Go to http://localhost:8080/swagger-ui.html#/ and generate poetry via the endpoints",
                    url: "test",
                    tech: ["Java", "Spring Boot", "Maven", "Lombok", "Swagger", "REST"],
                    img: "pg1.png"
                },
                {
                    title: "Poetry Slack",
                    repo: "https://github.com/wasse/slack-poem",
                    description: "This web applicaion was a school group project for the project and entreprenourship course at YRGO. It is using Slacks API and the applications own backend. Based on the content of the selected channel conversation it generates different kinds of poetry and the user can then choose to post it in the desired channel",
                    url: "",
                    tech: ['JavaScript', 'React.js', 'Java EE', 'TomEE (Tomcat)', 'REST', 'Maven', 'Swagger', 'Postgresql', 'Mobx', 'Bulma', 'Sass'],
                    img: "ps2.png"
                },
                // {
                //     title: "",
                //     repo: "",
                //     description: "",
                //     url: "",
                //     tech: [""],
                //     img: ""
                // },
            ]
        }),
        setup() {
            const getImageUrl = (name : string) => {
                    return new URL(`../assets/${name}`, import.meta.url).href
                }
            return { getImageUrl }
            },
        methods: {
        }
    }
</script>

<template>
    <div id="projectscontainer">
        <h1>Projects</h1>
        <div class="projectcard" v-for="(p, i) in projects" :key="i">
            <img :src="getImageUrl(p.img)" :alt="p.title">
            <h3>{{p.title}}</h3>
            <p>{{p.description}}</p>
            <p id="techp">
                <span class="tech" v-for="(t, i) in p.tech" :key="i">{{t}}</span>
            </p>
            <p>
                <a :href="p.repo">REPOSITORY</a> {{  }}
                <a v-if="p.url" :href="p.url">VIEW</a>
            </p>
        </div>
    </div>
</template>

<style scoped>
    #projectscontainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    h3 {
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 1rem;
    }

    .projectcard {
        background-color: white;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
    }

    p {
        margin-top: 1rem;
    }

    img {
        border-radius: 0.5rem;
        width: 100%;
    }

    #techp {
        width: 100%;
    }

    .tech {
        background-color: #DFDFDF;
        border-radius: 3px;
        margin-left: 5px;
        padding-left: 3px;
        padding-right: 3px;
    }

    a {
        background-color: #DFDFDF;
        border-radius: 3px;
        text-decoration: none;
        font-weight: bold;
        color: #455889;
        padding: 3px;
    }

</style>