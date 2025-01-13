import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets'
import { AdminSideBar } from '@/widgets/sideBar/AdminSideBar'
import { NextPage } from 'next'

import s from './adminLayou.module.scss'

export const AdminLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <div className={s.adminRoot}>
      <Header isAuth />

      <div className={s.main}>
        <AdminSideBar />
        {children ? children : null}
      </div>
    </div>
  )
}

export const getAdminLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>
}
