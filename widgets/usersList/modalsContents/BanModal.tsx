import React, { useState } from 'react'

import { Button, Select } from '@/shared'
import { Typography } from '@/shared/components/typography/Typography'
import { useBannedOptions } from '@/widgets/usersList/constants'
import { useUsersListHook } from '@/widgets/usersList/hook/useUsersListHook'

import s from './modalsStyle.module.scss'
type Props = {
  setBannedModalOpen: (value: boolean) => void
  userId: string
}
const BanModal = ({ setBannedModalOpen, userId }: Props) => {
  const { t } = useUsersListHook()
  const [selectValue, setSelectValue] = useState<string | undefined>(t.banOptions.reason)
  const handleClose = () => {
    setBannedModalOpen(false)
    setSelectValue(t.banOptions.reason)
  }

  return (
    <div className={s.modalContent}>
      <Typography className={s.alarmTitleW} variant={'Bold_text-16'}>
        {t.banAlarmTitle} Ivan Ivanov?
      </Typography>
      <Select
        className={s.banSelector}
        // defaultValue={t.banOptions.reason}
        items={useBannedOptions()}
        name={'banSelect'}
        onChange={(key, value) => {
          setSelectValue(value)
        }}
        value={selectValue}
      />
      <div className={s.buttonContainer}>
        <Button className={s.noButton} onClick={handleClose} variant={'primary'}>
          {t.no}
        </Button>
        <Button className={s.yesButton} variant={'primary'}>
          {t.yes}
        </Button>
      </div>
    </div>
  )
}

export default BanModal
