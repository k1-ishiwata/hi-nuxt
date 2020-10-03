<template>
  <ul class="ranking-list">
    <slot name="item" />
  </ul>
</template>

<style scoped>
.ranking-list {
  grid-template-columns: 1fr 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  @apply grid bg-white w-full h-full;
}

.ranking-list /deep/ li {
  @apply relative;
}

.ranking-list /deep/ li:first-child {
  grid-row-start: 1;
  grid-row-end: span 2;
  grid-column-start: 1;
  grid-column-end: span 1
}

.ranking-list /deep/ li:nth-of-type(2) {
  grid-row-start: 1;
  grid-row-end: span 1;
  grid-column-start: 2;
  grid-column-end: span 1
}

.ranking-list /deep/ li:nth-of-type(3) {
  grid-row-start: 1;
  grid-row-end: span 1;
  grid-column-start: 3;
  grid-column-end: span 1;
}

.ranking-list /deep/ li:nth-of-type(4) {
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
}

.ranking-list /deep/ li:last-child {
  grid-column-start: 3;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
}
</style>
