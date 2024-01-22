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

        <div>
          <router-view></router-view>
        </div>
      </div>

      <div class="wrapper__image">
        <img src="/travel.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 30px auto;
  max-width: 1296px;
  @media (max-width: 992px) {
    flex-direction: column;
    margin: 0 auto;
  }
}
.wrapper {
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
   
    @media (max-width: 992px) {
      order: 2;
      padding: 40px 30px;
    }
     @media (max-width: 500px) {
      padding: 20px 15px;
    }

  }
  &__image {
    background-color: var(--beige);
    @media (max-width: 767px) {
      order: 1;
    }
    & img {
      padding: 188px 123px;
      width: 100%;
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
