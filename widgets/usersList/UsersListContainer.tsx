import { Card } from '@/shared'
import { useUsersListHook } from '@/widgets/usersList/hook/useUsersListHook'
import { UsersListController } from '@/widgets/usersList/usersListController/UsersListController'
import { UsersListTable } from '@/widgets/usersList/usersListTable/UsersLitTable'

import s from './usersListContainer.module.scss'
export const UsersListContainer = () => {
  const { control, errors, getValues, handleSubmit, reset } = useUsersListHook()

  return (
    <Card className={s.rootUsersListContainer}>
      <UsersListController />
      <UsersListTable />
    </Card>
  )
}
