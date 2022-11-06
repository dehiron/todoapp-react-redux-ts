import React, { useState } from 'react';
import { Task } from '../../Types';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

type SecondComponentProps = {};

// reduxの導入により不要になった
// const initialTodos: Task[] = [
//     {
//         id: 2,
//         title: "次のTodo",
//         done:false
//     },
//     {
//         id: 1,
//         title: "最初のTodo",
//         done:true
//     },
// ]

const SecondComponent:React.FC<SecondComponentProps> = () => {

    // const [tasks, setTasks] = useState(initialTodos)
    
    return (
        <>
            <p>Todoリストで遊ぶ</p>
            <TaskInput 
                // tasks={tasks}        // reduxの導入により不要になった
                // setTasks={setTasks}  // reduxの導入により不要になった
            />
            <TaskList 
                // tasks={tasks} // reduxの導入により不要になった
                // setTasks={setTasks} // reduxの導入により不要になった
            />
        </>
    )
}
export default SecondComponent;