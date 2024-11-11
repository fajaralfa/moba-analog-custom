<script setup>

const props = defineProps(['label', 'value'])

</script>

<template>
  <div class="text-field">
    <label>{{ label }}</label>
    <input type="text" readonly :value id="">
  </div>
</template>

<style scoped>
.text-field {
    display: flex;
    width: 250px;
    justify-content: space-between;
}
</style>