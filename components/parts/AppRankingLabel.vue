<template>
  <div class="app-ranking-label">
    <div class="ranking-label"
         :class="{
           'first-place' : isGold,
           'second-place' : isSilver,
           'third-place' : isBronze,
         }"
    >
      <span>
        <em>{{ rank }}</em>位
      </span>
      <p v-if="isNew"
         class="label"
      >
        <img src="@/assets/images/common/new.png" alt="NEW">
      </p>
      <p v-if="isUp"
         class="label"
      >
        <img src="@/assets/images/common/rank-up.png" alt="↑">
      </p>
      <p v-if="isDown"
         class="label"
      >
        <img src="@/assets/images/common/rank-down.png" alt="↓">
      </p>
      <p v-if="isStay"
         class="label"
      >
        <img src="@/assets/images/common/rank-stay.png" alt="←">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    rank: String,
    isGold: Boolean,
    isSilver: Boolean,
    isBronze: Boolean,
    isNew: Boolean,
    isUp: Boolean,
    isDown: Boolean,
    isStay: Boolean,
  },
}
</script>

<style scoped>
.app-ranking-label {
  @apply absolute top-0 left-0;
}

.app-ranking-label .ranking-label {
  width: 70px;
  height: 70px;
  @apply relative;
}

.app-ranking-label .ranking-label::before {
  content: "";
  border-width: 70px 70px 0 0;
  border-color: #8C8C8C transparent transparent transparent;
  @apply absolute top-0 left-0 w-0 h-0 border-solid z-10;
}

.app-ranking-label .ranking-label span {
  top: 3px;
  left: 5px;
  @apply absolute flex items-baseline font-bold z-10;
}

.app-ranking-label .ranking-label em {
  font-size: theme('fontSize.fz30');
  line-height: theme('lineHeight.lh30');
  @apply not-italic;
}

.app-ranking-label .ranking-label .label {
  bottom: 5px;
  left: 8px;
  @apply absolute z-10;
}

.app-ranking-label .ranking-label.first-place {
  width: 120px;
  height: 120px;
  @apply relative;
}

.app-ranking-label .ranking-label.first-place::before {
  content: "";
  border-width: 120px 120px 0 0;
  border-color: #FFCC21 transparent transparent transparent;
}

.app-ranking-label .ranking-label.second-place::before {
  border-color: #C3C0B1 transparent transparent transparent;
}

.app-ranking-label .ranking-label.third-place::before {
  border-color: #B29383 transparent transparent transparent;
}

.app-ranking-label .ranking-label.first-place span {
  top: 15px;
  left: 14px;
  font-size: theme('fontSize.fz24');
  line-height: theme('lineHeight.lh24');
  color: theme('colors.red');
  @apply absolute;
}

.app-ranking-label .ranking-label.first-place .label {
  bottom: 34px;
}

.app-ranking-label .ranking-label.first-place em {
  font-size: theme('fontSize.fz34');
  line-height: theme('lineHeight.lh34');
}
</style>