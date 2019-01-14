<template>
  <div id="app">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'shell',
};
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
    overflow-y: scroll;
  }
</style>
