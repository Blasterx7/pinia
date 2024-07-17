<template>
  <div class="about">
    <h1>This is the edit page</h1>

    <form method="post" @submit.prevent="submit(data.post)">
      <div>
        <label for="title">
          Titre
        </label>
        <input type="text" v-model="data.post.title">
      </div>
      <div>
        <label for="content">
          Content 
        </label>
        <textarea type="text" v-model="data.post.content[0]"></textarea>
      </div>
      <button-cmp>
        Editer
      </button-cmp>
    </form>
  </div>
</template>

<script setup>
import ButtonCmp from '@/components/ButtonCmp.vue';
import { usePostStore } from '@/stores/post'
import { useRoute } from 'vue-router'

const router = useRoute();

async function submit(postit) {
  console.log(data.post);
  await usePostStore().editPost(router.params.id, postit)
}

const data = usePostStore()

data.fetchPost(router.params.id)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
