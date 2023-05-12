import { LiHTMLAttributes } from 'react'
import style from './listItem.module.css'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  text: string
}

export function ListItem({ text, className }: Props) {
  return <li className={finalStyle}>{text}</li>
}
