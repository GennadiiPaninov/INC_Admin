import { userListsLocale } from '@/locales/users-list/ru'
import { z } from 'zod'

export const userListControllerSchema = (t: userListsLocale) => {
  return z.object({
    search: z.string(),
    statusFilter: z.string(),
  })
}

export type userListControllerFields = z.infer<ReturnType<typeof userListControllerSchema>>
