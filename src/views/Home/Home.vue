<template>
  <div class="home-container">
    <div class="welcome-message">
      <h1>Join party, <span>fast & cheap</span></h1>
      <h2>or Host your party and earn $200 per day</h2>
      <button>Get started</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Home",
  });
</script>

<style scoped>
  .home-container {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../../assets/bgHome.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .welcome-message {
    text-align: center;
    color: #fff;
  }

  h1 {
    font-size: 19pt;
    font-weight: 700;
  }

  span {
    color: #3bf172;
  }

  h2 {
    font-size: 11pt;
    opacity: 0.8;
    font-weight: 500;
  }

  button {
    margin-top: 20px;
    background-color: #1c9a42;
    text-decoration: none;
    border: none;
    font-size: 11pt;
    font-weight: 600;
    color: white;
    padding: 0.5rem 1.4rem;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
