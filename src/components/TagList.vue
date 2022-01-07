<template>
  <div class="card my-2" v-if="posts.length">
    <div class="card-body">
      <h5 class="card-title">Tags</h5>
      <div v-for="tag in tags" :key="tag">
        <router-link :to="{ name: 'Tag', params: { tag } }">
          <span
            class="badge rounded-pill me-2"
            :class="{
              'bg-info text-dark': tag == activeTag,
              'bg-secondary': tag != activeTag
            }"
            >#{{ tag }}</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
  props: ['posts', 'activeTag'],

  setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  }
}
</script>

<style>
</style>