<template>
  <div class="explore">
    <div class="findHome">
      <Header headerText="Find Home" />
    </div>

    <div class="itemMain">
      <Property
        v-for="(property, index) in properties"
        :key="index"
        :image="property.image"
        :streetNumber="property.streetNumber"
        :streetName="property.streetName"
        :city="property.city"
        :country="property.country"
        :size="property.size"
        :rooms="property.roomNumber"
        :type="property.type"
        :price="property.price"
        :currency="property.currency"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "./components/Header.vue";

  import Property from "../Property/Property.vue";

  import { Properties } from "./dummyData";

  export default defineComponent({
    name: "House",
    components: {
      Property,
      Header,
    },
    data() {
      return {
        properties: Properties,
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
