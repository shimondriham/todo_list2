import { createSlice } from "@reduxjs/toolkit";
import { sortBy } from "lodash"

const KEY_LOCAL = "todo_local";

const initState = localStorage[KEY_LOCAL] ? JSON.parse(localStorage[KEY_LOCAL]) : {
  todos_ar: []
}

const todoSlice = createSlice({
  name:"todos",
  initialState:initState,
  reducers:{
    addNewItem:(state,action) => {
      state.todos_ar.push(action.payload.todoItem);
      state.todos_ar = sortBy(state.todos_ar, "time");
      saveToLocal(state);
    },
    resetAllItem:(state,action) => {
      state.todos_ar = [];
      saveToLocal(state);
    },
    delSingleItem:(state,action) => {
      state.todos_ar = state.todos_ar.filter(
        (item) => item.id != action.payload.delId
      )
      saveToLocal(state);
    }
  }
}) 

const saveToLocal = (state) => {
  localStorage.setItem(KEY_LOCAL, JSON.stringify(state))
}

export const {addNewItem,resetAllItem,delSingleItem} = todoSlice.actions;
export default todoSlice.reducer;