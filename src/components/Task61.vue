<template>
  <div class="employee-profile">
    <h2 class="employee-profile__name">{{ name }}</h2>
    <div class="employee-profile__details">
      <p class="employee-detail">
        <span class="detail-label">Зарплата:</span>
        <span class="detail-value">{{ formattedSalary }} ₽</span>
      </p>
      <p class="employee-detail">
        <span class="detail-label">Возраст:</span>
        <span class="detail-value">{{ age }} лет</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    age: {
      type: Number,
      required: true,
      validator: value => value >= 18
    }
  },
  computed: {
    formattedSalary() {
      return this.salary.toLocaleString('ru-RU')
    }
  }
}
</script>

<style>
.employee-profile {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
}

.employee-profile__name {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.5em;
}

.employee-detail {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 8px;
  background:rgb(248, 250, 249);
  border-radius: 4px;
}

.detail-label {
  color:rgb(127, 140, 141);
  font-weight: 500;
}

.detail-value {
  color:rgb(46, 39, 174);
  font-weight: 600;
}
</style>