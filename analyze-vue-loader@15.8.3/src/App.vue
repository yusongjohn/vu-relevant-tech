<template>
  <div id="app">
    {{ msg }}
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      msg: "hello vue + webpack",
    };
  }
};
</script>

<style>
#app {
  background: red;
}
</style>
