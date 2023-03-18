<script setup>
import TextInputComp from "@/components/ProductComp/TextInputComp.vue";
</script>

<template>
  <h1>Hello World!</h1>
  <div class="productpublishcontainer">
    <div class="leftsidecontainer">
      <form spellcheck="false">
        <div class="form_container">
          <div class="form_item">
            <div>
              <label for="product_title" class="input_label"
                >Tên sản phẩm</label
              >
            </div>
            <TextInputComp id="product_title" err-message="q"></TextInputComp>
          </div>
          <div class="form_item">
            <div>
              <label for="product_title" class="input_label"
                >Tên sản phẩm</label
              >
            </div>
            <TextInputComp id="product_title"></TextInputComp>
          </div>
        </div>
      </form>
    </div>
    <div class="rightsidecontainer"></div>
  </div>
</template>

<style>
* {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.input_label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.925rem; /* 14px */
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(17 24 39);
}
.form_container {
  border: 1px solid rgb(209 213 219);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem;
}
</style>
