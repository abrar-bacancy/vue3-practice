<template>
  <div v-if="posts.length > 0">
    <SinglePost :post="post" v-for="post in posts" :key="post.id" />
  </div>
  <div v-else>
    No posts found!
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
  components: {
    SinglePost
  },
  props: ['posts']
}
</script>

<style>
</style>