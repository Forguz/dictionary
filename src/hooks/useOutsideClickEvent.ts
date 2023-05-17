import React, { RefObject, useEffect } from 'react'

export function useOutsideClickEvent(
  ref: RefObject<HTMLElement>,
  onClick: (arg: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(
      event: React.MouseEvent<HTMLElement, MouseEvent> | MouseEvent
    ) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onClick(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [ref, onClick])
}
