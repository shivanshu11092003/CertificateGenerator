import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Form: {
        "id": 0
    }
}

export const formSlice = createSlice({
    name: "Form",
    initialState,
    reducers: {
        addID: (state, action) => {
            state.Form = action.payload
        },
    }

})


export const { addID } = formSlice.actions

export default formSlice.reducer