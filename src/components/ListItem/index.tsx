import * as C from './style'
import { Item } from '../../types/item'
import { useState, MouseEvent } from 'react'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({item, onChange}:Props) => {
    return(
        <C.Container check={item.check}>
            <input 
                type="checkbox" 
                id={`${item.id}`}
                checked = {item.check}
                onChange={e => onChange(item.id, e.target.checked)}
            />  
            <label htmlFor={`${item.id}`}>{item.name} - {item.check.toString()}</label>
        </C.Container>
    )
}