import { LiHTMLAttributes } from 'react'
import style from './listItem.module.css'
import { Atom } from '@/types/components'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  definition: string
  example?: string
}

export function ListItem({ definition, example, className }: Props): Atom {
  const finalStyle = !className ? style.li : `${style.li} ${className}`

  return (
    <li className={finalStyle}>
      <p aria-label="definition">{definition}</p>
      {example && (
        <span>
          <p aria-label="example">"{example}"</p>
        </span>
      )}
    </li>
  )
}
