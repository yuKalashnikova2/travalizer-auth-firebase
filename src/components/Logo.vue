<template>
  <div class="logo">
    <img class="logo__img" src="/logo.svg" alt="logo" />
    <h1 class="logo__title">Travalizer</h1>
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 767px) {
    display: none;
  }
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
  &__mobile {
    display: flex;
    gap: 16px;
    background-color: var(--green-main);
    width: 100%;
    @media (min-width: 768px) {
      display: none;
    }
    &-image {
      width: 48px;
      height: 48px;
    }
    &-title {
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      line-height: 100%;
    }
  }
}
.center {
  margin: 32px auto;
  display: flex;
  align-items: center;
}
</style>
