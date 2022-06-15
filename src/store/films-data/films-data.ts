import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsState } from '../../types/state';

const initialState: FilmsState = {
  films: [],
  isLoading: false,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.films = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFilm: (state, action) => {
      const index = state.films.findIndex((film) => film.id === action.payload.id);
      state.films[index] = action.payload;
    }
  },
});

export const { setFilms, setLoading, setFilm } = filmsData.actions;
