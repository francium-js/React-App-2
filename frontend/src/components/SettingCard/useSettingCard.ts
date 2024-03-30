import { useEffect, useRef, useState } from 'react'

export const useSettingCard = () => {
  const [vanish, setVanish] = useState(false)

  const settingCardRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (
      settingCardRef.current &&
      !settingCardRef.current.contains(e.target as Node)
    ) {
      setVanish(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setVanish])

  return { vanish, setVanish, settingCardRef }
}
