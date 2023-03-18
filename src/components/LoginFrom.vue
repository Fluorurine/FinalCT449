<template>
  <div class="background-container">
    <div class="container">
      <div class="title"><h1>Chào mừng bạn trở lại !</h1></div>

      <form class="loginform" @submit.prevent="handleSubmit">
        <div class="loginformcontent">
          <div class="form-item">
            <label class="labelfield" for="username"
              ><strong>Email đăng nhập</strong></label
            >
            <input
              type="text"
              id="username"
              class="inputfield"
              v-model="username"
              autocomplete="name"
            />
          </div>
          <div class="form-item">
            <label for="passwordinput" class="labelfield" Mật khẩu
              ><strong>Mật khẩu</strong></label
            >
            <div class="passwordcontainer">
              <input
                type="password"
                id="passwordinput"
                class="inputfield"
                ref="passwordinput"
                v-model="userpassword"
                autocomplete="password"
              />
              <button class="svg-eye" type="button" @click="handleButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="form-row form-item">
            <div class="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Nhớ mật khẩu
            </div>
            <a href="#">Quên mật khẩu?</a>
          </div>
          <div class="form-item">
            <button class="signinbutton" type="submit">Đăng nhập</button>
          </div>
          <!-- <button type="button" @click="showModal">Open Modal!</button> -->
        </div>
      </form>
    </div>
  </div>
  <!-- <ModalComp v-show="isModalVisible" @close="closeModal"
    ><template v-slot:header> This is a new modal header. </template>

    <template v-slot:body> Nhập sai thông tin rồi bạn ơi. </template>

    <template v-slot:footer> This is a new modal footer. </template></ModalComp
  > -->
</template>
<script setup>
import { ref } from "vue";
// import ModalComp from "./ModalComp.vue";
// const isModalVisible = ref(false);
const username = ref("");
const userpassword = ref("");
const passwordinput = ref(null);
const handleButton = () => {
  if (passwordinput.value.getAttribute("type") === "password") {
    passwordinput.value.setAttribute("type", "text");
  } else {
    passwordinput.value.setAttribute("type", "password");
  }
};
const handleSubmit = () => {
  console.log({ username: username.value, userpassword: userpassword.value });
};
// const showModal = () => {
//   isModalVisible.value = true;
// };
// const closeModal = () => {
//   isModalVisible.value = false;
//   console.log("Heeee");
// };
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Poppins:ital@1&display=swap");

.background-container {
  display: block;
  min-height: 75vh;
  width: 100%;

  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #2fefda 0%, #f7ce68 100%);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-style: bold;
  margin-top: 15px;
  font-family: "Open Sans", sans-serif;

  /* font-family: "Be Vietnam Pro", sans-serif; */
  padding: 3rem;
  /* border: 1px solid black; */
}
.loginform {
  width: 24rem;
  padding: 6px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: white;
  border-radius: 0.375rem;
  font-family: "Open Sans", sans-serif;
  /* font-family: Proxima Nova, system-ui, sans-serif; */
}
.loginformcontent {
  display: flex;
  flex-direction: column;
}
.inputfield {
  /* -webkit-appearance: none; */
  display: block;

  margin-top: 4px;
  width: 90%;
  height: 1.875rem;
  border: 1px solid rgb(209 213 219);
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  color: grey;
}
.labelfield {
  font-size: 0.9rem;
  line-height: 1.75rem;
  font-weight: 500;
  margin-top: 1.25rem;
}
.inputfield:focus {
  outline: 2px solid rgb(10, 129, 250);
}
.svg-eye {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 0.25rem;
  right: 10%;
  border: none;
  background: none;
}
.passwordcontainer {
  position: relative;
}
.form-item {
  margin-top: 2rem;
  align-items: center;
}
.form-row {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.form-row a,
#checkbox {
  font-size: 0.875rem;
  text-decoration: none;
  line-height: 1.25rem;
}
.form-item .signinbutton {
  margin-top: 1.5rem;
  width: 100%;
  justify-content: center;
  border-radius: 0.375rem;
  background-color: rgb(79 70 229);
  padding: 0.5rem; /* 8 px */
  color: #fff;
  position: relative;
  display: flex;
  outline: none;
  border: none;
  font-size: 1.25rem;
}
.form-item .signinbutton:hover {
  background-color: rgb(79 70 229 /0.8);
}
#username {
  border: 1px solid red;
}
</style>
