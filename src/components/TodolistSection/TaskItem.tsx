import React from 'react';
import { Task } from '../../Types';

type TaskItemProps = {
  task : Task  
  handleDone : (task: Task) => void //taskを引数として受け取り、何も返さないのでvoidを返す
  handleDelete: (task: Task) => void //taskを引数として受け取り、何も返さないのでvoidを返す
};

const TaskItem:React.FC<TaskItemProps> = ({ task, handleDone, handleDelete }) => {
    return (
        <li className={task.done ? "done" : ""}>
            <label>
                <input 
                    type="checkbox" 
                    className='checkbox-input' 
                    onClick={() => {handleDone(task)}}
                    defaultChecked={task.done}
                />
                <span className="checkbox-label">{task.title}</span>
            </label>
            <button 
                className="btn is-delete"
                onClick={() => {handleDelete(task)}}
            >
                    削除
            </button>
        </li>
    )
}
export default TaskItem;