<template>
  <div class="container main-title-wrap">
      <h1>
        {{ title }}
      </h1>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss">
.main-title-wrap {
  position: relative;
  & h1{
    margin: 30px 0;
    border-bottom: 1px solid #2c3e50;
    padding-bottom: 30px;
  }
}
</style>
