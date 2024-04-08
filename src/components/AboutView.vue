<template lang="">
  <div id="about">
    <h1>About</h1>
    <p>
      After discovering my passion for coding and IT, I decided to put my former
      career as a tailor on hiatus. Around two years later, in 2020, I graduated
      from a vocational education which gave me with a broad knowledge of both
      backend and frontend programming. Since then I have worked as a software
      developer consultant.
    </p>
    <h2>Languages</h2>
    <p>JavaScript | TypeScript | Java | SQL</p>
    <h2>Frameworks</h2>
    <p>React.js | Vue.js | Node.js | SpringBoot</p>
    <h2>DevOps</h2>
    <p>GitHub | Docker | Azure DevOps | Maven</p>
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
  padding-top: 2.3rem;
  padding-bottom: 2.7rem;
  width: 80%;
}

h1 {
  font-size: 2em;
}

h2 {
  text-transform: uppercase;
}

p {
  padding: 1.5rem;
}

ul {
  list-style: none;
  padding-bottom: 1.2rem;
}

li {
  margin-top: 16px;
}

.badge {
  width: 150px;
}

@media (max-width: 800px) {
  #about {
    width: 100%;
  }
}

@media (max-width: 1000px) {
  #about {
    height: 100%;
  }
}
</style>
