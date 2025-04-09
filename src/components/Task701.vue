<template>
  <div class="form-container-70">
    <h3>Добавить сотрудника</h3>
    <input class="input-70" v-model="newName" placeholder="Имя" />
    <input class="input-70" v-model="newSurn" placeholder="Фамилия" />
    <input class="input-70" v-model="newAge" type="number" placeholder="Возраст" />
    <button class="button-70" @click="save">Добавить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
      newSurn: '',
      newAge: ''
    };
  },
  emits: ['add'],
  methods: {
    save() {
      if (this.newName && this.newSurn && this.newAge) {
        this.$emit('add', this.newName, this.newSurn, Number(this.newAge));
        this.newName = '';
        this.newSurn = '';
        this.newAge = '';
      }
    }
  }
};
</script>

<style>
.form-container-70 {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.input-70 {
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-70 {
  padding: 5px 10px;
  background-color:rgb(52, 206, 57);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button-70:hover {
  background-color: #45a049;
}
</style>
