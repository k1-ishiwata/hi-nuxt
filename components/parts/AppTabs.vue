<template>
  <div>
    <ul class="www">
      <slot name="item" />
      <!-- <li>
        <a class="tab-item" href="">111</a>
      </li>
      <li>
        <a class="tab-item" href="">222</a>
      </li>
      <li>
        <span class="tab-item item-active">333</span>
      </li>
      <li>
        <a class="tab-item" href="">444</a>
      </li> -->
    </ul>
    <div class="www-d" v-if="isTitle">
      <slot name="title" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTitle: Boolean,
  },
}
</script>

<style scoped>
.www {
  display: flex;
  align-items: baseline;
  position: relative;
}

.www::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
    background: #E81212;
}

.www /deep/ li {
  width: 25%;
}

.www /deep/ li  {
  border-top: 2px solid #E0E0E0;
    border-left: 1px solid #E0E0E0;
  border-right: 1px solid #E0E0E0;
}

.www /deep/ li:first-of-type   {
  border-left: 2px solid #E0E0E0;
}

.www /deep/ li:last-of-type {
  border-right: 2px solid #E0E0E0;
}

.www-d {
  background: #E81212;
  color: #fff;
  font-size: 18px;
line-height: 18px;
text-align: center;
padding: 8px 8px;
}
</style>
