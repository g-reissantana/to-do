import { useState } from 'react';
import * as C from './App.styles'
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';
import { Item } from './types/item';


const App = () => {

    const [list, setList] = useState<Item[]>([
    ])

    const addNewTask = (taskName:String) => {
        let newList = [...list]
        newList.push({
            id:list.length+1,
            name:`${taskName}`,
            check: false
        })
        setList(newList)
    }

    const Lista = () => {
        if(list.length == 0) {
            return (
                <h1 style={{textAlign: 'center', marginTop: '90px'}}>Você ainda não tem tarefas criadas</h1>
            )
        }
    }

    return(
        <C.Containter>
            <C.Area>
                <C.Header>Lista de Tarefas</C.Header>

                <AddArea onEnter={addNewTask}/>

                {Lista()}

                {list.map((item, index) => (
                    <ListItem key={index} item={item}/>
                ))}

            </C.Area>
        </C.Containter>
    );
}

export default App;