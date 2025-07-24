<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">go to project1</RouterLink>
  </div>
</template>
