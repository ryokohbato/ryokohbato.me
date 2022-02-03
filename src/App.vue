<template>
  <div id="app">
    <Profile name="ryokohbato"/>
    <Links/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Profile from "./components/Profile.vue";
import Links from "./components/Links/Links.vue";

// destyle.css を読み込み
import "../node_modules/destyle.css/destyle.css"

@Component({
  components: {
    Profile,
    Links,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  background-color: #2E343F;
}

#app {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
}
</style>
