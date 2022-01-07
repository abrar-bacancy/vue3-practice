<template>
  <div class="card my-2">
    <div class="card-body" v-if="post">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ trimedBody }}</p>
      <div class="d-flex justify-content-between">
        <div>
          <span
            class="badge rounded-pill bg-info text-dark me-2"
            v-for="tag in post.tags"
            :key="tag"
            >#{{ tag }}</span
          >
        </div>
        <router-link
          :to="{ name: 'Detail', params: { id: post.id } }"
          class="btn btn-outline-primary"
          >Detail</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'

export default {
  props: ['post'],

  setup(props) {
    const trimedBody = computed(() => {
      if (props.post.body.length > 50) {
        return props.post.body.substring(0, 50) + '....'
      }
      return props.post.body
    })
    return {
      trimedBody
    }
  }
}
</script>

<style>
</style>