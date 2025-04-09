<template>
  <div class="task63-card">
    <h3 class="task63-card__name">{{ name }}</h3>
    <p class="task63-card__salary">Зарплата: {{ salary }}</p>
    <p class="task63-card__age">Возраст: {{ age }}</p>
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
      required: true
    }
  }
}
</script>

<style>
.task63-card {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
  max-width: 300px;
  background: #fdfdfd;
}
.task63-card__name {
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
}
.task63-card__salary,
.task63-card__age {
  margin: 5px 0 0;
  font-size: 0.9em;
}
</style>
