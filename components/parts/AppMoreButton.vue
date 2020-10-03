<template>
  <a class="app-more-button"
     :href="link"
  >
    <span class="angle-double">
      <IconArrowAngleDouble
        class="icon fill-current"
        width="17"
        height="22"
      />
      <IconArrowAngleDouble
        class="icon fill-current"
        width="17"
        height="22"
      />
    </span>
    <slot name="name" />
    <span class="angle-double rotate">
      <IconArrowAngleDouble
        class="icon fill-current"
        width="17"
        height="22"
      />
      <IconArrowAngleDouble
        class="icon fill-current"
        width="17"
        height="22"
      />
    </span>
  </a>
</template>

<script>
import IconArrowAngleDouble from '~/components/icons/IconArrowAngleDouble.vue'

export default {
  components: {
    IconArrowAngleDouble,
  },
  props: {
    link: String,
  },
}
</script>

<style scoped>
.app-more-button {
  transition: .1s;
  background: theme('colors.base');
  border-top-color: theme('colors.border-red');
  font-size: theme('fontSize.fz20');
  line-height: theme('lineHeight.lh20');
  color: theme('colors.accent');
  @apply flex items-center justify-center py-20 px-20 font-bold border-t-6 border-solid cursor-pointer;
}

.app-more-button:hover {
  /* opacity: 0.8; */
}

.app-more-button .angle-double {
  @apply flex items-center;
}

.app-more-button .angle-double .icon:first-of-type {
  margin-right: -6px;
}

.app-more-button .angle-double .icon:last-of-type {
  @apply mr-16
}

.app-more-button .angle-double.rotate {
  transform: rotate(180deg);
}
</style>
