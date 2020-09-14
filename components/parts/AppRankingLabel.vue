<template>
  <div class="app-ranking-label">
    <div class="ranking-label">
      <span>
        <em><slot name="rank" /></em>位
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
}
</script>

<style scoped>
.app-ranking-label .ranking-label {
  position: relative;
      /* width: 0;
height: 0;
border-style: solid;
border-width: 70px 70px 0 0;
border-color: #8C8C8C transparent transparent transparent; */

}
.app-ranking-label .ranking-label::before {
  content: "";
width: 0;
height: 0;
border-style: solid;
border-width: 70px 70px 0 0;
border-color: #8C8C8C transparent transparent transparent;
position: absolute;
    /* background-color: white; */
    z-index: 100;
}

.app-ranking-label .ranking-label span {
position: absolute;
  top: 0;
  left: 1%;
display: flex;
align-items: baseline;
z-index: 100;
font-weight: bold;

}

em {
  font-size: 30px;
line-height: 43px;
font-style: normal;
}
</style>
