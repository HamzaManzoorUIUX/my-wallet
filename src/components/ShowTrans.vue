<template >
<div class=" col-12 col-md-4">
  <div class="card p-2 px-md-3 my-3">
    {{
      trans['id']
    }}
<h1>
  {{
    trans['amount']
  }}
</h1>
<h5>
  {{
    trans['dec']
  }}
</h5>
{{
  trans['type']
}}
  </div>
  </div>
</template>
<script>
export default {
  props:['trans']
}
</script>
<style lang="">
  
</style>