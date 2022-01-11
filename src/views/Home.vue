<template>
  <div class="row" v-if="posts.length">
    <div class="col-9">
      <PostList :posts="posts" />
    </div>
    <div class="col-3">
      <TagList :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagList from '../components/TagList.vue'
import getPosts from '../composables/getPosts'

export default {
  components: {
    PostList,
    TagList
  },
  setup() {
    const { posts, load } = getPosts()

    load()

    return { posts }
  }
}
</script>
