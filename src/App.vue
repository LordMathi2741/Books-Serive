<script>

import { defineComponent } from 'vue'
import TheToolbar from '@/public/components/the-toolbar.component.vue'
import TheBookCard from '@/books/components/the-book-card.component.vue'
import TheFooter from '@/public/components/the-footer.component.vue'



export default defineComponent({
  components: { TheFooter, TheBookCard, TheToolbar }
})
</script>

<template>
<div>
  <the-toolbar/>
  <the-book-card/>
  <the-footer/>
</div>
</template>

<style scoped>

div{
  display: flex;
  flex-direction: column;
  gap:2rem;
}

</style>
