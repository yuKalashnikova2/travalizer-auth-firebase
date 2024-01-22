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
  @media (max-width: 1024px) {
        padding: 30px 0;
      }
  &__title {
    color: var(--green-main);
    text-align: center;
    @media (max-width: 400px) {
        font-size: 20px;
      }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
}
</style>
