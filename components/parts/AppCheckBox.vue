<template>
  <p class="app-check-box">
    <input type="checkbox"
           :id="id"
           :name="name"
           :checked="isChecked"
    >
    <label :for="id">
      <slot name="checkbox" />
    </label>
  </p>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    isChecked: Boolean,
  },
}
</script>

<style scoped>
.app-check-box input[type=checkbox] {
  @apply hidden;
}

.app-check-box label {
  @apply relative inline-block py-4 pl-32 pr-2 cursor-pointer;
}

.app-check-box label:hover {
  @apply opacity-70;
}

.app-check-box label::before {
  content: "";
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  top: theme('inset.1/2');
  border-radius: theme('borderRadius.rounded-sm');
  border-color: theme('colors.parts-base');
  @apply absolute left-0 block border border-solid bg-white -translate-y-1/2;
}

.app-check-box label::after {
  content: "";
  left: 3.75px;
  width: 16.5px;
  height: 12.75px;
  transform: translateY(-50%);
  background-image: url(~assets/images/checkbox-check.svg);
  top: theme('inset.1/2');
  @apply block absolute -translate-y-1/2 opacity-0;
}

.app-check-box input[type=checkbox]:checked + label::before {
  background: theme('colors.bg-green');
  border-color: theme('colors.bg-green');
  @apply border border-solid;
}

.app-check-box input[type=checkbox]:checked + label::after {
    @apply opacity-100;
}
</style>
