<template>
  <div>
    <grid-layout
      :layout.sync="gridInfos"
      :col-num="12"
      :row-height="50"
      :is-draggable="true"
      :is-resizable="true"
    >
      <grid-item
        v-for="(item, index) in gridInfos"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :static="item.static"
        :key="item.i"
      >
        <apex-charts
          :type="chartInfos[index].options.type"
          :series="chartInfos[index].series"
          :options="chartInfos[index].options"
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
      required: true,
      default: function() {
        return [
          {
            gridInfo: {
              x: Number,
              y: Number,
              w: Number,
              h: Number,
              i: String,
              static: Boolean,
            },
          },
        ];
      },
    },
  },
  data() {
    return {
      gridInfos: {
        type: Array,
      },
      charInfos: {
        type: Array,
      },
    };
  },
  mounted() {
    this.gridInfos = this.datasets.map(item => item.gridInfo);
    this.chartInfos = this.datasets.map(item => item.chartInfo);
  },
};
</script>

<style lang="scss" scoped>
vue-grid-layout {
  background: white;
  width: 100%;
  height: 100%;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: white;
  border: 0.8px solid gray;
  border-radius: 5px;
  position: relative;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
</style>
