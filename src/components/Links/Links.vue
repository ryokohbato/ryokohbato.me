<template>
  <div class="links">
    <Link href="https://twitter.com/ryokohbato" text="Twitter"/>
    <Link href="https://github.com/ryokohbato" text="GitHub"/>
  </div>
</template>

<script lang="ts">
import Link from "./Link.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Link,
  },
})
export default class Links extends Vue {}
</script>

<style scoped lang="scss">
.links {
  margin-top: 24px;
}
</style>
