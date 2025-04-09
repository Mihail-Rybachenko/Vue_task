<template>
  <div class="employee-card-68">
    <p><strong>Имя:</strong> {{ name }}</p>
    <p><strong>Фамилия:</strong> {{ surn }}</p>
    <p><strong>Возраст:</strong> {{ age }}</p>
    <button class="button-68" @click="$emit('remove', id)">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    surn: String,
    age: Number
  },
  emits: ['remove']
}
</script>

<style>
.employee-card-68 {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color:rgb(238, 238, 238);
}

.button-68 {
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button-68:hover {
  background-color: darkred;
}
</style>
