import { authStore } from '@/bll/stores/authStore'
import { usersListStore } from '@/bll/stores/usersListStore'

class RootStore {
  authStore = authStore
  usersListStore = usersListStore
}
export default RootStore
