<template>
  <div>
    <h1>查看lid为:{{lid}}的商品</h1>
  </div>  
</template>
<script>
  export default{
    name:"product_details",
    data(){
      return {
      }
    },
    props:["lid"]
  }
</script>