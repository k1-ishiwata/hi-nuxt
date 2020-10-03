<template>
  <div class="head-primary">
    <h1>
      <slot name="image" />
      <span class="title" >
        <slot name="title" />
      </span>
      <slot name="lead" />
    </h1>
  </div>
</template>

<style scoped>
.head-primary h1 {
  @apply flex flex-wrap;
}

.head-primary .title {
  width: 290px;
  color: #3b3b3b;
  font-size: theme('fontSize.fz20');
  line-height: theme('lineHeight.lh25');
  @apply flex items-end font-bold
}

.head-primary /deep/ .lead {]
  color: #888787;
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh16');
  @apply w-full pt-8;
}

.head-primary /deep/ .image {
  @apply mr-20;
}
</style>
