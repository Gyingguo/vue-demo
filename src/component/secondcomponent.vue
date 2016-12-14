<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a href="#">written by {{ author }}</a>
    <p>thanks</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        author: "微信号",
        articles: [],
      }
    }
  }
</script>
