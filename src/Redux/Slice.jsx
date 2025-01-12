import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Form: {
        "id": 0
    },
    Loader: {
        "state": 0
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
        loaderAdd: (state) => {
            state.Loader++;

        },
        loaderMinus: (state) => {
            state.Loader--;

        },
        copyIdReducer: (state, action) => {
            state.copyId = action.payload

        }
    }

})


export const { addID, loaderAdd, loaderMinus, copyIdReducer } = formSlice.actions

export default formSlice.reducer