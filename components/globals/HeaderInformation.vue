<template>
  <div class="header-information">
    <span>{{ shop }}</span>店舗
    <span>{{ girl }}</span>女の子
    <span>{{ reviews }}</span>口コミ
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
