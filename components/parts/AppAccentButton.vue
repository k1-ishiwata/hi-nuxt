<template>
  <a class="app-accent-button"
     :class="{
              icon : isIcon,
              rounded : isRounded,
              head: isHead,
              active: isActive,
             }"
     :href="link"
  >
    <span v-if="isIcon"
          class="circle-icon"
    >
      <slot name="icon" />
    </span>
    <span>
      {{ name }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    name: String,
    isHead: Boolean,
    isRounded: Boolean,
    isIcon: Boolean,
    isActive: Boolean,
  },
}
</script>

<style scoped>
.app-accent-button {
  width: 164px;
  height: 35px;
  z-index: 10;
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh14');
  color: theme('colors.accent');
  border-color: theme('colors.accent');
  border-radius: theme('borderRadius.pills');
  @apply relative flex items-center justify-center px-16 border border-solid bg-white cursor-pointer duration-100;
}

.app-accent-button:hover {
  background-color: theme('colors.accent');
  @apply text-white no-underline;
}

.app-accent-button.active {
  background-color: theme('colors.accent');
  @apply text-white no-underline cursor-default;
}

.app-accent-button .circle-icon {
  width: 35px;
  top: -1px;
  left: -1px;
  border-color: theme('colors.accent');
  background-color: theme('colors.accent');
  @apply absolute flex items-center h-full justify-center border-1 border-solid rounded-full duration-100;
}

.app-accent-button .circle-icon .icon {
  @apply text-white;
}

.app-accent-button.rounded {
  width: auto;
  border-radius: theme('borderRadius.rounded');
}

.app-accent-button.head {
  width: 116px;
  height: 30px;
  @apply pl-36;
}

.app-accent-button.head .circle-icon {
  width: 30px;
  height: 30px;
}

.app-accent-button.head:hover .circle-icon {
  @apply bg-white;
}

.app-accent-button.head:hover .circle-icon .icon {
  color: theme('colors.accent');
}
</style>
