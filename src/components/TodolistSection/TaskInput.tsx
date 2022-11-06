import React, { useState } from 'react';
import { Task } from '../../Types';
import { useDispatch } from "react-redux";
import { addTask } from '../../redux/slices/tasksSlice';


//reduxにより不要になった
type TaskInputProps = {
    // tasks: Task[],
    // setTasks:  React.Dispatch<React.SetStateAction<Task[]>> //元のsetTasksにカーソル合わせると出してくれる
};

const TaskInput:React.FC<TaskInputProps> = ({
    // tasks,
    // setTasks,
}) => {
    
    const dispatch = useDispatch();

    const [inputTitle, setInputTitle] = useState("")
    // const [ count, setCount ] = useState(tasks.length + 1) //reduxの導入により不要になった

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value);
    }

    // reduxの導入により不要になった
    // const handleAddTodo = () => {
    //     setCount(count + 1)
    //     const newTask: Task = {
    //         id: count,
    //         title: inputTitle,
    //         done: false
    //     }
    //     setTasks([newTask, ...tasks])
    //     setInputTitle("")
    // }

    const handleAddTodo = () => {
        dispatch(addTask(inputTitle));
        setInputTitle("");
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