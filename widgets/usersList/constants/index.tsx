import { useTranslationPages } from '@/shared/assets'

export const useOptions = () => {
  const { t } = useTranslationPages()

  return [
    { title: t.notSelected, value: t.notSelected },
    { title: t.notBlocked, value: t.notBlocked },
    { title: t.blocked, value: t.blocked },
  ]
}

export const useBannedOptions = () => {
  const { t } = useTranslationPages()

  return [
    { title: t.banOptions.advertising, value: t.banOptions.advertising },
    { title: t.banOptions.another, value: t.banOptions.another },
    { title: t.banOptions.behavior, value: t.banOptions.behavior },
  ]
}
