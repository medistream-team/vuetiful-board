<template>
  <div>
    <select>
      <option value="">환자 데이터</option>
      <option value="">자동차 데이터</option>
    </select>
    <select>
      <option value="">라이트 테마</option>
      <option value="">다크 테마</option>
    </select>
    <button @click="color = 'red'">change to red</button>
    <easy-chart-board
      :options="{ datasets: [], theme: 'dark', layoutInfo: {} }"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>