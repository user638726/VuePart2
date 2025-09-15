<script setup lang="ts">
interface LinkProp {
  title: string
  to?: string
  icon: string
}

const props = defineProps<{
  links: LinkProp[]
}>()

const emits = defineEmits<{
  actionClicked:[string]
}>()


const emitActionClicked = (linkTitle:string)=>{
  emits('actionClicked',linkTitle)
}
</script>

<template>
  <template v-for="link in links" :key="link.title">
  <RouterLink
    v-if="link.to"
    exactActiveClass="text-primary bg-muted"
    :to="link.to"
    class="flex items-center justify-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary lg:justify-normal text-muted-foreground"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
  </RouterLink>
  <div
    v-else
    class="flex items-center justify-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg cursor-pointer hover:text-primary lg:justify-normal text-muted-foreground"
    @click="emitActionClicked(link.title)"/>
  </template>


</template>


