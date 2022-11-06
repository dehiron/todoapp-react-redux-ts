import React from 'react';
import { Task } from '../../Types';
import TaskItem from './TaskItem';

type TaskListProps = {
    tasks: Task[]
};

const TaskList:React.FC<TaskListProps> = ({ tasks }) => {
    
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
                        />
                    ))}
                </ul>
            }

        </div>
    )
}
export default TaskList;