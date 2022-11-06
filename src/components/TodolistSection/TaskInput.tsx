import React, { useState } from 'react';
import { Task } from '../../Types';

type TaskInputProps = {
    tasks: Task[],
    setTasks:  React.Dispatch<React.SetStateAction<Task[]>> //元のsetTasksにカーソル合わせると出してくれる
};

const TaskInput:React.FC<TaskInputProps> = ({tasks, setTasks}) => {
    
    const [inputTitle, setInputTitle] = useState("")
    const [ count, setCount ] = useState(tasks.length + 1)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value);
    }

    const handleAddTodo = () => {
        setCount(count + 1)
        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false
        }
        setTasks([newTask, ...tasks])
        setInputTitle("")
    }

    return (
        <div className="input-form">
            <div className="inner">
                <input
                    type="text"
                    className="input"
                    value={inputTitle}
                    onChange={handleInputChange}
                />
                <button 
                    onClick={handleAddTodo} 
                    className="btn is-primary"
                >
                    追加
                </button>
            </div>
        </div>
    )
}
export default TaskInput;