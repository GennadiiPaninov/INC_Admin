import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { useTranslationPages } from '@/shared/assets'
import { debounce } from '@/shared/assets/helpers/debounce'
import { useStores } from '@/shared/assets/hooks/rootStoreContext'
import { useOptions } from '@/widgets/usersList/constants'
import {
  userListControllerFields,
  userListControllerSchema,
} from '@/widgets/usersList/validators/userListControllerSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useUsersListHook = () => {
  const { usersListStore } = useStores()
  const { t } = useTranslationPages()
  // опции selector
  const options = useOptions()
  // форма в контроллере search и choicer --->
  const defaultValues = {
    search: '',
    statusFilter: t.notSelected,
  }
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
    setValue,
  } = useForm<userListControllerFields>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(userListControllerSchema(t)),
  })

  const onSubmit = (data: userListControllerFields) => {
    const filterValue = ['ALL', 'UNBLOCKED', 'BLOCKED']

    console.log(filterValue[options.findIndex(options => options.value == data.statusFilter)])
    const dataWithFilter = {
      ...data,
      statusFilter: filterValue[options.findIndex(options => options.value == data.statusFilter)],
    }

    console.log(dataWithFilter)

    usersListStore.setSearchParam(dataWithFilter)
  }
  const debouncedSubmit = useCallback(debounce(onSubmit, 800), [])
  // <------
  // paginator, изменения для mobx---->
  const onChangePageSize = (...props: string[]) => {
    usersListStore.setSearchParam({ pageSize: props[1] })
    console.log(usersListStore.searchParam.pageSize)
  }
  const onChangeCurrentPage = (value: number) => {
    usersListStore.setSearchParam({ currentPage: value })
  }

  // <------

  // <----
  return {
    control,
    currentPage: usersListStore.searchParam.currentPage,
    errors,
    getValues,
    handleSubmit,
    onChangeCurrentPage,
    onChangePageSize,
    onSubmit: debouncedSubmit,
    pageSize: usersListStore.searchParam.pageSize,
    reset,
    search: usersListStore.searchParam.search,
    statusFilter: usersListStore.searchParam.statusFilter,
    t,
  }
}
