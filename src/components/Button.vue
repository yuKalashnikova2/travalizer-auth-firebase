<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Name Btn',
    },
    lightColor: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    styleBtnColor(lightColor) {
        return lightColor ? 'btn__light' : ''
    }
  }
}
</script>
<template>
  <button :class="['btn', styleBtnColor]">{{ label }}</button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 16px;
  border-radius: 8px;
  background: var(--green-second);
  border: 1px solid var(--green-second);
  color: var(--white);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
    width: 100%;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 20px;
  }
  &:hover {
    border: 1px solid var(--green-second);
    background: var(--white);
    color: var(--green-second);
  }
  &__light {
    border: 1px solid var(--green-second);
    background: var(--white);
    color: var(--green-second);
    &:hover {
      background: var(--green-second);
      border: 1px solid var(--green-second);
      color: var(--white);
    }
  }
}
</style>
