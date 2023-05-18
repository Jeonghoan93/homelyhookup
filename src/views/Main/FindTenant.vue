<template>
  <div class="explore">
    <div class="findHome">
      <Header headerText="Find Tenant" />
    </div>

    <div class="itemMain">
      <Tenant
        v-for="(tenant, index) in tenants"
        :key="index"
        :image="tenant.image"
        :city="tenant.city"
        :country="tenant.country"
        :price="tenant.price"
        :currency="tenant.currency"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "./components/Header.vue";

  import Tenant from "../Tenant/Tenant.vue";

  import { Tenants } from "./dummyData";

  export default defineComponent({
    name: "House",
    components: {
      Tenant,
      Header,
    },
    data() {
      return {
        tenants: Tenants,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .explore {
    color: rgb(209, 221, 221);
  }

  .findHome {
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid rgb(50, 51, 51);
  }

  .itemMain {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
