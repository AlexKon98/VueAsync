<template>
  <div id="app">
    <MainHeader />
    <main>
      <MainTitle :title="title" />
      <SalesList />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainTitle from '@/components/MainTitle.vue';
import SalesList from '@/components/SalesList.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  data() {
    return {
      title: 'Sales list',
    };
  },
  components: {
    MainHeader,
    MainTitle,
    SalesList,
    MainFooter,
  },
};
</script>
