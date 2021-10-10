import * as C from './style'
import { Item } from '../../types/item'
import { useState } from 'react'

type Props = {
    item: Item
}

export const ListItem = ({item}:Props) => {

    const [isChecked, setIsChecked] = useState(item.check)

    return(
        <C.Container check={isChecked}>
            <input 
                type="checkbox" 
                id={`${item.id}`}
                checked = {isChecked}
                onChange = {(e) => {setIsChecked(e.target.checked)}}
            />  
            <label htmlFor={`${item.id}`}>{item.name}</label>
        </C.Container>
    )
}