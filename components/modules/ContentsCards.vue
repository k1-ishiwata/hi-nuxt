<template>
  <div class="contents-cards"
       :class="{
         'top-experience-movie' : isTopMovie,
         'experience-movie' : isMovie
       }"
  >
    <ul>
      <slot name="item" />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isTopMovie: Boolean,
    isMovie: Boolean,
  }
}
</script>

<style scoped>
.contents-cards {
  background: theme('colors.light-gray');
  @apply py-8 px-8;
}

.contents-cards > ul {
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 8px 14px;
  @apply grid w-full h-full;
}

.contents-cards.top-experience-movie > ul {
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-gap: 8px 12px;
  @apply grid;
}

.contents-cards.top-experience-movie > ul > /deep/ li:first-child {
  grid-row-start: 1;
  grid-row-end: span 1;
  grid-column-start: 1;
  grid-column-end: span 4;
  @apply grid relative;
}

.contents-cards.top-experience-movie > ul > /deep/ li:first-child > a {
  width: 430px;
  height: 242px;
}
</style>
