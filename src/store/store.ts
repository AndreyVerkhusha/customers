import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/store/reducers/reducer";

export const store = configureStore({
    reducer: {
        sidebarReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch