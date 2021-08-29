<template>
  <div>
    <apex-charts
      v-for="item in computedDatasets"
      :key="item.id"
      :type="item.chartInfo.options.type"
      :series="item.chartInfo.series"
      :options="item.chartInfo.options"
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
              series: [],
              options: {
                chart: {
                  type: null,
                },
              },
            },
            gridInfo: {},
          },
        ];
      },
      validator: datasets => {
        for (const data of datasets) {
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
            return false;
          }
        }
        return true;
      },
    },
  },
  computed: {
    computedDatasets() {
      return this.datasets.map(data => {
        data.id = this.$uuid.v4();
        return data;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
