import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface SearchState {
  value: string
}

// Define the initial state using that type
const initialState: SearchState = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchText } = searchSlice.actions

export default searchSlice.reducer