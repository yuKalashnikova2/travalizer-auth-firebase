<template>
  <div class="loader">
    <div class="loader__elem"></div>
    <h2 class="loader__text">Please, waiting...</h2>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  &__elem {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    background: conic-gradient(var(--green-light), transparent);
    animation: loader 2s linear infinite;
  }

  @keyframes loader {
    100% {
      rotate: 360deg;
    }
  }

  &__text {
    color: var(--green-light);
    font-size: 16px;
    font-family: 300;
    padding-top: 10px;
  }
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}
</style>
