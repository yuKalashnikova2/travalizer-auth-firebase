<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: true,
    },
    labelText: {
      type: String,
      required: false,
    },
    checkboxFogot: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      default: 'Name',
    },
  },
  emits: ['update'],
}
</script>

<template>
  <div class="form-checkbox">
    <label class="form-checkbox__label">
      <div :class="['checkbox', checked ? 'checkbox__checked' : '']">
        <input
          type="checkbox"
          :checked="checked"
          :name="name"
          @input="$emit('update', $event.target.checked)"
        />
      </div>

      <div class="form-checkbox__label-text">{{ labelText }}</div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.form-checkbox {
  display: flex;
  justify-content: space-between;
  &__label {
    display: flex;
    align-items: center;
    gap: 8px;
    &-text {
      color: var(--green-main);
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      @media (max-width: 400px) {
        font-size: 20px;
      }
    }
  }
}
.checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid var(--green-second);
  @media (max-width: 400px) {
    width: 19px;
    height: 19px;
  }
  &__checked {
    background-image: url('/checkbox-checked.svg');
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
  }
}
</style>
