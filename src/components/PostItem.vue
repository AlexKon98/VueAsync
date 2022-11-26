<template>
  <li class="posts__item">
    <h3>{{ post.title }}</h3>
    <div>{{ post.body }}</div>
  </li>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style lang="scss">
.posts__item {
  width: calc(25% - 22.5px);
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #42b983;
  background-color: #e7ecf3;
  display: flex;
  flex-direction: column;
  & h3 {
    color: #42b983;
    font-weight: 600;
    margin-bottom: 15px;
  }
  & div {
    margin-top: auto;
  }
}

@media (max-width: 1640px) {
  .posts__item {
    width: calc((100% / 3) - 20px);
  }
}

@media (max-width: 1240px) {
  .posts__item {
    width: calc(50% - 10px);
  }
}

@media(max-width: 767px) {
  .posts__item {
    width: 100%;
  }
}
</style>
