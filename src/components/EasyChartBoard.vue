<template>
  <div>
    <apex-charts
      v-for="item in datasets"
      :key="item.id"
      :type="item.options.type"
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
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
