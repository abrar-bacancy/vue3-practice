import { FETCH_POSTS } from '../store/actions.type'
import {useStore} from 'vuex'
import { computed } from 'vue'
import { SET_SEL_TAG } from '../store/mutations.type'

const getPosts = () => {

  const store = useStore()
  
  const posts = computed(() => store.getters.posts)

  const load = () => {
    store.dispatch(FETCH_POSTS)
  }

  const setSelectedTag = (tag) => {
    store.commit(SET_SEL_TAG, tag)
  }

  const postsWithTag = computed(() => store.getters.postsWithTag)

  return {
    posts,
    postsWithTag,
    load,
    setSelectedTag
  }
}

export default getPosts