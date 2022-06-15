import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmState } from '../../types/state';

const initialState: FilmState = {
  activeFilm: null,
  isLoading: false,
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setActiveFilm: (state, action) => {
      state.activeFilm = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setActiveFilm, setLoading } = filmData.actions;
