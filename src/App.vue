<script setup></script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="wrapper__description">
        <div>
          <div class="logo">
            <img class="logo__img" src="/logo.svg" alt="logo" />
            <h1 class="logo__title">Travalizer</h1>
          </div>

          <span class="text"
            >Artificial Intelligence giving you travel recommendations</span
          >
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
  margin: 30px 25px;
  max-width: 1296px;
}
.wrapper {
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 72px 80px -48px #223a28;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  &__description {
    padding: 40px 64px 66px 64px;
  }
  &__image {
    background-color: var(--beige);
    & img {
      padding: 188px 123px;
      width: 100%;
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  &__img {
    width: 48px;
    height: 48px;
  }
  &__title {
    color: var(--green-main);
    font-size: 32px;
    font-weight: 600;
    line-height: 100%;
  }
}
.text {
  display: block;
  padding-top: 56px;
  color: var(--green-main);
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
}
</style>
