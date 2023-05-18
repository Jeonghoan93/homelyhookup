<template>
  <footer class="footer">
    <div
      class="footerContainer"
      @click="changePage('/home')"
      :class="{ active: isActive('/home') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-house-circle-check" />
      </div>
      <div class="title">
        <p>Find Home</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/tenant')"
      :class="{ active: isActive('/tenant') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-user" />
      </div>
      <div class="title">
        <p>Find Tenant</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/add')"
      :class="{ active: isActive('/add') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </div>
      <div class="title">
        <p>Add Property</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { RouteLocationRaw, useRouter } from "vue-router";

  export default defineComponent({
    name: "footer",
    setup() {
      const router = useRouter();

      const changePage = (path: RouteLocationRaw) => {
        router.push(path);
      };

      const isActive = (path: string) => {
        return router.currentRoute.value.path === path;
      };

      return { changePage, isActive };
    },
  });
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(30, 35, 35, 0.9);
    padding: 0;
    z-index: 99;
  }

  .footerContainer {
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(186, 180, 180);
    font-weight: 400;
    cursor: pointer;
  }
  .icon {
    font-size: 12pt;
  }
  .title {
    font-size: 7pt;
  }

  .footerContainer.active {
    color: pink;
  }

  .footerContainer.active {
    filter: brightness(0) saturate(130%) invert(146%) sepia(108%)
      saturate(1067%) hue-rotate(177deg) brightness(300%) contrast(144%);
    font-weight: 800;
  }
</style>
