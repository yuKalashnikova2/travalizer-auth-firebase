<script>
import Button from '../components/Button.vue'
export default {
  components: {
    Button,
  },
}
</script>

<template>
  <div class="home-page">
    <h1 class="home-page__title">WELCOME to Travalizer!</h1>
    <div class="home-page__buttons">
      <router-link to="/signin">
        <Button label="Signin" />
      </router-link>

      <router-link to="/signup">
        <Button label="Signup" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 100px 30px;
  &__title {
    color: var(--green-main);
    text-align: center;
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
}
</style>
