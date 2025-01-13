import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { Paths, protectedRoutes } from '@/shared/assets/constants/paths'
import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { Loader } from '@/shared/components/loader'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export const WithNavigate: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { pathname, push } = useRouter()
  const [isAuth, setIsAuth] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuth(loadFromSessionStorage(authSetting.isLoggedIn))
      setIsLoading(false)
    }

    const handleStorageChange = () => {
      setIsAuth(loadFromSessionStorage(authSetting.isLoggedIn))
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const routeConfig = protectedRoutes.find(route => route.path === pathname)

      // Перенаправление на user маршрут, если не требуется авторизация

      if (isAuth && (pathname == Paths.MAIN || pathname == Paths.LOGIN)) {
        void push(Paths.USERS)
      }
      if (routeConfig) {
        if (routeConfig.requiresAuth && !isAuth) {
          // Перенаправление на указанный маршрут, если требуется авторизация
          void push(routeConfig.redirectTo)
        } else if (isAuth && pathname === Paths.LOGIN) {
          // Перенаправление авторизованных пользователей на основной контент
          void push(Paths.USERS)
        }
      } else if (pathname == '/') {
        if (!isAuth) {
          void push(Paths.LOGIN)
        }
      }
    }
  }, [isAuth, isLoading, pathname, push])

  if (isLoading) {
    return <Loader />
  }

  return <>{children}</>
}
