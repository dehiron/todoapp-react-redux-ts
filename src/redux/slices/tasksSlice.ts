import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../Types"

type State = {
    count: number
    tasks: Task[]
}

const initialState: State = {
    count: 2,
    tasks: [
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
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask (state:State , action:PayloadAction<string> ) { //titleが渡ってくるので<string>、これでtitleのエラーが消える
            state.count++

            const newTask: Task = {
                id: state.count,
                title: action.payload,
                done: false,
            }
            state.tasks = [newTask, ...state.tasks]
        },
        doneTask (state: State, action:PayloadAction<Task> ) { //<Task>これでaction.payload.idのエラーが消える
            const task = state.tasks.find((inlistTask) => inlistTask.id === action.payload.id)
            
            if (task) {
                task.done = !task.done
            }
        },
        deleteTask (state: State, action: PayloadAction<Task>) { //<Task>これでaction.payload.idのエラーが消える
            state.tasks = state.tasks.filter((inlistTask) => inlistTask.id !== action.payload.id)

        }
    }
})

export const {
    addTask, doneTask, deleteTask
} = tasksSlice.actions;

export default tasksSlice.reducer;