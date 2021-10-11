import { useState } from 'react';
import * as C from './App.styles'
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';
import { Item } from './types/item';


const App = () => {

    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'Comprar pão na padaria', check: false}
    ])

    const handleList = (taskName:String) => {
        let newList = [...list]
        newList.push({
            id: list.length+1,
            name: `${taskName}`,
            check: false
        })
        setList(newList)
    }
    
    const handleTaskChange = (id: number, check: boolean) => {
        let newList = [...list];
        for(let i in newList) {
          if(newList[i].id === id) {
            newList[i].check = check;
          }
        }
        setList(newList);
      }

    return(
        <C.Containter>
            <C.Area>
                <C.Header>Lista de Tarefas</C.Header>

                <AddArea onEnter = {handleList}/>    

                {list.map((item, index) => (
                    <ListItem key={index} item={item} onChange={handleTaskChange}/>
                ))}

            </C.Area>
        </C.Containter>
    );
}

export default App;