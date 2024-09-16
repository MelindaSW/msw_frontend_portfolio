<template lang="">
  <div id="about">
    <h1>About</h1>
    <p>
      After discovering my passion for coding, I decided to leave my career as a
      tailor and pursue a vocational education in Java EE programming. Around
      two years later, I graduated with a broad knowledge of both backend and
      frontend programming. Since then I have worked as a software developer
      consultant, mainly with the technologies listed below.
    </p>
    <h2>Languages</h2>
    <p>JavaScript | TypeScript | Java | SQL</p>
    <h2>Frameworks & Libraries</h2>
    <p>
      React.js | Vue.js | Node.js | Express.js | SpringBoot | Hibernate | JPA |
      JUnit | Mockito | Jest | Cypress
    </p>
    <h2>Databases</h2>
    <p>Azure Cosmos DB | Postgresql | Oracle SQL</p>
    <h2>DevOps & Tools</h2>
    <p>
      GitHub | Docker | Azure DevOps | Maven | VSCode | Intellij | Swagger |
      Postman
    </p>
    <h2>Education</h2>
    <ul>
      <li>Java EE developer - YRGO Gothenburg - 2018-2020</li>
      <li>
        Historical clothing and theatre tailoring - Cutters Academy Gothenburg -
        2010-2012
      </li>
      <li>Women's tailoring - KY Tailoring - 2007-2009</li>
    </ul>
    <h2>Certifications</h2>
    <p>
      <img class="badge" src="..\assets\izo-811-badge.jpg" alt="cert badge" />
    </p>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
#about {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 17px;
  padding-top: 17px;
  max-width: 1400px;
  min-height: 100vh;
}

h1 {
  font-size: 1.5em;
  font-weight: bold;
}

h2 {
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
}

p {
  margin: 1em;
  width: 60%;
  font-size: 1em;
}

ul {
  list-style: none;
  padding-bottom: 1.2em;
}

li {
  margin-top: 16px;
}

.badge {
  width: 17%;
}

/* @media (max-width: 800px) {
  #about {
    width: 100%;
  }
} */

/* @media (max-width: 1000px) {
  #about {
    height: 100%;
  }
  p {
    width: 90%;
  }
  .badge {
    width: 30%;
  }
} */
</style>
