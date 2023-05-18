<template>
  <transition name="slide-up">
    <div v-if="showModal" class="modal">
      <div class="head">
        <font-awesome-icon
          @click="openModal"
          class="icon"
          icon="fa-solid fa-xmark"
        />
      </div>

      <div class="body">
        <div class="upper">
          <div class="optionScroll" @click="expendTenant">
            <div class="text">Tenant</div>
            <div class="icon">
              <font-awesome-icon
                v-if="ifExpendTenant"
                icon="fa-solid fa-chevron-up"
              />
              <font-awesome-icon v-else icon="fa-solid fa-chevron-down" />
            </div>
          </div>
          <div class="optionExpend" v-if="ifExpendTenant">
            <div class="minorOption">Search Rentals</div>
            <div class="minorOption">Remind me</div>
            <div class="minorOption">Login</div>
          </div>

          <div class="optionScroll" @click="expendLandlord">
            <div class="text">Landlord</div>
            <div class="icon">
              <font-awesome-icon
                v-if="ifExpendLandlord"
                icon="fa-solid fa-chevron-up"
              />
              <font-awesome-icon v-else icon="fa-solid fa-chevron-down" />
            </div>
          </div>
          <div class="optionExpend" v-if="ifExpendLandlord">
            <div class="minorOption">Add Property</div>
            <div class="minorOption">Login</div>
          </div>

          <div class="option">Receive email from match</div>
          <div class="option">Login</div>
        </div>
      </div>

      <div class="separator-container">
        <div class="separator-line"></div>
        <span class="separator-text">or</span>
        <div class="separator-line"></div>
      </div>

      <div class="body">
        <div class="bottom">
          <div class="continueBtn">
            <button class="buttonList">List Property</button>
          </div>
          <div class="continueBtn">
            <button class="buttonFind">Find Home</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { defineComponent, inject, ref, Ref } from "vue";

  export default defineComponent({
    data() {
      return {};
    },

    setup() {
      const showModal = inject("showModal") as Ref<boolean>;
      const ifExpendTenant = ref(false) as Ref<boolean>;
      const ifExpendLandlord = ref(false) as Ref<boolean>;

      const openModal = () => {
        showModal.value = !showModal.value;
      };

      const expendTenant = () => {
        ifExpendTenant.value = !ifExpendTenant.value;
      };

      const expendLandlord = () => {
        ifExpendLandlord.value = !ifExpendLandlord.value;
      };

      return {
        ifExpendTenant,
        ifExpendLandlord,
        showModal,
        openModal,
        expendTenant,
        expendLandlord,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    bottom: 0;
    right: 0;
    max-width: 400px;
    width: 100%;
    height: 98%;
    background-color: rgb(40, 38, 38);
    color: rgb(255, 255, 255);
    z-index: 1000;
    overflow-y: auto;
    border-radius: 10px 0 0 0;

    .head {
      display: flex;
      justify-content: flex-end;

      padding: 10px;

      .icon {
        cursor: pointer;
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      padding: 0px 10px;

      .upper {
        display: flex;
        flex-direction: column;
        padding: 0 10px;

        .optionScroll {
          color: #ffffff;
          padding: 15px 0;

          display: flex;

          .text {
            font-size: 13pt;
            font-weight: 700;
            cursor: pointer;
          }

          .icon {
            cursor: pointer;
            margin-top: 1px;
            margin-left: auto;
            font-size: 11pt;
          }
        }

        .optionExpend {
          border-top: 1px solid #5e5252;

          padding: 3px 14px;

          display: flex;
          flex-direction: column;

          .minorOption {
            font-size: 12pt;
            font-weight: 700;
            margin-bottom: 10px;
            color: #f4fff8;
            cursor: pointer;
            padding: 7px 0;
          }
        }

        .option {
          color: #ffffff;
          padding: 15px 0;
          font-size: 13pt;
          font-weight: 700;
          cursor: pointer;
        }
      }

      .bottom {
        .continueBtn {
          padding: 10px;

          .buttonList {
            padding: 10px 100px;
            height: 40px;
            width: 100%;
            min-width: 200px;
            border-radius: 10px;
            background-color: rgb(69, 150, 203);
            border: #7694ec 1px solid;
            color: white;
            font-size: 10pt;
            font-weight: 700;
            cursor: pointer;
          }
          .buttonFind {
            padding: 10px 40px;
            height: 40px;
            width: 100%;
            min-width: 200px;
            border-radius: 10px;
            background-color: rgb(36, 159, 77);
            border: #2ca34d 1px solid;
            color: white;
            font-size: 10pt;
            font-weight: 700;
            cursor: pointer;
          }
        }
      }
    }
  }

  .separator-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    padding: 0 20px;
  }

  .separator-line {
    flex-grow: 1;
    height: 1px;
    background-color: #4b4848;
  }

  .separator-text {
    margin: 0 10px;
    font-size: 14px;
    color: #afa6a6;
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.3s ease;
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100%);
  }
</style>
