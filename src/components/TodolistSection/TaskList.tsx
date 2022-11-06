import React from 'react';
import { Task } from '../../Types';
import TaskItem from './TaskItem';

type TaskListProps = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>> //元のsetTasksにカーソル合わせると出してくれる
};

const TaskList:React.FC<TaskListProps> = ({ tasks, setTasks }) => {
    
    const handleDone = (task: Task) => {
        setTasks((prev) => prev.map((inlistTask) => 
            inlistTask.id === task.id
            ? {...task, done: !task.done}
            : inlistTask
        ))
    }

    const handleDelete = (task: Task) => {
        setTasks((prev) => prev.filter((inlistTask) => 
            inlistTask.id !== task.id
        ))
    }

    return (
        <div className="inner">
            {
                tasks.length <= 0 
                ? 
                "登録されたTODOはありません"
                :
                <ul className="task-list">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            handleDone={handleDone}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            }

        </div>
    )
}
export default TaskList;