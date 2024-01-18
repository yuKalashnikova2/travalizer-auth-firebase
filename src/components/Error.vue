<script>
export default {
  props: {
    er: {
      type: String,
      required: 'Error auth',
    },
  },
}
</script>
<template>
  <div class="error">
    <span>Error: {{ er }}. Please, try again</span>
  </div>
</template>

<style lang="scss" scoped>
.error {
  background-color: var(--beige);
  color: var(--green-main);
  padding: 20px;
  margin: 15px;
  font-weight: 500;
  font-size: 25px;
  border-radius: 8px;
}
</style>
