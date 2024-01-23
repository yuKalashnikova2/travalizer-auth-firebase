<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      default: 'Name',
    },
    enterText: {
        type: String,
        required: false
    },
    // email: {
    //   type: String,
    //   required: false,
    // },
    // password: {
    //   type: String,
    //   required: false,
    // },

    placeholder: {
      type: String,
      default: 'Enter data...',
    },
  },
  emits: ['update:enterText'],
}
</script>

<template>
  <div class="form-label">
    <label :for="name" class="form-label_green-text"> {{ label }}: </label>
    <input
      class="input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="enterText"
      @input="
        $emit('update:enterText', $event.target.value)
      "
    />
  </div>
</template>

<style lang="scss">
.form-label {
  color: var(--blue-dark);
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &_green-text {
    color: var(--green-main);
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
}
.input {
  border-radius: 8px;
  border: 1px solid var(--green-light);
  background: #fff;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 400px) {
    font-size: 20px;
  }

}
</style>
