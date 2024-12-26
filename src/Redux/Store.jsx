import { configureStore } from '@reduxjs/toolkit'
import formReducer from './Slice'


export default configureStore({
    reducer: {
        form: formReducer,
    }

})

