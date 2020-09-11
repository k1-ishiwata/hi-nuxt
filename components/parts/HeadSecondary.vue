<template>
  <div class="head-secondary">
    <div class="secondary-wrapper">
      <slot name="icon" />
      <h2 class="secondary-title" >
        <slot name="title" />
      </h2>
      <div class="secondary-item" v-if="isButton">
        <slot name="item" />
      </div>
    </div>
    <slot name="lead"/>
  </div>
</template>

<script>
export default {
  props: {
    isButton: Boolean,
  },
}
</script>

<style scoped>
.head-secondary  {
  position: relative;
}

.head-secondary .secondary-wrapper {
    display: flex;
    align-items: center;
    font-weight: bold;
     padding: 8px 8px;
    border: 4px solid #FD306A;
font-size: 24px;
line-height: 1;
position: relative;
background: #FD306A;
}

.head-secondary > .secondary-wrapper > .secondary-title {
    color: #fff;
}

.head-secondary > .secondary-wrapper::after {
      content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 45px 44px 0;
    border-color: transparent #ffffff transparent transparent;
}

.head-secondary /deep/ .icon {
      flex-shrink: 0;
  margin-right: 4px;
  color: #fff;
}

.head-secondary /deep/ p {
  font-size: 16px;
  line-height: 1;
  padding: 6px 12px;
  background: #333;
  display: flex;
  align-items: center;
    color: #fff;
}

.head-secondary .secondary-item {
      position: absolute;
    /* top: 50%; */
    right: 0;
    /* transform: translateY(-50%); */
    z-index: 10;
    padding: 4px 0;
    
}

.head-secondary .secondary-item {
      content: "";
      /* width: 100px; */
      height: 44px;
      background: #fff;
      position: absolute;
    top: -4px;
    right: -4px;
    /* transform: translateY(-50%); */
    /* z-index: 1; */
    
}

.head-secondary .secondary-item::before {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    border-style: solid;
    border-width: 0 45px 44px 0;
    border-color: transparent #ffffff transparent transparent;
}

.head-secondary .secondary-item::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    /* padding: 2px; */
    background: #fff;
    display: block;
}

</style>
