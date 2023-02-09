<script lang="ts" setup></script>

<template>
  <div>
    <h1>Category page </h1>
    <h2 v-if="$route.params.slug">category : {{ $route.params.slug }}</h2>
  </div>
</template>

<style scoped></style>
