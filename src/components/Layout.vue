<script setup>
const sendEmail = () => {
  window.location.href = "mailto:chaya121285@gmail.com";
};
</script>

<template>
  <section>
    <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
      <div class="container py-2 py-md-5">
        <div class="row justify-content-between">
          <div class="col-md-2">
            <ul class="custom-menu">
              <li class="active"><router-link to="/">Home</router-link></li>
              <li><router-link to="/About">About Me</router-link></li>
              <li><router-link to="/Services">Services</router-link></li>
              <li><router-link to="/Portfolio">Portfolio</router-link></li>
            </ul>
          </div>

          <div class="col-md-4 d-none d-md-block">
            <h3>Hire Me</h3>
            <p>
              若您需要一位有創意、負責任且高效的設計師，請聯繫我。期待與您合作，共同實現您的產品願景！
            </p>
            <button @click="sendEmail" class="email-button">聯繫我</button>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar navbar-light custom-navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/"> MyPortfolio</router-link>
        <a
          href="#"
          class="burger"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
        >
          <span></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.email-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #21384c;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0c1721;
  }
}
</style>
