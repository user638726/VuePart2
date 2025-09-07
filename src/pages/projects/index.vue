<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns.ts'

usePageStore().pageData.title = 'Projects'
const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader
await getProjects()

const {getGroupedCollabs, groupedCollabs} = useCollabs()
await getGroupedCollabs(projects.value?? [])


const columnWithCollabs = columns(groupedCollabs)
</script>

<template>
  <DataTable v-if="projects" :columns="columnWithCollabs" :data="projects" />
</template>
