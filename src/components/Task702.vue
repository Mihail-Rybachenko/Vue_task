<template>
  <div class="employee-card-702">
    <template v-if="!isEdit">
      <p><strong>Имя:</strong> {{ name }}</p>
      <p><strong>Фамилия:</strong> {{ surn }}</p>
      <p><strong>Возраст:</strong> {{ age }}</p>
      <button class = "button-702" @click="edit">Редактировать</button>
      <button @click="$emit('remove', id)" class="delete-btn-702">Удалить</button>
    </template>
    <template v-else>
      <input v-model="newName" />
      <input v-model="newSurn" />
      <input v-model="newAge" type="number" />
      <button class="button-702" @click="save">Сохранить</button>
    </template>
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
  emits: ['change', 'remove'],
  data() {
    return {
      isEdit: false,
      newName: this.name,
      newSurn: this.surn,
      newAge: this.age
    };
  },
  methods: {
    edit() {
      this.isEdit = true;
    },
    save() {
      this.isEdit = false;
      this.$emit('change', this.id, this.newName, this.newSurn, this.newAge);
    }
  }
};
</script>

<style>
.employee-card-702 {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.button-702 {
  margin-right: 5px;
}

.delete-btn-702 {
  background-color: red;
}

.delete-btn-702:hover {
  background-color: darkred;
}
</style>
