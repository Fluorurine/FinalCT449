<script setup></script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> This is the default title! </slot>
          <button type="button" class="btn-close" @click="$emit('close')">
            x
          </button>
        </header>

        <section class="modal-body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
          <button type="button" class="btn-green" @click="$emit('close')">
            Close Modal
          </button>
        </footer>
      </div>
    </div></transition
  >
</template>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
/* Transition */
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.75s ease;
}
</style>
<!-- Áp dụng cho bất kì thành phần nào -->

<!-- const isModalVisible = ref(false); 
const showModal = () => {
isModalVisible.value = true; }; const closeModal = () => { isModalVisible.value
= false; console.log("Heeee"); };
<button type="button" @click="showModal">Open Modal!</button>
<ModalComp
  v-show="isModalVisible"
  @close="closeModal"
><template v-slot:header> This is a new modal header. </template>

    <template v-slot:body> Nhập sai thông tin rồi bạn ơi. </template>

    <template v-slot:footer> This is a new modal footer. </template></ModalComp> -->
