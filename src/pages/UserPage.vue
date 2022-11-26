<template>
  <div id="app">
    <MainHeader />
    <main>
      <MainTitle :title="title"/>
      <UserList />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainTitle from '@/components/MainTitle.vue';
import UserList from '@/components/UserList.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  data() {
    return {
      title: 'Users list',
    };
  },
  components: {
    MainHeader,
    MainTitle,
    UserList,
    MainFooter,
  },
};
</script>
