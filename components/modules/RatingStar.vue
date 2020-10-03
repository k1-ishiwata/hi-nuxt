<template>
  <p class="rating-star">
   <IconStar />
   <IconStar />
   <IconStarDisabled />
  </p>
</template>

<script>
import IconStar from '~/components/icons/IconStar.vue'
import IconStarHalf from '~/components/icons/IconStarHalf.vue'
import IconStarDisabled from '~/components/icons/IconStarDisabled.vue'

export default {
  components: {
    IconStar,
    IconStarHalf,
    IconStarDisabled,
  },
  
}
</script>

<style scoped>
.top-banner {
  @apply flex items-center justify-center pb-20;
}

.top-banner /deep/ div {
  width: 540px;
  height: 135px;
}

.top-banner /deep/ div + div {
  @apply ml-20;
}
</style>
