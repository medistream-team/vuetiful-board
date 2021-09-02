<template>
  <div>
    <grid-layout
      :layout.sync="gridInfos"
      :col-num="colNum"
      :row-height="rowHeight"
      :is-draggable="layoutEditable"
      :is-resizable="layoutEditable"
      @layout-ready="bindChartInfos"
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
          v-if="chartInfos[index]"
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
              x: Math.round(this.colNum / 1),
              y: Math.round(this.colNum / 3),
              w: Math.round(this.colNum / 2),
              h: this.colNum,
              i: '',
              static: false,
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
        required: false,
      },
      chartInfos: {
        type: Array,
        required: false,
      },
    };
  },
  methods: {
    validateGridInfos() {
      this.gridInfos.map((gridInfo, index) => {
        if (gridInfo.x === undefined) {
          gridInfo.x = this.colNum;
        }
        if (gridInfo.y === undefined) {
          gridInfo.y = Math.round(index / 3) * 4;
        }
        if (gridInfo.w === undefined) {
          gridInfo.w = this.colNum / 2;
        }
        if (gridInfo.h === undefined) {
          gridInfo.h = this.colNum;
        }
        if (gridInfo.i === undefined) {
          gridInfo.i === '';
        }
        if (gridInfo.static === undefined) {
          gridInfo.static === false;
        }
        return gridInfo;
      });
    },
    bindChartInfos() {
      this.chartInfos = this.datasets.map(item => item.chartInfo);
    },
  },
  mounted() {
    this.gridInfos = this.datasets.map(item => item.gridInfo);
    this.validateGridInfos();
  },
};
</script>

<style lang="scss" scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
  border-radius: 13px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 10px;
}
</style>
