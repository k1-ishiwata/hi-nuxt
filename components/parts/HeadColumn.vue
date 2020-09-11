<template>
  <div class="head-column">
    <div class="column-wrapper">
      <slot name="icon" />
      <h2 :class="[ 'column-title', { 'fz-24': isLarge }]">
        <slot name="title" />
      </h2>
    </div>
    <slot name="lead"/>
  </div>
</template>

<script>
export default {
  props: {
    isLarge: Boolean,
  },
}
</script>

<style scoped>
.head-column {
  /* position: relative; */
}

.head-column .column-wrapper {
    display: flex;
    align-items: center;
    font-weight: bold;
     padding: 8px 12px;
    /* border: 4px solid #FD306A; */

position: relative;
background: #FD306A;
}

.head-column .column-title {
    color: #fff;
    font-size: 16px;
    line-height: 1.2;
}

.head-column .column-title.fz-24 {
    font-size: 24px;
}

.head-column > .column-wrapper::before {
      content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 0;
    border-color: transparent #ffffff transparent transparent;
}

.head-column /deep/ .icon {
      flex-shrink: 0;
  margin-right: 4px;
  color: #fff;
}

.head-column /deep/ p {
  font-size: 12px;
  line-height: 1;
  padding: 8px 12px;
  background: #333;
  display: flex;
  align-items: center;
    color: #fff;
}
</style>
