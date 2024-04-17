<script>
export default {
  name: 'the-footer',
}
</script>

<template>
  <footer>
    <div>
      {{$t('copyright')}}
    </div>
    <div>
      {{$t('credits', {code:'U202212721'})}}
    </div>

  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  background-color: rebeccapurple;
  color: white;
  padding: 19px;
  border-radius:15px;

}
</style>