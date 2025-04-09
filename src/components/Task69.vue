<template>
  <div class="task-card-69">
    <template v-if="!isEdit69">
      <p><strong>Имя:</strong> {{ name }}</p>
      <p><strong>Фамилия:</strong> {{ surn }}</p>
      <p><strong>Возраст:</strong> {{ age }}</p>
      <button class="button-69" @click="edit">Редактировать</button>
    </template>
    <template v-else>
      <input class="input-69" v-model="newName" />
      <input class="input-69" v-model="newSurn" />
      <input class="input-69" v-model="newAge" type="number" />
      <button class="button-69" @click="save">Сохранить</button>
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
  emits: ['change'],
  data() {
    return {
      isEdit69: false,
      newName: this.name,
      newSurn: this.surn,
      newAge: this.age
    };
  },
  methods: {
    edit() {
      this.isEdit69 = true;
    },
    save() {
      this.isEdit69 = false;
      this.$emit('change', this.id, this.newName, this.newSurn, this.newAge);
    }
  }
};
</script>

<style>
.task-card-69 {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.input-69 {
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-69 {
  padding: 5px 10px;
  background-color:rgb(34, 201, 39);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button-69:hover {
  background-color:rgb(35, 173, 42);
}
</style>
