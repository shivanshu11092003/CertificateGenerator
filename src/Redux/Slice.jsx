import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Form: {
        "id": 0
    },
    Loader: {
        "state": false
    },
    copyId: {
        'id': 0
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
            state.Loader = action.payload

        },
        copyIdReducer: (state, action) => {
            state.copyId = action.payload

        }
    }

})


export const { addID, loader, copyIdReducer } = formSlice.actions

export default formSlice.reducer