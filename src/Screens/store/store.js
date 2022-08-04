import { configureStore,createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
const initialState = {data : {} }

const codeSlice = createSlice({
    name : "slice",
    initialState : initialState,
    reducers : {
        setData(state, action){
            state.data = action.payload
        }
    }
})

export const dataAction = codeSlice.actions
const store = configureStore({
    reducer : codeSlice.reducer
})
export default store