import { HTMLAttributes, DetailedHTMLProps } from 'react'
import { ListItem } from '../../atoms/ListItem'
import style from './list.module.css'

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items: string[]
}

export function List({ items, className }: Props) {
  const finalStyle = !className ? style.ul : `${style.ul} ${className}`

  return (
    <ul className={finalStyle}>
      {items.map((item) => (
        <ListItem className={style.li} key={item} text={item} />
      ))}
    </ul>
  )
}
