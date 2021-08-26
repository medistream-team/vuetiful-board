<template>
  <div>
    <apex-charts
      v-for="item in datasets"
      :key="item.id"
      :type="item.chart.options.type"
      :series="item.chart.series"
      :options="item.chart.options"
    />
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

<style lang="scss" scoped></style>
