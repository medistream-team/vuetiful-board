<template>
  <div v-if="chartInfos.length">
    <apex-charts
      v-for="item in chartInfos"
      :key="item.id"
      :type="item.options.chart.type"
      :series="item.series"
      :options="item.options"
    />
  </div>
</template>

<script>
export default {
  props: {
    datasets: {
      type: Array,
      require: true,
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
            },
          },
        ];
      },
    },
  },
  data() {
    return {
      chartInfos: {
        type: Array,
      },
      gridInfos: {
        type: Array,
      },
    };
  },
  methods: {
    validateProps() {
      for (const data of this.datasets) {
        const { chartInfo, gridInfo } = data;
        const { series, options } = chartInfo;
        const { chart } = options;

        if (
          !(chartInfo?.constructor.name === 'Object') ||
          !(options?.constructor.name === 'Object') ||
          !(chart?.constructor.name === 'Object') ||
          !(gridInfo?.constructor.name === 'Object') ||
          !(series?.constructor.name === 'Array') ||
          !(!chart.type || chart.type.constructor.name === 'String')
        ) {
          console.error(
            '[EasyChartBoard warn]: Invalid datasets prop: Please check the type or structure of datasets prop.',
          );
        }
      }
    },
    addUniqueId() {
      return this.datasets.map(item => {
        item.id = this.$uuid.v4();
        item.chartInfo.id = this.$uuid.v4();
        item.gridInfo.id = this.$uuid.v4();
        return item;
      });
    },
  },
  created() {
    this.validateProps();
  },
  mounted() {
    const datasets = this.addUniqueId();

    this.chartInfos = datasets.map(item => item.chartInfo);
    this.gridInfos = datasets.map(item => item.gridInfo);
  },
};
</script>

<style lang="scss" scoped></style>
