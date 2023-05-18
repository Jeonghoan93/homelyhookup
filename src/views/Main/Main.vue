<template>
  <div class="home-container">
    <div class="welcome-message">
      <h1>Find your <span>Home</span></h1>
      <h2>List your property to find right people</h2>
      <div class="btnContainer">
        <button class="btn1" @click="changePage('/home')">Find Home</button>
        <button class="btn2" @click="changePage('/add')">Add Property</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { RouteLocationRaw, useRouter } from "vue-router";

  export default defineComponent({
    name: "Main",
    components: {},
    setup() {
      const router = useRouter();

      const changePage = (path: RouteLocationRaw) => {
        router.push(path);
      };

      return { changePage };
    },
  });
</script>

<style scoped>
  .home-container {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../../assets/bgMain.jpg");
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

  .btnContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .welcome-message {
    text-align: center;
    color: #fff;
  }

  h1 {
    font-size: 19pt;
    font-weight: 700;
    padding-right: 15%;
    padding-left: 15%;
    user-select: none;
  }

  span {
    color: #3bf172;
  }

  h2 {
    font-size: 11pt;
    opacity: 0.7;
    font-weight: 500;
    user-select: none;
  }

  .btn1 {
    min-width: 180px;
    margin-top: 20px;
    background-color: #0fa03b;
    text-decoration: none;
    border: none;
    font-size: 10pt;
    font-weight: 600;
    color: white;
    padding: 0.5rem 1.4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .btn2 {
    min-width: 180px;
    margin-top: 13px;
    background-color: #2d608f;
    text-decoration: none;
    border: none;
    font-size: 10pt;
    font-weight: 600;
    color: white;
    padding: 0.5rem 1.4rem;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
