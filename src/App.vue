<script>
import Logo from './components/Logo.vue'
import LogoMobile from './components/LogoMobile.vue'
export default {
  components: {
    Logo,
    LogoMobile,
  },
}
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <LogoMobile />
      <div class="wrapper__description">
        <div>
          <Logo />
        </div>
        <router-view name="a"></router-view>
      </div>
      <router-view name="travalizer"></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
    margin: 0 auto;
  }
}
.wrapper {
  margin: auto;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 72px 80px -48px #223a28;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
    border-radius: 0;
  }
  &__description {
    padding: 40px 64px 66px 64px;

    @media (min-width: 993px) and (max-width: 1300px) {
      padding: 40px 30px;
      min-width: 500px;
    }
    @media (max-width: 992px) {
      order: 2;
      padding: 40px 30px;
    }
    @media (max-width: 500px) {
      padding: 20px 15px;
    }
  }
  &__image {
    width: 100%;
    background-color: var(--beige);
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      order: 1;
    }
    & img {
      width: 100%;
      padding-left: 120px;
      padding-right: 120px;
      @media (min-width: 768px) and (max-width: 1024px) {
        padding: 35px 70px;
      }
      @media (max-width: 767px) {
        padding: 35px 98px 30px 101px;
      }
      @media (max-width: 400px) {
        padding: 10px;
      }
    }
  }
}
</style>
