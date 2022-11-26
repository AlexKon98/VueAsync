<template>
  <router-view/>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #fff;
}

ul, ol {
  list-style: none;
}

main {
  margin-bottom: auto;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  width: 100%;
  max-width: 1920px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
