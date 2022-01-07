<template>
  <div class="row px-5 py-2" v-if="posts.length">
    <div class="col-9">
      <PostList :posts="postsWithTag" />
    </div>
    <div class="col-3">
      <TagList :posts="posts" :active-tag="tag" />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagList from '../components/TagList.vue'
import getPosts from '../composables/getPosts'
import { computed } from '@vue/reactivity'

export default {
  components: {
    PostList,
    TagList
  },
  props: ['tag'],
  setup(props) {
    const { posts, error, load } = getPosts()

    load()

    const postsWithTag = computed(() => {
      return posts.value.filter(p => p.tags.includes(props.tag))
    })

    return { posts, postsWithTag, error }
  }
}
</script>
