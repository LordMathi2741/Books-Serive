<script>

import { defineComponent } from 'vue'
import TheToolbarComponent from '@/public/components/the-toolbar.component.vue'
import TheFooterComponent from '@/public/components/the-footer.component.vue'
import TheBookCard from '@/books/components/the-book-card.component.vue'

export default defineComponent({
  components: { TheBookCard, TheFooterComponent, TheToolbarComponent }
})
</script>

<template>
   <TheToolbarComponent/>
  <TheBookCard/>
  <TheFooterComponent/>
</template>

<style scoped>

</style>
