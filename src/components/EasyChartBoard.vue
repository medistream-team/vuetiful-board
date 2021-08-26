<template>
  <div>
    <grid-layout
      :layout.sync="datasets"
      :col-num="4"
      :row-height="50"
      :is-draggable="true"
      :is-resizable="true"
    >
      <grid-item
        v-for="item in datasets"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :static="item.static"
        :key="item.i"
      >
        <apex-charts
          :type="item.chartInfo.options.type"
          :series="item.chartInfo.series"
          :options="item.chartInfo.options"
        />
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
export default {
  props: {
    datasets: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
vue-grid-layout {
  background: lightblue;
  width: 100%;
  height: 100%;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: lightblue;
  border: 1px solid black;
  position: relative;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}
.eventsJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
  height: 100px;
  overflow-y: scroll;
}
</style>
