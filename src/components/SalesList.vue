<template>
  <section class="sales">
    <div class="container">
      <ul class="sales__list">
        <SalesItem v-for="item in allItems" :key="item.id" :item="item"/>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SalesItem from './SalesItem.vue';

export default {
  components: {
    SalesItem,
  },
  computed: {
    ...mapGetters(['allItems']),
  },
  methods: {
    ...mapActions(['fetchItems']),
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style lang="scss">
.sales__list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  flex-wrap: wrap;
}

@media (max-width: 1240px) {
  .sales__list {
    gap: 30px 20px;
  }
}
</style>
