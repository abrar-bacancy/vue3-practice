<template>
  <div class="card my-2" v-if="posts.length">
    <div class="card-body">
      <h5 class="card-title">Tags</h5>
      <div v-for="tag in tags" :key="tag">
        <router-link :to="{ name: 'Tag', params: { tag } }">
          <span
            class="badge rounded-pill me-2"
            :class="{
              'bg-info text-dark': tag == selectedTag,
              'bg-secondary': tag != selectedTag
            }"
            >#{{ tag }}</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  props: ['posts'],

  setup() {
    const store = useStore()

    const tags = computed(() => store.getters.tags)

    const selectedTag = computed(() => store.getters.selectedTag)

    return { tags, selectedTag }
  }
}
</script>

<style>
</style>