<script setup>
function handleSubmit() {}
</script>

<template>
  <div class="container">
    <div class="login-left">
      <div class="login-header">
        <h1>Welcome to Our Application</h1>
        <p>Please login to use the platform</p>
      </div>
      <form class="login-form">
        <div class="login-form-content">
          <div class="form-item">
            <label for="email">Enter Email</label>
            <input type="text" id="email" />
          </div>
          <div class="form-item">
            <label for="password">Enter Password</label>
            <input type="password" id="password" />
          </div>
          <div class="form-item">
            <div class="checkbox">
              <input
                type="checkbox"
                name="rememberMeCheckBox"
                id="rememberMeCheckBox"
              />
              Renember me
            </div>
          </div>
          <button type="submit" @click.prevent="handleSubmit">Sign in</button>
        </div>
        <div class="login-form-footer">
          <a href="#"
            ><img src="./components/icons/facebook.png" alt="" width="30rem" />
            Login with Facebook</a
          >
          <a href="#"
            ><img
              src="./components/icons/google.png"
              alt=""
              width="30rem"
            />Login with Google</a
          >
          <a href="#"
            ><img
              src="./components/icons/microsoft.png"
              alt=""
              width="30rem"
            />Login with Microsoft</a
          >
        </div>
      </form>
    </div>
    <div class="login-right">
      <img src="./components/icons/logintitle.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap");
* {
  box-sizing: border-box;
}
.container {
  /* border: 1px solid black; */
  margin: 0;
  font-family: "Poppins", sans-serif;
  /* background-image: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secoundary-color)
  ); */
  min-height: calc(100%- 40px * 2);
  display: grid;
  grid-template-columns: 50% 50%;
  border-radius: 10px;
  overflow: hidden;
}
.login-header {
  display: block;
  margin: 15px 0px;
  padding-bottom: 10%;
}
.login-header h1 {
  margin-bottom: 2%;
}
.login-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20%;
  background-color: white;
}
.login-right {
  background-color: #eee;
  display: none;
  display: flex;
  justify-content: center;
}
.login-right img {
  /* max-width: 100%;
  max-height: 100%; */
  width: 50px;
  height: 50px;
}
.login-form {
  width: 90%;
}
.login-form-content {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.login-form-footer {
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin-top: 70px;
}
.login-form-footer img {
  margin: 0 10px;
}
.login-form a {
  flex: auto;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 100px;
  padding: 0.6rem;
  justify-content: center;
}
.login-form a:hover {
  background-color: aliceblue;
}
.form-item label:not(.checkboxLabel) {
  display: inline-block;
  background-color: white;
  margin-bottom: 10px;
  position: absolute;
  padding: 0 10px;
  transform: translate(30px, -10px);
  font-size: 14px;
}
input[type="text"],
input[type="password"] {
  display: block;
  border: 1px solid black;
  height: 55px;
  padding: 0 2rem;
  width: 100%;
  outline: none;
  transition: background 0.5s;
  font-size: 18px;
  border-radius: 100px;
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 7px;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: var(--primary-color);
}
button {
  border: none;
  background-image: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secoundary-color)
  );
  color: white;
  padding: 1rem;
  border-radius: 100px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  height: 55px;
  cursor: pointer;
}
@media (max-width: 1350px) {
  .login-left {
    padding: 50px;
  }
  .login-form {
    width: 100%;
  }
  .login-form-footer {
    flex-direction: column;
    gap: 15px;
  }
}
@media (max-width: 768px) {
  /* body luuc sau phai thay doi nha */
  .container {
    grid-template-columns: auto;
  }
  .login-right {
    display: none;
  }
}
</style>
