import { RootState } from '@/app'
import { MovieState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: MovieState = {
  recommend: [],
  new: [],
  original: [],
  trending: [],
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieState>) => {
      state.recommend = action.payload.recommend
      state.new = action.payload.new
      state.original = action.payload.original
      state.trending = action.payload.trending
    },
  },
})

export const { setMovies } = movieSlice.actions

export const selectMovie = (state: RootState) => state.movie

export const movieReducer = movieSlice.reducer
