import React from 'react'

import { Card, ControlledTextField } from '@/shared'
import { ControlledSelect } from '@/shared/components/controled/ControlledSelect'
import { useOptions } from '@/widgets/usersList/constants'
import { useUsersListHook } from '@/widgets/usersList/hook/useUsersListHook'

import s from './usersListController.module.scss'

export const UsersListController = () => {
  const { control, errors, getValues, handleSubmit, onSubmit, reset } = useUsersListHook()

  const handleReset = (data: string) => {
    reset({
      search: '',
    })
  }

  return (
    <Card as={'form'} className={s.rootUsersListForm} onChange={handleSubmit(onSubmit)}>
      <ControlledTextField
        className={s.usersListInput}
        control={control}
        name={'search'}
        onClearClick={handleReset}
        placeholder={'Search'}
        type={'search'}
      />
      <ControlledSelect
        className={s.usersListSelector}
        control={control}
        items={useOptions()}
        name={'statusFilter'}
      />
    </Card>
  )
}
