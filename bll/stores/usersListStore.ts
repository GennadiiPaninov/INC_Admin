import { UserBlockStatus } from '@/entities/types'
import { makeAutoObservable } from 'mobx'
type SearchParam = {
  currentPage: number
  pageSize: string
  search: string
  statusFilter: UserBlockStatus
}
type Modals = {
  bannedUserModal: boolean
  deleteUser: boolean
}
class UsersListStore {
  public modals: Modals = {
    bannedUserModal: false,
    deleteUser: false,
  }
  public searchParam: SearchParam = {
    currentPage: 1,
    pageSize: '8',
    search: '',
    statusFilter: UserBlockStatus.All,
  }
  constructor() {
    makeAutoObservable(this)
  }

  public setModalOpen(value: any): void {
    this.modals = {
      ...this.modals,
      ...value,
    }
  }
  public setSearchParam(value: any): void {
    this.searchParam = {
      ...this.searchParam,
      ...value,
    }
  }
}
export const usersListStore = new UsersListStore()
