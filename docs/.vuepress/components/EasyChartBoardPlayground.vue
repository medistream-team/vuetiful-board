<template>
  <div>
    <button class="editBtn" @click="layoutEditable = !layoutEditable">Edit</button>
    <easy-chart-board
      :colNum="12"
      :rowHeight="30"
      :layout-editable="layoutEditable"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      layoutEditable: true,
    }
  },
};
</script>

<style>
.editBtn {
  padding: 7px;
  border: 1px solid white;
  border-radius: 5px;
  background: white;
  cursor: pointer;
}
</style>
