import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    post: {
      title: "",
      content: [
        ""
      ]
    },
  }),

  actions: {
    async fetchPosts() {
      const response = await fetch('http://62.72.5.95:1999/notes')
      this.posts = await response.json()
    },

    async fetchPost(id) {
      const response = await fetch(`http://62.72.5.95:1999/notes/${id}`)
      this.post = await response.json()
    },

    async editPost(id, body) {
      const response = await fetch(`http://62.72.5.95:1999/notes/${id}`, {
        method: 'PUT', 
        body: JSON.stringify(body)
      })
      this.post = await response.json()
    },
  },
});