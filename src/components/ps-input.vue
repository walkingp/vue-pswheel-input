<template>
    <input type="number" value="1987" v-pswheel="{color:'red'}">
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import pswheel from "./../directives/pswheel";
@Component({
  directives: {
    pswheel
  }
})
@Component
export default class psInput extends Vue {
  @Prop()
  private msg!: string;
}
</script>