<template>
  <div class="row">
    <div class="col">
      <div class="card" v-if="post">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.body }}</p>

          <div class="d-flex justify-content-between">
            <div>
              <span
                class="badge rounded-pill bg-info text-dark me-2"
                v-for="tag in post.tags"
                :key="tag"
                >#{{ tag }}</span
              >
            </div>
            <a class="btn btn-outline-primary" @click.stop="back">Back</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  setup(props) {
    const router = useRouter()

    const { post, load, unload } = getPost(props.id)

    load()

    const back = () => {
      router.back()
    }

    onUnmounted(() => {
      unload()
    })

    return {
      post,
      back
    }
  }
}
</script>

<style>
</style>