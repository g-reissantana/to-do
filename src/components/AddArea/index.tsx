import { KeyboardEvent, useState, MouseEvent } from 'react'
import * as C from './style'
import { AiOutlinePlusCircle } from "react-icons/ai";

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('')
        }
    }

    const handleClickTask = (e:MouseEvent) => {
        if(inputText !== '') {
            onEnter(inputText);
            setInputText('')
        } else {
            alert('O campo de tarefa não pode ser vazio')
        }
    }

    return(
        <C.Container>
            <AiOutlinePlusCircle onClick={e => handleClickTask(e)} className="icon-plus"/>
            <input
                value={inputText}
                type = "text" 
                placeholder = "Adicionar uma tarefa"
                onChange = { e => setInputText(e.target.value)}
                onKeyUp = { e => handleKeyUp(e) }
            />
        </C.Container>
    )
}