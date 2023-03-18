<script setup>
// import { ref } from "vue";
defineProps({
  errMessage: String,
});
</script>

<template>
  <input
    type="text"
    :class="{ input_field: !errMessage, error_field: errMessage }"
  />
  <div v-show="errMessage" class="error_block">{{ errMessage }}</div>
</template>

<style scoped>
.input_field {
  width: 80%;
  background-color: rgb(249 250 251);
  height: 1.875rem;
  border: 1px solid rgb(209 213 219);
  color: rgb(17 24 39);
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem;

  border-radius: 0.5rem;
}
.input_field:focus {
  outline: 0.1rem solid rgb(59 130 246);
  border-color: rgb(59 130 246);
}
.error_block {
  display: block;
  width: 100%;
  min-height: 1.275rem;
  color: red;
  font-weight: 500;
}
.error_field {
  width: 80%;
  background-color: rgb(249 250 251);
  height: 1.875rem;
  color: rgb(17 24 39);
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem;

  border-radius: 0.5rem;
  border: 2px solid red;
}
.error_field:focus {
  outline: 1px solid red;
  border-color: red;
}
</style>
