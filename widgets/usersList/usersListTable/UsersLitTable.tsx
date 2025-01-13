import { useState } from 'react'

import { useGetAllUsersQuery } from '@/entities/queries/usersList.types'
import { Button } from '@/shared'
import { useTranslationPages } from '@/shared/assets'
import { formatDate } from '@/shared/assets/helpers/formDate'
import { Pagination } from '@/shared/components/pagination'
import { Table } from '@/shared/components/table'
import { Typography } from '@/shared/components/typography/Typography'
import { tableUsersListHead } from '@/widgets/usersList/constants/tableUsersListHead'
import { useUsersListHook } from '@/widgets/usersList/hook/useUsersListHook'
import { UsersListTableController } from '@/widgets/usersList/usersListTable/usersListTableController/UsersListTableController'
import { observer } from 'mobx-react-lite'

import s from './usersListTable.module.scss'
export const UsersListTable = observer(() => {
  const { t } = useTranslationPages()

  const { currentPage, onChangeCurrentPage, onChangePageSize, pageSize, search, statusFilter } =
    useUsersListHook()

  const { data, error, loading } = useGetAllUsersQuery({
    variables: {
      pagination: {
        page: currentPage,
        pageSize: Number(pageSize),
        search: search,
        statusFilter: statusFilter,
      },
    },
  })

  if (loading) {
    return <div>...loading</div>
  }

  return (
    <>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            {tableUsersListHead.map(el => {
              return (
                <Table.HeadCell key={el.title}>
                  <Typography className={s.headTitleWithSort} variant={'Semi-bold_middle-text'}>
                    {/*@ts-ignore*/}
                    {t[el.title]}
                    {el.sortBy && <div>sort</div>}
                  </Typography>
                </Table.HeadCell>
              )
            })}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.getUsers?.items.map(item => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <Typography variant={'regular_text-14'}>{item.id}</Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography variant={'regular_text-14'}>{item.username}</Typography>
                </Table.Cell>
                <Table.Cell>
                  <Button as={'a'} href={item.profileLink} variant={'link'}>
                    {' '}
                    <Typography variant={'regular_text-14'}>{item.username}</Typography>
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Typography variant={'regular_text-14'}>{formatDate(item.createdAt)}</Typography>
                </Table.Cell>
                <Table.Cell>
                  <UsersListTableController userId={item.id} />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
      <Pagination
        currentPage={currentPage}
        onChangePageSize={onChangePageSize}
        onPageChange={onChangeCurrentPage}
        pageSize={Number(pageSize)}
        totalCount={data?.getUsers.totalCount || 1}
      />
    </>
  )
})
