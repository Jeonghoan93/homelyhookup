<template>
  <div class="container">
    <div class="image">
      <img :src="image" />
    </div>

    <div class="desc">
      <div class="info">Looking for ...</div>
      <div class="userLook">
        <div class="price">
          <div>{{ price }}</div>
          <div>{{ currency }}/Month</div>
        </div>
        <div class="location">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-map-marker-alt" />
          </div>
          <div class="unit">
            <span>{{ city }}</span>
            <span>{{ country }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Tenants",
    props: {
      image: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
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
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 370px;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .image {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .desc {
      padding: 0 1px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      width: 95%;

      .info {
        font-size: 9pt;
      }

      .userLook {
        .price {
          color: rgb(255, 255, 255);
          padding: 3px 0px;
          font-weight: 700;
          display: flex;
          flex-direction: row;
          gap: 5px;

          font-size: 9pt;
        }

        .location {
          padding: 3px 0px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;

          width: 100%;
          height: 20%;
          border-radius: 10px;

          font-size: 9pt;

          .icon {
          }

          .unit {
            display: flex;
            flex-direction: row;
            align-items: center;

            gap: 4px;
          }
        }
      }
    }
  }
</style>
