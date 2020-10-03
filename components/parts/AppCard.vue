<template>
  <figure class="app-card"
          :class="{
            'ranking' : isRanking,
            'top-experience-movie' : isTopMovie,
            'experience-movie' : isMovie,
          }"
  >
    <p class="card-image">
      <lazy-component>
        <slot name="image" />
      </lazy-component>
       <span class="movie-time">
        <slot name="time" />
      </span>
    </p>
    <div class="card-info"
         v-if="isInformation">
      <p class="name"
         :class="{
           'first-place' : isGold,
           'text-accent' : isPprimary
         }"
      >
        <slot name="name" /><span v-if="isGirl">(<slot name="age" />)</span>
      </p>
      <p class="shop"
         :class="{ 'first-place' : isGold }
      ">
        <span>
          <slot name="area" />
        </span>
        <span class="divider">
        /
        </span>
        <span>
          <slot name="business" />
        </span>
      </p>
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    isRanking: Boolean,
    isPprimary: Boolean,
    isGold: Boolean,
    isGirl: Boolean,
    isTopMovie: Boolean,
    isMovie: Boolean,
    isInformation: Boolean,
  },
}
</script>

<style scoped>
.app-card {
  @apply relative flex items-center justify-center w-full;
}

.app-card .card-image {
  @apply relative flex items-center justify-center;
}

.app-card.experience-movie::before {
  content: "▲";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) rotate(90deg);
  width: 51px;
  height: 51px;
  border-radius: 50%;
  color: #FFFFFF;
  text-align: center;
  font-size: 31px;
  /* line-height: 24px; */
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
}

.app-card.experience-movie::after {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 87px;
   height: 69px;
    background-image: url(~assets/images/common/icon-experience-movie.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
}

.app-card.top-experience-movie .divider {
  @apply hidden;
}

.app-card.top-experience-movie .card-info {
  @apply hidden;
}

.app-card.top-experience-movie .card-image .movie-time {
  @apply block;
}

.app-card .card-info {
  background: rgba(0,0,0,0.75);
  @apply absolute bottom-0 inset-x-0 inline-block py-8 px-8 text-white;
}

.app-card.ranking .card-info .name {
  font-size: theme('fontSize.fz16');
  line-height: theme('lineHeight.lh18');
  @apply font-bold truncate;
}

.app-card .card-info .name {
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh20');
  @apply font-bold truncate;
}

.app-card .card-info .shop {
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh12');
  @apply truncate;
}

.app-card .card-info .name.first-place {
  font-size: theme('fontSize.fz24');
  line-height: theme('lineHeight.lh24');
}

.app-card .card-info .name.text-accent {
  color: theme('colors.accent');
}

.app-card .card-info .shop.first-place {
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh20');
}

.app-card .card-image .movie-time {
  bottom: 3%;
  right: 2%;
  opacity: 0.9;
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh12');
  background: theme('colors.base');
  border-radius: theme('borderRadius.rounded-sm');
  @apply hidden absolute py-2 px-4 text-center text-white;
}
</style>
