import { createSlice } from '@reduxjs/toolkit';

// Cambiamos nameSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const nameSlice = createSlice({
		name: 'name',
    initialState: '',
    reducers: {
        changeName: (state, action) => {
          const inputName = action.payload;
          return inputName
        }
    }
})

export const { changeName } = nameSlice.actions;

export default nameSlice.reducer;