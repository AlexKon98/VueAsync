<template>
  <li class="sales__item">
    <img :src="item.url" :alt="item.title">
    <span>{{ item.title }}</span>
  </li>
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style lang="scss">
.sales__item {
  width: calc(25% - 22.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 100%;
    margin-bottom: 15px;
  }
}

@media (max-width: 1640px) {
  .sales__item {
    width: calc((100% / 3) - 20px);
  }
}

@media (max-width: 1240px) {
  .sales__item {
    width: calc(50% - 10px);
  }
}

@media(max-width: 767px) {
  .sales__item {
    width: 100%;
  }
}
</style>
