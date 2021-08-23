<template>
  <div>
    <apex-charts
      v-for="(item, index) in options.datasets"
      :key="item.id"
      :type="item.type"
      :series="series[index].data"
      :options="item"
    />
  </div>
</template>

<script>
import apexCharts from 'vue-apexcharts';

export default {
  components: {
    apexCharts,
  },
  props: {
    type: {
      type: String,
      require: true,
      default: '',
    },
    series: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    options: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  mounted() {
    console.log(this.options);
    console.log(this.series);
  },
};
</script>

<style lang="scss" scoped></style>
