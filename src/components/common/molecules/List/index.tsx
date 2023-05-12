import { HTMLAttributes, DetailedHTMLProps } from 'react'
import { ListItem } from '../../atoms/ListItem'
import style from './list.module.css'
import { Definition } from '@/types/dictionary'
import { Molecule } from '@/types/components'

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items: Definition[]
}

export function List({ items, className }: Props): Molecule {
  const finalStyle = !className ? style.ul : `${style.ul} ${className}`

  return (
    <ul className={finalStyle}>
      {items.map((item) => (
        <ListItem
          className={style.li}
          key={item.definition}
          definition={item.definition}
          example={item.example}
        />
      ))}
    </ul>
  )
}
