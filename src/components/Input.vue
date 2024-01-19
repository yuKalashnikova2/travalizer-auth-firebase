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

    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },

    placeholder: {
      type: String,
      default: 'Enter data...',
    },
  },
  emits: ['update:email', 'update:password'],
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
      :value="[email || password]"
      @input="
        $emit('update:email', $event.target.value),
          $emit('update:password', $event.target.value)
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
}
.input {
  border-radius: 8px;
  border: 1px solid var(--green-light);
  background: #fff;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  &-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid var(--green-light);
    border-radius: 3px;
    &__checked {
      background: url('/checkbox-checked.svg');
      background-size: 100%;
    }
  }
}
</style>
