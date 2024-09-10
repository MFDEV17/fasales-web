<script setup lang="ts">
import { useFetch } from '@vueuse/core'

const { data, isFetching, error, isFinished } = useFetch(
  'https://jsonplaceholder.typicode.com/todos/',
)
  .get()
  .json()
</script>

<template>
  <div v-if="isFetching">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="isFinished">
    {{ data }}
  </div>
</template>
