<template>
  <section class="container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/chartjs">vue-chartjs</router-link></li>
  </ul>
    <div class="columns">

      <div class="column">
        <h3>Bar Chart</h3>
        <!--Bar Chart example-->
        <BarChart/>
      </div>
    </div>
 
    
  </section>
</template>
 
<script>
  import BarChart from '@/components/BarChart'
 
  export default {
    name: 'VueChartJS',
    components: {
     
      BarChart
    },
 
  }
</script>
 
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
 
  li {
    display: inline-block;
    margin: 0 10px;
  }
 
  a {
    color: #42b983;
  }
</style>