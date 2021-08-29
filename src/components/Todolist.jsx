import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem';
import Footer from './Footer';



const Todolist = () => {
    const list = useSelector(state => state.todo.todos)
    const activeFilter = useSelector(state => state.filter);

    const createList = (filter) => {
        switch(filter) {
            case 'all': 
                return list;
                break;
            case 'active':
                return list.filter((item)=> !item.done);
                break;
            case 'completed':
                return list.filter((item)=> item.done);
            default:
                return list;
        }
    }

    const activeList = createList(activeFilter);

    return (
        // <Droppable droppableId="todolist">
        <div className="todocontainer u-margin-bottom-small">
            {list.length === 0 && 
            <h1 className="todoitem__text todolist__item text-center">There are no items yet</h1> }
            <ul className="todolist">
            {activeList.map((item, index)=> <li key={item.id} className="todolist__item">
                <TodoItem key={item.id} item={item} index={index}/>            </li>

             )}
            </ul>

            <Footer left={activeList.length} />
        </div>

        // </Droppable> //
    )

}

export default Todolist