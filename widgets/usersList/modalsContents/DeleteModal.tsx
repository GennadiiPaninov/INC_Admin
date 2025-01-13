import React from 'react'

import { useDeleteUserByIdMutation } from '@/entities/queries/deleteUser.types'
import { Button } from '@/shared'
import { Typography } from '@/shared/components/typography/Typography'
import { useUsersListHook } from '@/widgets/usersList/hook/useUsersListHook'

import s from './modalsStyle.module.scss'
type Props = {
  setDeleteUserModalOpen: (val: boolean) => void
  userId: string
}
export const DeleteModal = ({ setDeleteUserModalOpen, userId }: Props) => {
  const { t } = useUsersListHook()
  const [deleteUserByIdMutation, { data, error, loading }] = useDeleteUserByIdMutation()
  const handleDeleteUserById = () => {
    deleteUserByIdMutation({
      variables: {
        userId: userId,
      },
    }).then(r => console.log(r))
  }

  return (
    <div className={s.modalContent}>
      <Typography className={s.alarmTitleW} variant={'Bold_text-16'}>
        {t.deleteAlarmTitle} Ivan Ivanov?
      </Typography>
      <div className={s.buttonContainer}>
        <Button
          className={s.noButton}
          onClick={() => setDeleteUserModalOpen(false)}
          variant={'primary'}
        >
          {t.no}
        </Button>
        <Button
          className={s.yesButton}
          onClick={() => {
            handleDeleteUserById()
            setDeleteUserModalOpen(false)
          }}
          variant={'primary'}
        >
          {t.yes}
        </Button>
      </div>
    </div>
  )
}
