import { RootState } from '@/app'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string | null
  email: string | null
  photo: string | null
}

const initialState: UserState = {
  name: null,
  email: null,
  photo: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action: PayloadAction<UserState>) => {
      const { name, email, photo } = action.payload
      state.name = name
      state.email = email
      state.photo = photo
    },

    setSignOutState: (state) => {
      state.name = null
      state.email = null
      state.photo = null
    },
  },
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export const userReducer = userSlice.reducer
