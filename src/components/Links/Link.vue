<template>
  <div>
    <a :href="href" class="link" target="_blank">{{ text }}</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Link extends Vue {
  @Prop() private href!: string;
  @Prop() private text!: string;
}
</script>

<style scoped lang="scss">
.link {
  display: inline-block;
  background-color: #0005;
  border-radius: 4px;
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  margin-top: 12px;
  width: 120px;

  &:hover {
    background-color: #fff2;
  }
}
</style>
