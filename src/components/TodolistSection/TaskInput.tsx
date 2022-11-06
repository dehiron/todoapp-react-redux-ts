import React, { useState } from 'react';

type TaskInputProps = {};

const TaskInput:React.FC<TaskInputProps> = () => {
    
    const [inputTitle, setInputTitle] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value);
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
                <button className="btn is-primary">追加</button>
            </div>
        </div>
    )
}
export default TaskInput;