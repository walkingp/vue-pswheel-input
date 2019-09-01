<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 v-pswheel="{color:'red'}">Hello World!</h1>
    <PsInput></PsInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PsInput from "@/components/ps-input.vue"; // @ is an alias to /src
import pswheel from "./../directives/pswheel";
@Component({
  directives: {
    pswheel
  },
  components: {
    PsInput
  }
})
export default class Home extends Vue {}
</script>
