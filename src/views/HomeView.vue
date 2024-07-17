<template>
  <div>
    <h1>
      My notes
    </h1>

    <router-link :to="`/edit/${element._id}`" v-for="element in data.posts.notes" v-bind:key="element._id">
       <div>
        {{ element.title }}
       </div>
       <div>{{ element.content[0] }}</div>
    </router-link>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
import { useRouter } from 'vue-router'

const router = useRouter()

const data = usePostStore()

data.fetchPosts()
</script>