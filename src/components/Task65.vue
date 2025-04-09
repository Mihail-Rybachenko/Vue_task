<template>
  <div class="child-component">
    <button
        class="action-btn first-btn"
        @click="emitFirstEvent"
    >
      Действие 1
    </button>

    <button
        class="action-btn second-btn"
        @click="emitSecondEvent"
    >
      Действие 2
    </button>
  </div>
</template>

<script>
export default {
  emits: ['first-action', 'second-action'],
  methods: {
    emitFirstEvent() {
      this.$emit('first-action')
    },
    emitSecondEvent() {
      this.$emit('second-action')
    }
  }
}
</script>

<style>
.action-btn {
  padding: 12px 24px;
  margin: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s, opacity 0.2s;
}

.action-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.first-btn {
  background: #42b983;
  color: white;
}

.second-btn {
  background: #3498db;
  color: white;
}
</style>