<script setup lang="ts">
import TopNavbar from '@/components/ui/Layout/TopNavbar.vue'
import Sidebar from '@/components/ui/Layout/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
