<template>
  <div class="app-layout">
    <NavbarMobile v-if="isMobile" />
    <NavbarMain v-else />
    <main>
      <router-view />
    </main>
    <FooterMobile v-if="isMobile" />
    <FooterBig v-else />
    <BottomModal v-model="showModal" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, onUnmounted, provide, ref } from "vue";
  import BottomModal from "../components/BottomModal.vue";
  import NavbarMain from "../components/Navbar/Navbar.vue";
  import NavbarMobile from "../components/Navbar/NavbarMobile.vue";
  import FooterMobile from "../components/FooterMobile.vue";
  import FooterBig from "../components/FooterBig.vue";

  export default defineComponent({
    name: "MainLayout",
    components: {
      BottomModal,
      NavbarMain,
      NavbarMobile,
      FooterMobile,
      FooterBig,
    },

    setup() {
      const showModal = ref(false);
      const isMobile = ref(window.innerWidth <= 743);

      provide("showModal", showModal);

      const handleResize = () => {
        isMobile.value = window.innerWidth <= 743;
      };

      onMounted(() => {
        window.addEventListener("resize", handleResize);
      });

      onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });

      return {
        isMobile,
        showModal,
      };
    },
  });
</script>

<style scoped>
  .app-layout {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin: 0 auto;
    background-color: rgb(28, 27, 27);
  }

  main {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    main {
      padding: 0.1rem 1rem;
    }
  }
</style>
