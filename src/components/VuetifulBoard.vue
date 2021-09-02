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
        :key="item.id"
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
import palette from '../assets/palette.json';

export default {
  props: {
    theme: {
      type: String,
      default: palette[0].name,
    },
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
                colors: palette[0].colors,
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
      palette: {
        type: Array,
        palette,
      },
    };
  },
  methods: {
    isType(element) {
      return Object.prototype.toString
        .call(element)
        .slice(8, -1)
        .toLowerCase();
    },
    bindChartInfos() {
      this.chartInfos = this.datasets.map(item => item.chartInfo);
    },
    validateProps() {
      for (const data of this.datasets) {
        const { chartInfo, gridInfo } = data || {};
        const { series, options } = chartInfo || {};
        const { chart } = options || {};

        if (!(this.isType(data) === 'object')) {
          return console.error(
            '[vuetiful-board warn]: Invalid datasets prop: Please check the type or structure of datasets prop. The type of element in datasets must be an object.',
          );
        }

        if (
          !(this.isType(chartInfo) === 'object') ||
          !(this.isType(options) === 'object') ||
          !(this.isType(chart) === 'object') ||
          !(this.isType(gridInfo) === 'object')
        ) {
          return console.error(
            '[vuetiful-board warn]: Invalid datasets prop: Please check the type or structure of datasets prop. The type of prop, such as chartInfo, chartInfo.options, chartInfo.options.chart, gridInfo, must be an object.',
          );
        }

        if (!(this.isType(series) === 'array')) {
          return console.error(
            '[vuetiful-board warn]: Invalid chartInfo.series prop: Please check the type or structure of chartInfo.series prop. The type of chartInfo.series prop must be an array.',
          );
        }

        if (!(!chart.type || this.isType(chart.type) === 'string')) {
          return console.error(
            '[vuetiful-board warn]: Invalid chartInfo.options.chart.type prop: Please check the type or structure of chartInfo.options.chart.type prop. The type of chartInfo.options.chart.type prop must be a string.',
          );
        }
      }
    },
    addUniqueId() {
      this.datasets.forEach(item => {
        item.id = item.id ?? this.$uuid.v4();
        item.chartInfo.id = item.chartInfo.id ?? this.$uuid.v4();
        item.gridInfo.id = item.gridInfo.id ?? this.$uuid.v4();

        return item;
      });
    },
    setDefaultTheme(datasets) {
      return datasets.forEach(
        item => (item.chartInfo.options.colors = palette[0].colors),
      );
    },
    setTheme(datasets) {
      if (!palette.some(theme => theme.name === this.theme)) {
        return console.error(
          '[vuetiful-board warn] Invalid theme: Please check the theme name.',
        );
      }

      const selectedTheme = palette.filter(theme => this.theme === theme.name);

      return datasets.forEach(
        item => (item.chartInfo.options.colors = selectedTheme[0].colors),
      );
    },
  },
  created() {
    this.validateProps();
    this.gridInfos = this.datasets.map(item => item.gridInfo);
  },
  mounted() {
    this.addUniqueId();

    !this.theme
      ? this.setDefaultTheme(this.datasets)
      : this.setTheme(this.datasets);
  },
};
</script>

<style lang="scss" scoped>
.vue-grid-item {
  touch-action: none;

  &:not(.vue-grid-placeholder) {
    background: #fff;
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 10px;
  }
}
</style>
