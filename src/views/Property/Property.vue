<template>
  <div class="container">
    <div class="image">
      <img :src="image" />
    </div>
    <div class="desc">
      <div class="location">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-map-marker-alt" />
        </div>
        <div class="unit">
          <span>{{ streetNumber }}</span>
          <span>{{ streetName }}</span>
          <span>{{ city }}</span>
          <span>{{ country }}</span>
        </div>
      </div>
      <div class="info">
        <div class="size">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-ruler-combined" />
          </div>
          <div class="unit">
            <span>{{ size }}</span>
            <span>m2</span>
          </div>
        </div>
        <div class="rooms">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-bed" />
          </div>
          <div class="unit">
            <span>{{ roomNumber }}</span>
            <span>room(s)</span>
          </div>
        </div>
        <div class="type">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-house-user" />
          </div>
          <div class="unit">
            <span>{{ type }}</span>
          </div>
        </div>
      </div>
      <div class="price">
        <div>{{ price }}</div>
        <div>{{ currency }}/Month</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property",
    props: {
      image: {
        type: String,
      },
      streetNumber: {
        type: String,
      },
      streetName: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      size: {
        type: Number,
      },
      roomNumber: {
        type: Number,
      },
      type: {
        type: String,
      },
      price: {
        type: Number,
      },
      currency: {
        type: String,
      },
    },
  });
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 370px;

    border-radius: 10px;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .image {
      width: 100%;

      height: 200px;
      border-radius: 5px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .desc {
      padding: 0 1px;
      display: flex;
      flex-direction: column;

      width: 95%;

      .location {
        padding: 10px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        width: 100%;
        height: 20%;
        border-radius: 10px;

        .icon {
        }

        .unit {
          display: flex;
          flex-direction: row;
          align-items: center;

          gap: 4px;
        }
      }

      .info {
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 40%;

        .size,
        .rooms,
        .type {
          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 3px;

          .icon {
            font-size: 10pt;
          }

          .unit {
            display: flex;
            flex-direction: row;

            width: 100%;
            height: 50%;
            border-radius: 10px;
          }
        }
      }

      .price {
        color: rgb(255, 255, 255);
        padding: 10px 0px;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        gap: 5px;
      }
    }
  }
</style>
