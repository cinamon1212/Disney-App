import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  name: string | null
  email: string | null
  photo: string | null
}

export interface State {
  user: UserState
}

const initialState: State = {
  user: {
    name: null,
    email: null,
    photo: null,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action: PayloadAction<UserState>) => {
      const { name, email, photo } = action.payload
      state.user.name = name
      state.user.email = email
      state.user.photo = photo
    },

    setSignOutState: (state) => {
      state.user.name = null
      state.user.email = null
      state.user.photo = null
    },
  },
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions

export const selectUser = (state: State) => state.user

export const userReducer = userSlice.reducer
