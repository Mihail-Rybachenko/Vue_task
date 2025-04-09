<template>
  <button class="button-67" @click="$emit('custom-event')">
    Нажми меня
  </button>
</template>

<script>
export default {
  emits: ['custom-event']
}
</script>

<style>
.button-67 {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.button-67:hover {
  background-color: #369b73;
}
</style>
