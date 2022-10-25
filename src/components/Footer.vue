<template>
  <footer>
    <p>
      This portfolio was created by me. Using Vue 3 and Vite. See the source
      code
      <a
        href="https://github.com/MelindaSW/msw_frontend_portfolio"
        target="_blank"
        >here</a
      >.
    </p>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  /* position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.5rem;  */
}

a {
  text-decoration: none;
  color: #6380ca92;
  font-weight: bold;
}
</style>
