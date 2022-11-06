import React from 'react';
import { Task } from '../../Types';
import TaskItem from './TaskItem';
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

//reduxにより不要になった
type TaskListProps = {
    // tasks: Task[]
    // setTasks: React.Dispatch<React.SetStateAction<Task[]>> //元のsetTasksにカーソル合わせると出してくれる
};

const TaskList:React.FC<TaskListProps> = ({ 
    // tasks, //reduxにより不要になった
    // setTasks //reduxにより不要になった
}) => {
    
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    //reduxにより不要になった
    // const handleDone = (task: Task) => {
    //     setTasks((prev) => prev.map((inlistTask) => 
    //         inlistTask.id === task.id
    //         ? {...task, done: !task.done}
    //         : inlistTask
    //     ))
    // }

    //reduxにより不要になった
    // const handleDelete = (task: Task) => {
    //     setTasks((prev) => prev.filter((inlistTask) => 
    //         inlistTask.id !== task.id
    //     ))
    // }

    return (
        <div className="inner">
            {
                tasks.length <= 0 
                ? 
                "登録されたTODOはありません"
                :
                <ul className="task-list">
                    {tasks.map((task: Task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            // handleDone={handleDone} //reduxにより不要になった
                            // handleDelete={handleDelete}　//reduxにより不要になった
                        />
                    ))}
                </ul>
            }

        </div>
    )
}
export default TaskList;