<template>
  <div>
    <div class="container">
      <grid-layout
        :layout.sync="gridInfos"
        :col-num="colNum"
        :row-height="rowHeight"
        :is-draggable="layoutEditable"
        :is-resizable="layoutEditable"
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
            id="chart"
            :type="chartInfos[index].options.type"
            :series="chartInfos[index].series"
            :options="chartInfos[index].options"
          />
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colNum: {
      type: Number,
      required: true,
      default: 12,
    },
    rowHeight: {
      type: Number,
      required: true,
      default: 30,
    },
    layoutEditable: {
      type: Boolean,
      required: true,
      default: true,
    },
    datasets: {
      type: Array,
      required: true,
      default: function() {
        return [
          {
            id: this.$uuid.v4(),
            chartInfo: {
              id: this.$uuid.v4(),
              series: [],
              options: {
                chart: {
                  type: null,
                },
              },
            },
            gridInfo: {
              id: this.$uuid.v4(),
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
#chart {
  margin: 0 auto;
}

.container {
  width: 1280px;
  margin: 0 auto;
}

.vue-grid-layout {
  border-radius: 5px;
  background: #fffbfb;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  width: 600px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 4px 6px -6px;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}
</style>
