<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
  /*设置滚动条样式*/
*::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    padding-right: 15px;
}

*::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
}

*::-webkit-scrollbar-thumb {
    background: #BBBBBB;
    border-radius: 2px;
}

*::-webkit-scrollbar-thumb {
    background: #A8A8A8;
}

*::-webkit-scrollbar-corner {
    background: #f6f6f6;
}

/*设置滚动条样式 end*/
</style>
