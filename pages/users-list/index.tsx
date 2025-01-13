import { getAdminLayout } from '@/shared/components/layout/superAdminLayout/AdminLayout'
import { UsersListContainer } from '@/widgets/usersList/UsersListContainer'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

const UserList = () => {
  const router = useRouter()

  return (
    <>
      <UsersListContainer />
    </>
  )
}

UserList.getLayout = getAdminLayout

export default observer(UserList)
