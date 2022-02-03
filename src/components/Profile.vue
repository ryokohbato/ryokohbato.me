<template>
  <div class="profile">
    <img alt="ryokohbato's icon" class="icon" src="../assets/logo.png" />
    <h1>{{ name }} のページ</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Profile extends Vue {
  @Prop() private name!: string;
}
</script>

<style scoped lang="scss">
.icon {
  border-radius: 50%;
  height: 160px;
  width: 160px;
}

h1 {
  font-size: 18px;
  margin-top: 24px;
}
</style>
