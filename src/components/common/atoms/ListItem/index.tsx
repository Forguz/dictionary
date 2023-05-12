import { LiHTMLAttributes } from 'react'
import style from './listItem.module.css'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  definition: string
  example?: string
}

export function ListItem({ definition, example, className }: Props) {
  const finalStyle = !className ? style.li : `${style.li} ${className}`

  return (
    <li className={finalStyle}>
      {definition}
      {example && <span>"{example}"</span>}
    </li>
  )
}
