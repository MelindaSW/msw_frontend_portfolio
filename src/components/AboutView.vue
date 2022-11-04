<template lang="">
  <div id="about">
    <h1>About</h1>
    <p>
      After graduating from a two year long vocational Java EE education at YRGO
      in Gothenburg, I embarked on a journey as a software developer consultant.
      <br />The education included both backend and frontend development, as
      well as two longer internship courses.
    </p>
    <h2>Frontend</h2>
    <p>JavaScript | TypeScript | Node.js | Vue.js | React.js</p>
    <h2>Backend</h2>
    <p>Java | Java EE | Spring Boot | SQL</p>
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
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
#about {
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 2.3rem;
  padding-bottom: 2.7rem;
}

h1 {
  font-size: 2em;
}

h2 {
  text-transform: uppercase;
  margin-top: 1.2rem;
}

p {
  padding: 1.5rem;
}

ul {
  list-style: none;
  padding: 1.2rem;
}

li {
  margin-top: 16px;
}

@media (min-width: 1500px) {
  #about {
    width: 60%;
    padding: 4rem;
    margin: auto;
  }
}
</style>
