<template>
  <div class="reviews-item">
    <time v-if="isPost" :datetime="datetime">
      {{ date }}
      <span v-if="isPost" class="up">UP</span>
    </time>
    <p class="reviews-title">{{ title }}</p>
    <p>{{ reviews }}</p>
    <div class="reviews">
      <div class="rating">
        <!-- <slot name="rating" />
        <span class="point">
          <slot name="rating" />
          {{ rating }}
          
        </span> -->
      <slot name="rating" />
            <span>
           {{ rating }}

          </span>

      </div>
      <span class="reviewer">{{ reviewer }}({{ number }})</span>
    </div>
    <div class="reviews-thumbnail">
      <p>
        <img :src="src" :alt="alt">
      </p>
      <div class="thumbnail-info">
        <p class="thumbnail-title">{{ name }}
          <span v-if="isGirl">({{ age }})</span>
        </p>
        <p v-if="isGirl">{{ shop }}</p>
        <p>
          {{ area }}
          /
          {{ bussines }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datetime: String,
    date: String,
    title: String,
    reviews: String,
    reviewer: String,
    number: String,
    rating: String,
    src: String,
    alt: String,
    name: String,
    age: String,
    shop: String,
    area: String,
    bussines: String,
    isGirl: Boolean,
    isPost: Boolean,
  },
}
</script>

<style scoped>
.reviews-item  {
  color: theme('colors.text-light-gray');
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh14');
  border-bottom-color: theme('colors.border-horizontalrule');
  @apply py-16 px-12 border-b border-solid bg-white;
}

.reviews-item time .up {
  color: theme('colors.accent');
}

.reviews-item time + .reviews-title {
   @apply mt-8
}

.reviews-item .reviews-title {
  color: theme('colors.accent');
  font-size: theme('fontSize.fz16');
  line-height: theme('lineHeight.lh16');
  @apply truncate;
}

.reviews-item .reviews-title + p {
  @apply truncate;
}

.reviews-item .reviews {
  @apply flex items-center justify-between my-12;
}

.reviews-item .reviews .rating {
  @apply flex items-center;
}

.reviews-item .reviews .rating {
  font-size: theme('fontSize.fz24');
  line-height: theme('lineHeight.lh24');
}

.reviews-item .reviews .reviewer {
  color: theme('colors.base');
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh20');
}

.reviews-item .reviews-thumbnail {
  @apply flex items-center;
}

.reviews-item .reviews-thumbnail > p {
  min-width: 60px;
  max-width: 60px;
  @apply inline-block mr-8;
}

.reviews-item .reviews-thumbnail .thumbnail-title {
  color: theme('colors.base');
  font-size: theme('fontSize.fz16');
  line-height: theme('lineHeight.lh16');
}

.reviews-item .reviews-thumbnail .thumbnail-info {
  @apply truncate;
}

.reviews-item .reviews-thumbnail .thumbnail-info p {
  @apply truncate;
}

.reviews-item  p + p {
  @apply mt-8;
}
</style>
