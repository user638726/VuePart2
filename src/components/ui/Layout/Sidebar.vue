<script setup lang="ts">
import SidebarLinks from '@/components/ui/Layout/SidebarLinks.vue'
import  Button  from '@/components/ui/button/Button.vue'
const links = [
  {
    title: 'Dashboard',
    to: '/',
    icon: 'lucide:house',
  },
  {
    title: 'projects',
    to: '/projects',
    icon: 'lucide:building-2',
  },
  {
    title: 'My tasks',
    to: '/tasks',
    icon: 'lucide:badge-check',
  },
]

const accountlinks = [
  {
    title: 'Profile',
    to: '/profile',
    icon: 'lucide:user',
  },
  {
    title: 'Settings',
    to: '/settings',
    icon: 'lucide:settings',
  },
  {
    title: 'Sign out',
    to: '/signout',
    icon: 'lucide:log-out',
  },
]
</script>

<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 lg:w-52 w-16 transition-[width]"
  >
    <div class="flex items-center justify-between h-16 gap-1 px-2 border-b lg:px-4 shrink-0">
      <Button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </Button>

      <Button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </Button>
    </div>

    <nav class="relative flex flex-col justify-between h-full gap-2">
      <div>
        <SidebarLinks :links="links" />
      </div>

      <div class="py-3 text-center border-y bg-background">
        <SidebarLinks :links="accountlinks" />
      </div>
    </nav>
  </aside>
</template>
