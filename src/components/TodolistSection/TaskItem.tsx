import React from 'react';
import { Task } from '../../Types';
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from '../../redux/slices/tasksSlice';

type TaskItemProps = {
  task : Task  
//   handleDone : (task: Task) => void //taskを引数として受け取り、何も返さないのでvoidを返す　//reduxにより不要になった
//   handleDelete: (task: Task) => void //taskを引数として受け取り、何も返さないのでvoidを返す　//reduxにより不要になった
};

const TaskItem:React.FC<TaskItemProps> = ({ 
    task, 
    // handleDone, //reduxにより不要になった
    // handleDelete //reduxにより不要になった
}) => {

    const dispatch = useDispatch();

    return (
        <li className={task.done ? "done" : ""}>
            <label>
                <input 
                    type="checkbox" 
                    className='checkbox-input' 
                    onClick={() => {
                        // handleDone(task)　//reduxにより不要になった
                        dispatch(doneTask(task))
                    }}
                    defaultChecked={task.done}
                />
                <span className="checkbox-label">{task.title}</span>
            </label>
            <button 
                className="btn is-delete"
                onClick={() => {
                    // handleDelete(task)　//reduxにより不要になった
                    dispatch(deleteTask(task));
                }}
            >
                    削除
            </button>
        </li>
    )
}
export default TaskItem;