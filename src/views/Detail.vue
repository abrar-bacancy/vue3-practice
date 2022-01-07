<template>
  <div class="row px-5 py-2">
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
import { useRouter } from 'vue-router'
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  setup(props) {
    const router = useRouter()

    const { error, post, load } = getPost(props.id)

    load()

    const back = () => {
      router.back()
    }

    return {
      error,
      post,
      back
    }
  }
}
</script>

<style>
</style>