<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <img class="header__logo" src="../assets/logo.png" alt="">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <router-link class="header__link" :to="{name: 'sales'}">Sales</router-link>
            </li>
            <li class="header__item">
              <router-link class="header__link" :to="{name: 'posts'}">Posts</router-link>
            </li>
            <li class="header__item">
              <router-link class="header__link" :to="{name: 'users'}">Users</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header {
  padding: 30px 0;
  border-bottom: 1px solid #2c3e50;
}

.header__wrap {
  display: flex;
  align-items: center;
}

.header__nav {
  margin: 0 auto;
}

.header__list {
  display: flex;
  align-items: center;
  gap: 0 20px;
}

.header__link {
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  text-decoration: none;
  color: #2c3e50;
}

.header__logo {
  display: block;
  width: 50px;
}
</style>
