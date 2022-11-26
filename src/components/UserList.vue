<template>
  <section class="user">
    <div class="container">
      <ul class="user__list">
        <UserItem v-for="user in allUsers" :key="user.id" :user="user"/>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters(['allUsers']),
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
  created() {
    this.fetchUsers(10);
  },
};
</script>

<style lang="scss">
  .user__list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  @media (max-width: 1240px) {
    .user__list {
      gap: 30px 20px;
    }
  }
</style>
