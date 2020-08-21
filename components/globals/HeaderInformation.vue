<template>
  <div class="header-information">
    <slot name="shop" />店舗
    <slot name="girl" />女の子
    <slot name="reviews" />口コミ
  </div>
</template>

<script>
export default {
  props: {
    shop: String,
    girl: String,
    reviews: String,
  },
}
</script>

<style scoped>
.header-information {
  width: 54.43%;
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh18');
  color: theme('colors.base');
  @apply flex items-baseline justify-end;
}

.header-information /deep/ span {
  font-size: theme('fontSize.fz18');
  color: theme('colors.accent');
  @apply px-2 font-bold;
}
</style>
