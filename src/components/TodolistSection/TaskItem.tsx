import React from 'react';
import { Task } from '../../Types';

type TaskItemProps = {
  task : Task  
};

const TaskItem:React.FC<TaskItemProps> = ({ task }) => {
    
    return (
        <li>
            <label>
                <input type="checkbox" className='checkbox-input' />
                <span className="checkbox-label">{task.title}</span>
            </label>
            <button className="btn is-delete">削除</button>
        </li>
    )
}
export default TaskItem;