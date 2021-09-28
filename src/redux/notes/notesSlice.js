import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name:'notes',
  initialState:{
    notes:[],
    filteredNotes:[]
  },
  reducers:{
    addNote:{
      reducer: (state, action) => {
        state.notes.push(action.payload);
        state.filteredNotes.push(action.payload);
      },
      prepare:({color,body}) => {
        return {
          payload:{
            id:nanoid(),
            color,
            body
          }
        }
      }
    },
    removeNote:(state,action) => {
      const result = state.notes.filter((item) => item.id !== action.payload);
      state.notes = result
      state.filteredNotes = result
    },
    todoSearch:(state, action) => {
      const result = state.notes.filter((item) => item.body.toLowerCase().includes(action.payload));
      state.filteredNotes = result;
    }
  }
})

export const {addNote, removeNote, todoSearch} = notesSlice.actions;
export default notesSlice.reducer;