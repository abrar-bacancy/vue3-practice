import { computed } from 'vue'
import { useStore } from 'vuex'
import { FETCH_POST } from '../store/actions.type'
import { SET_POST } from '../store/mutations.type'

const getPost = (id) => {

  const store = useStore()

  const post = computed(() => store.getters.post)

  const load = () => {
    store.dispatch(FETCH_POST, { id })
  }

  const unload = () => {
    store.commit(SET_POST, null)
  }

  return { post, load, unload }

}

export default getPost