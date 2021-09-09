<template>
  <div class="vuetiful-board">
    <grid-layout
      :layout.sync="gridInfos"
      :col-num="colNum"
      :row-height="rowHeight"
      :is-draggable="layoutEditable"
      :is-resizable="layoutEditable"
      @layout-ready="layoutReady = true"
    >
      <grid-item
        v-for="(item, index) in gridInfos"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :static="item.static"
      >
        <apex-charts
          v-if="layoutReady"
          :key="chartInfos[index].id"
          :type="chartInfos[index].options.type"
          :series="chartInfos[index].series"
          :options="chartInfos[index].options"
          width="100%"
          height="100%"
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
    darkMode: {
      type: Boolean,
      default: false,
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
                theme: {
                  mode: 'light',
                  monochrome: {
                    enabled: false,
                    shadeTo: 'light',
                    shadeIntensity: 0.9,
                  },
                },
              },
            },
            gridInfo: {
              id: this.$uuid.v4(),
              x: this.colNum,
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
      gridInfos: [],
      palette,
      layoutReady: false,
      isFirstMount: true,
      darkModeColorOptions: {
        background: 'transparent',
        foreColor: '#fff',
      },
      lightModeColorOptions: {
        background: '#fff',
        foreColor: '#232323',
      },
      previousThemeColors: [],
    };
  },
  computed: {
    chartInfos: function() {
      if (!this.layoutReady) return [];

      document.documentElement.dataset.theme = this.isDarkMode();

      if (this.theme.startsWith('#')) {
        const monochromeTheme = {
          mode: this.isDarkMode(),
          monochrome: {
            enabled: this.isMonochromeMode(),
            color: this.theme,
            shadeTo: 'light',
            shadeIntensity: 0.9,
          },
        };

        const chartInfos = this.datasets.map(item => item.chartInfo);
        chartInfos.map(chartInfo => {
          chartInfo.id = this.$uuid.v4();
          chartInfo.options.theme = monochromeTheme;
          chartInfo.options.chart = this.darkMode
            ? { ...chartInfo.options.chart, ...this.darkModeColorOptions }
            : {
                ...this.lightModeColorOptions,
                ...chartInfo.options.chart,
              };

          return chartInfo;
        });

        return chartInfos;
      }

      const chartInfos = this.datasets.map(item => item.chartInfo);
      const selectedTheme = palette.filter(theme => this.theme === theme.name);

      chartInfos.map(chartInfo => {
        chartInfo.id = this.$uuid.v4();
        chartInfo.options.colors = selectedTheme[0].colors;
        chartInfo.options.theme = {
          mode: this.isDarkMode(),
          monochrome: {
            enabled: this.isMonochromeMode(),
            shadeTo: 'light',
            shadeIntensity: 0.9,
          },
        };
        chartInfo.options.chart = this.darkMode
          ? { ...chartInfo.options.chart, ...this.darkModeColorOptions }
          : {
              ...this.lightModeColorOptions,
              ...chartInfo.options.chart,
            };

        return chartInfo;
      });

      return chartInfos;
    },
  },
  watch: {
    datasets(newValue, oldValue) {
      const oldColors = oldValue[0].chartInfo.options.colors;
      this.savePreviousThemeColors(oldColors);
    },
    darkMode() {
      this.darkMode
        ? this.setDarkMode(this.previousThemeColors)
        : this.setLightMode(this.previousThemeColors);
    },
  },
  created() {
    this.validateProps();
    this.bindGridInfos();
  },
  mounted() {
    this.addUniqueId();
  },
  methods: {
    isType(element) {
      return Object.prototype.toString
        .call(element)
        .slice(8, -1)
        .toLowerCase();
    },
    validateProps() {
      for (const data of this.datasets) {
        const { chartInfo, gridInfo } = data || {};
        const { series, options } = chartInfo || {};
        const { chart } = options || {};

        // TODO: 에러 메시지의 에러 항목 안내를 자동화 (i.e. The type of A prop must be B.)
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
            '[vuetiful-board warn] Invalid prop: Please check the type or structure of chartInfo.series prop. The type of prop must be an array.',
          );
        }

        if (
          !(!chart.type || this.isType(chart.type) === 'string') ||
          !(this.isType(gridInfo.i) === 'string')
        ) {
          return console.error(
            '[vuetiful-board warn] Invalid prop: Please check the type or structure of chartInfo.options.chart.type and gridInfo.i prop. The type of prop must be a string.',
          );
        }

        if (
          !(this.isType(gridInfo.x) === 'number') ||
          !(this.isType(gridInfo.y) === 'number') ||
          !(this.isType(gridInfo.w) === 'number') ||
          !(this.isType(gridInfo.h) === 'number')
        ) {
          return console.error(
            '[vuetiful-board warn] Invalid prop: Please check the type or structure of gridInfo.x, gridInfo.y, gridInfo.w, gridInfo.h prop. The type of prop must be a number.',
          );
        }

        if (!(this.isType(gridInfo.static) === 'boolean')) {
          return console.error(
            '[vuetiful-board warn] Invalid prop: Please check the type or structure of gridInfo.static prop. The type of prop must be a boolean.',
          );
        }
      }
    },
    bindGridInfos() {
      this.gridInfos = this.datasets.map(item => item.gridInfo);
    },
    addUniqueId() {
      return this.datasets.forEach(item => {
        item.id = item.id ?? this.$uuid.v4();
        item.chartInfo.id = item.chartInfo.id ?? this.$uuid.v4();
        item.gridInfo.id = item.gridInfo.id ?? this.$uuid.v4();

        return item;
      });
    },
    isDarkMode() {
      return this.darkMode ? 'dark' : 'light';
    },
    isMonochromeMode() {
      return this.theme.startsWith('#') ? true : false;
    },
    savePreviousThemeColors(oldColors) {
      return (this.previousThemeColors = oldColors);
    },
    setDarkMode(oldColors) {
      // TODO: 기존에 존재하는 옵션을 바탕으로 (살린 채로) 테마 관련 옵션을 추가해주어야 하는 로직 수정 필요

      const currentThemeOptions = {
        mode: this.isDarkMode(),
        monochrome: {
          enabled: this.isMonochromeMode(),
          color: this.theme,
          shadeTo: 'light',
          shadeIntensity: 0.9,
        },
      };

      this.datasets.forEach(item => {
        item.chartInfo.options.colors = oldColors;
        item.chartInfo.options.theme = currentThemeOptions;
        item.chartInfo.options.chart = {
          ...item.chartInfo.options.chart,
          ...this.darkModeColorOptions,
        };

        return item;
      });

      return this.addUniqueId();
    },
    setLightMode(oldColors) {
      // TODO: 기존에 존재하는 옵션을 바탕으로 (살린 채로) 테마 관련 옵션을 추가해주어야 하는 로직 수정 필요

      const currentThemeOptions = {
        mode: this.isDarkMode(),
        monochrome: {
          enabled: this.isMonochromeMode(),
          color: this.theme,
          shadeTo: 'light',
          shadeIntensity: 0.9,
        },
      };

      this.datasets.forEach(item => {
        item.chartInfo.options.colors = oldColors;
        item.chartInfo.options.theme = currentThemeOptions;
        item.chartInfo.options.chart = {
          ...item.chartInfo.options.chart,
          ...this.lightModeColorOptions,
        };

        return item;
      });

      return this.addUniqueId();
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/theme-colors';

.vue-grid-item {
  padding: 20px;
  touch-action: none;
  background-color: $color-grid-item-background;

  &:not(.vue-grid-placeholder) {
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 10px;
  }

  @media screen and (max-width: 768px) {
    // 모바일 환경을 고려한 설정
    padding: 5px;
  }
}

.apexcharts-svg {
  border-radius: 13px;
}
</style>
