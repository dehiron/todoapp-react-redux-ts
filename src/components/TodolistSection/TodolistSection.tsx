import React, { useState } from 'react';
import { Task } from '../../Types';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

type SecondComponentProps = {
    
};

const initialTodos: Task[] = [
    {
        id: 2,
        title: "次のTodo",
        done:false
    },
    {
        id: 1,
        title: "最初のTodo",
        done:true
    },
]

const SecondComponent:React.FC<SecondComponentProps> = () => {

    const [tasks, setTasks] = useState(initialTodos)
    
    return (
        <>
            <p>Todoリストで遊ぶ</p>
            <TaskInput tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    )
}
export default SecondComponent;