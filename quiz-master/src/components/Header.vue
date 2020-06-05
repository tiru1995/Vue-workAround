<template>
<div class='header'>
  <b-nav  tabs align="center">
    <b-nav-item disabled>Quiz Master</b-nav-item>
    <b-nav-item disabled>Counter:{{optioncorrect}}/{{numtotal}}</b-nav-item>
  </b-nav>
</div>
</template>

<script>
export default{

props:['optioncorrect','numtotal' ]}
</script>

<style scoped>

</style>
