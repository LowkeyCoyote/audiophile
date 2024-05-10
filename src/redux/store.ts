import {configureStore} from "@reduxjs/toolkit"
import { persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import cartReducer from "./reducer/cartSlice"

const persistConfig = {
    key: 'root',
    storage
};


const persistedReducer = persistReducer(persistConfig, cartReducer)




export const store = configureStore({
    reducer : {
        cart : persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck:false})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch