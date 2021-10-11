import * as C from './style'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, KeyboardEvent } from 'react'

type Props = {
    onEnter: (taskName:String) => void
}

export const AddArea = ({onEnter}:Props) => {

    const [inputText, setInputText] = useState('')

    const handleNewTask = (e:KeyboardEvent) => {
        let key = e.code
        if(key === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }

    return(
        <C.Container>
            <AiOutlinePlus className="icon-plus"/>
            <input 
                value = {inputText}
                type = "text" 
                placeholder = "Adicionar nova tarefa"
                onChange = { e => setInputText(e.target.value) }
                onKeyUp = { e => handleNewTask(e) }
            />
        </C.Container>
    )
}