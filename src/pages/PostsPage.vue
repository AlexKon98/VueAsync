<template>
  <div id="app">
    <MainHeader />
    <main>
      <MainTitle :title="title"/>
      <PostList />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainTitle from '@/components/MainTitle.vue';
import PostList from '@/components/PostList.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  data() {
    return {
      title: 'Posts list',
    };
  },
  components: {
    MainHeader,
    MainTitle,
    PostList,
    MainFooter,
  },
};
</script>
