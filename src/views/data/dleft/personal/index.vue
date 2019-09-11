<template>
  <div class="personal-box">
    <div class="personal-body" @click="hanldUserDivClick">
      <div class="left">
        <div class="img">
          <img :style="{ background: 'url(' + personalData.img + ')' }" />
        </div>
      </div>
      <div class="right">
        <div class="name">{{ personalData.username }}</div>

        <div class="year">
          <a class="date">{{ personalData.joinDate }}</a>
          <a class="time">加入github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { viewURL } from '@/config'
export default {
  name: "personal",
  props: {
    personalData: Object
  },
  methods: {
    hanldUserDivClick () {
      window.open(viewURL + this.personalData.username, '_blank');
    }
  }
};
</script>

<style lang="scss">
@import "./index";
</style>
