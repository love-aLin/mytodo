<template>
  <div id="app">
    <div id="cover">
    </div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './layout/header.vue'
  import Todo from './components/todo/todo.vue'
  import Footer from './layout/footer.js'

  export default {
    name: 'App',
    components: {Header, Footer, Todo}
  }
</script>

<style scoped>
  #app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  #cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    opacity: .9;
    z-index: -1;
  }
</style>
