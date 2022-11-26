<template>
  <li class="user__item">
    <h3>
      {{ user.name }}
    </h3>
    <a :href="'mailto:' + user.email">{{ user.email }}</a>
    <a :href="'tel:' + user.phone">{{ user.phone }}</a>
    <div class="user__address">
      <div>{{ user.address.city }}, {{ user.address.street }} street, {{ user.address.suite }},</div><br> <span>{{ user.address.zipcode }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ['user'],
};
</script>

<style lang="scss">
  .user__item {
    width: calc(25% - 22.5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    border-radius: 4px;
    background-color: #e7ecf3;
    & h3 {
      margin-bottom: 10px;
    }
    & a {
      color: #42b983;
      text-decoration: none;
      display: block;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .user__address {
    text-align: center;
    & span {
      padding-top: 5px;
    }
  }

  @media (max-width: 1640px) {
    .user__item {
      width: calc((100% / 3) - 20px);
    }
  }

  @media (max-width: 1240px) {
    .user__item {
      width: calc(50% - 10px);
    }
  }

  @media(max-width: 767px) {
    .user__item {
      width: 100%;
    }
  }
</style>
