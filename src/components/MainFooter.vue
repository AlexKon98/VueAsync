<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <img class="footer__logo" src="../assets/logo.png" alt="">
        <nav class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item">
              <router-link @click="scrollTop" class="footer__link" :to="{name: 'sales'}">Sales</router-link>
            </li>
            <li class="footer__item">
              <router-link @click="scrollTop" class="footer__link" :to="{name: 'posts'}">Posts</router-link>
            </li>
            <li class="footer__item">
              <router-link @click="scrollTop" class="footer__link" :to="{name: 'users'}">Users</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['scrollTop']),
  },
};
</script>

<style lang="scss">
.footer {
  margin-top: 60px;
  background-color: #2c3e50;
  padding: 30px 0;
  border-top: 1px solid #2c3e50;
}
.footer__wrap {
  display: flex;
  align-items: center;
}
.footer__logo {
  display: block;
  width: 50px;
}
.footer__nav {
  margin-left: auto;
}
.footer__list {
  display: flex;
  align-items: center;
  gap: 0 30px;
  & a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
