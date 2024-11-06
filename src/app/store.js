import {configureStore} from '@reduxjs/toolkit'
import { leadsApi } from '../services/leadApi'

export const store = configureStore({
    reducer:{
        [leadsApi.reducerPath] : leadsApi.reducer
    },

    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(leadsApi.middleware)

})