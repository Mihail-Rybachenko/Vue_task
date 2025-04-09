<template>
  <div class="list-container">
    <ul class="tech-list">
      <li
          v-for="(item, index) in items"
          :key="index"
          class="tech-list__item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style>
.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list__item {
  padding: 12px 20px;
  margin: 8px 0;
  background: #f8f9fa;
  border-radius: 6px;
  transition: transform 0.2s;
}

.tech-list__item:hover {
  transform: translateX(10px);
  background: #e9ecef;
}
</style>