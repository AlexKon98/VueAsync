<template>
  <section class="posts">
    <div class="container">
      <ul class="posts__list">
        <PostItem v-for="post in allPosts" :key="post.id" :post="post" />
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostItem from './PostItem.vue';

export default {
  components: {
    PostItem,
  },
  computed: {
    ...mapGetters(['allPosts']),
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss">
.posts__list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

@media (max-width: 1240px) {
  .posts__list {
    gap: 30px 20px;
  }
}
</style>
