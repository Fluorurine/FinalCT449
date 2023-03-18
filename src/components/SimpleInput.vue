<script setup></script>

<template>
  <h1>This is a API Test</h1>
  <label for="testid">Test id label</label>
  <input type="text" id="testid" />
</template>

<style scoped>
#testid {
  /* -webkit-appearance: none; */
  display: block;
  margin-top: 4px;
  width: 50%;
  height: 1.5rem;
  border: 1px solid rgb(209 213 219);
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
#testid:focus {
  outline: 1px solid rgb(10, 129, 250);
}
</style>
