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
