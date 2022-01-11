<template>
  <div class="row">
    <div class="col">
      <div class="my-2">
        <form @submit.prevent="handleSubmit">
          <label>Title:</label>
          <input class="form-control" v-model="title" type="text" required />
          <label>Content:</label>
          <textarea class="form-control" v-model="body" required></textarea>
          <label>Tags (hit enter to add a tag):</label>
          <input
            class="form-control"
            @keydown.enter.prevent="handleKeydown"
            v-model="tag"
            type="text"
          />
          <div class="my-2">
            <span
                class="badge rounded-pill bg-info text-dark me-2"
                v-for="tag in tags"
                :key="tag"
                >#{{ tag }}</span
              >
          </div>
          <button class="btn btn-primary">Add Post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { SAVE_POST } from '../store/mutations.type'

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tags = ref([])
    const tag = ref('')

    const router = useRouter()
    const store = useStore()

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, '') // remove all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }
      
      store.dispatch(SAVE_POST, post)

      router.push({ name: 'Home' })
    }

    return { body, title, tags, tag, handleKeydown, handleSubmit }
  }
}
</script>

<style>
</style>