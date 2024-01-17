<template>
    <div class="loader"></div>
    <h2 class="loader__text">Please, waiting...</h2>
  </template>
  
  <style lang="scss" scoped>
  .loader {
    width: 150px;
    height: 150px;
    border: 20px solid var(--green-light);
    border-radius: 50%;
    border-left-color: var(--green-second);
    transition: 3s;
    animation: loader 1.5s linear infinite;
  
    @keyframes loader {
      100% {
        rotate: 360deg;
      }
    }

    &__text {
        color: var(--green-main)
    }
  }
  </style>