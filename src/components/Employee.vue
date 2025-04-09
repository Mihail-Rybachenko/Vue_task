<template>
  <div>
    <template v-if="name59">
      <div class="app-employee-card">
        <h2 class="app-employee-card__name">{{ name59 }}</h2>
        <h3 class="app-employee-card__surname">{{ surn59 }}</h3>
        <div class="app-employee-card__age-container">
          <span class="app-employee-card__age-label">Возраст:</span>
          <span class="app-employee-card__age-value">{{ age59 }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    //Задание 62
    name59: {
      type: String,
      default: '',
      required: true
    },
    surn59: {
      type: String,
      default: '',
      required: true
    },
    age59: {
      type: Number,
      default: null,
      required: true
    }
  },
  data() {
    return {
      firstName: 'Иван',
      lastName: 'Петров',
      position: 'Frontend разработчик'
    }
  },
  computed: {
  }
}
</script>

<style>
.app-employee-card {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 10px;
  max-width: 300px;
  background: #f9f9f9;
}

.app-employee-card__title {
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 1.2em;
  font-weight: 600;
}

.app-employee-card__position {
  color: #7f8c8d;
  margin: 4px 0;
  font-size: 0.9em;
  line-height: 1.4;
}

.app-employee-card__position::before {
  content: "▹";
  margin-right: 8px;
  color: #42b983;
}
</style>
