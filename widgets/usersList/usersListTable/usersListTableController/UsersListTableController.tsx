import React, { useState } from 'react'

import { BanInSystemIcon } from '@/public/icons/BanInSystemIcon'
import { DeleteUserIcon } from '@/public/icons/DeleteUserIcon'
import { TableMenuIcons } from '@/public/icons/TableMenuIcons'
import { Button, Select } from '@/shared'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/dropDownMenu'
import { Modal } from '@/shared/components/modals'
import { Typography } from '@/shared/components/typography/Typography'
import { useUsersListHook } from '@/widgets/usersList/hook/useUsersListHook'
import BanModal from '@/widgets/usersList/modalsContents/BanModal'
import { DeleteModal } from '@/widgets/usersList/modalsContents/DeleteModal'

import s from './usersListTableController.module.scss'

export const UsersListTableController = ({ userId }: { userId: string }) => {
  const { t } = useUsersListHook()
  const [deleteUserModalOpen, setDeleteUserModalOpen] = useState(false)
  const [bannedModalOpen, setBannedModalOpen] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      <DropdownMenu open={open}>
        <DropdownMenuTrigger>
          <Button as={'a'} className={s.tableMenu} onClick={() => setOpen(true)} variant={'icon'}>
            <TableMenuIcons />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent onPointerDownOutside={() => setOpen(false)}>
          <DropdownMenuItem className={s.tableMenuItem}>
            <Button
              onClick={() => {
                setOpen(false)
                setDeleteUserModalOpen(true)
              }}
              variant={'icon'}
            >
              <DeleteUserIcon />
              <Typography variant={'regular_text-14'}>
                {t.tableUsersListControllerLocale.deleteUser}
              </Typography>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className={s.tableMenuItem}>
            <Button
              onClick={() => {
                setOpen(false)
                setBannedModalOpen(true)
              }}
              variant={'icon'}
            >
              <BanInSystemIcon />
              <Typography variant={'regular_text-14'}>
                {t.tableUsersListControllerLocale.banInTheSystem}
              </Typography>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className={s.tableMenuItem}>
            <Button variant={'icon'}>
              <TableMenuIcons />
              <Typography variant={'regular_text-14'}>
                {t.tableUsersListControllerLocale.moreInformation}
              </Typography>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Modal
        className={s.modalSpace}
        onOpenChange={setBannedModalOpen}
        open={bannedModalOpen}
        title={t.banUserTitle}
      >
        <BanModal setBannedModalOpen={setBannedModalOpen} userId={userId} />
      </Modal>
      <Modal
        className={s.modalSpace}
        onOpenChange={setDeleteUserModalOpen}
        open={deleteUserModalOpen}
        title={t.deleteUserTitle}
      >
        <DeleteModal setDeleteUserModalOpen={setDeleteUserModalOpen} userId={userId} />
      </Modal>
    </>
  )
}
