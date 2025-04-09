<template>
  <div class="employee-card">
    <h2 class="employee-card__name">{{ name }}</h2>
    <p class="employee-card__salary">{{ formattedSalary }}</p>

    <button
        class="employee-card__btn name-btn"
        @click="emitName"
    >
      Передать имя
    </button>

    <button
        class="employee-card__btn details-btn"
        @click="emitDetails"
    >
      Передать данные
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    salary: { type: Number, required: true }
  },
  emits: ['name-clicked', 'details-clicked'],
  computed: {
    formattedSalary() {
      return this.salary.toLocaleString('ru-RU') + ' ₽'
    }
  },
  methods: {
    emitName() {
      this.$emit('name-clicked', this.name)
    },
    emitDetails() {
      this.$emit('details-clicked', {
        name: this.name,
        salary: this.salary
      })
    }
  }
}
</script>

<style>
.employee-card {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 300px;
}

.employee-card__name {
  color: #2c3e50;
  margin-bottom: 8px;
}

.employee-card__salary {
  color:rgb(39, 145, 174);
  font-weight: 500;
  margin-bottom: 16px;
}

.employee-card__btn {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.name-btn {
  background:rgb(52, 219, 205);
  color: white;
}

.details-btn {
  background:rgb(66, 185, 108);
  color: white;
}

.employee-card__btn:hover {
  opacity: 0.9;
}
</style>