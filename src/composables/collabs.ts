import type { GroupedCollabs } from '@/types/GroupedCollabs'
import { groupProfilesQuery } from '@/utils/supaQueries'
import type { Projects, TasksWithProjects } from '@/utils/supaQueries'

export const useCollabs = () => {
  const groupedCollabs = ref<GroupedCollabs>({})

  const getProfilesByIds = async (userIds: string[]) => {
    const { data, error } = await groupProfilesQuery(userIds)
    if (error || !data) return []

    return data
  }
  const getGroupedCollabs = async (items: Projects | TasksWithProjects) => {
    const filterItems = items.filter((item) => item.collaborators.length)
    const promises = filterItems.map((item) => getProfilesByIds(item.collaborators))

    const results = await Promise.all(promises)

    filterItems.forEach((item, index) => {

      groupedCollabs.value[item.id] = results[index]
    })
  }
  return {
    getProfilesByIds,
    getGroupedCollabs,
    groupedCollabs
  }
}
