<template>
  <div id="app">
    <Profile name="ryokohbato"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Profile from "./components/Profile.vue";

// destyle.css を読み込み
import "../node_modules/destyle.css/destyle.css"

@Component({
  components: {
    Profile,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  background-color: #1c2630;
}

#app {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
}

h1 {
  font-size: 18px;
}
</style>
