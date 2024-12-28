import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Form: {
        "id": 0
    },
    Loader: {
        "state": false
    }
}

export const formSlice = createSlice({
    name: "Form",
    initialState,
    reducers: {
        addID: (state, action) => {
            state.Form = action.payload
        },
        loader: (state, action) => {
            state.Loader = !state.Loader

        }
    }

})


export const { addID, loader } = formSlice.actions

export default formSlice.reducer