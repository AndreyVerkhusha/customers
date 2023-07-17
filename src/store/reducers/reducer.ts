import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type State = {
    open: boolean
}
const initialState: State = {
    open: true
};

export const sidebarReducer = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        }
    }
});
export const {setValue} = sidebarReducer.actions;
export default sidebarReducer.reducer;