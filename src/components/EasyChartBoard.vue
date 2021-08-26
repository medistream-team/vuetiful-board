<template>
  <div>
    <apex-charts
      v-for="item in datasets"
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
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
