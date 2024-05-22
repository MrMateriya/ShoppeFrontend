import {createSlice} from "@reduxjs/toolkit";
import {reducer} from "next/dist/client/components/router-reducer/router-reducer";

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    deleteUser(state, action) {
      state.user = {}
    }
  }
})

export const { setUser, deleteUser } = userSlice.actions
export default userSlice.reducer