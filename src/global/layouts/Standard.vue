<template>
  <div class="layout-standard">
    <div class="header">
      <p>Header</p>
    </div>
    <div class="content">
      <slot/>
    </div>
    <div class="footer">
      <p>Footer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-standard',
};
</script>

<style lang="scss" scoped>
.layout-standard{
  min-height: 100vh;

  .header {
    position: sticky;
    top: 0;
    overflow: hidden;
    z-index: 1000;
    border-bottom: 1px solid #f00;
    background-color: #fff;
  }

  .content {
  }

  .footer {
    position: sticky;
    bottom: 0;
    overflow: hidden;
    z-index: 1000;
    border-top: 1px solid #00f;
    background-color: #fff;
  }
}
</style>
