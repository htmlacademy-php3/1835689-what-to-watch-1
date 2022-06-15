import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE } from '../../const';
import { GenreState } from '../../types/state';

const initialState: GenreState = {
  activeGenre: DEFAULT_GENRE,
  filmsByGenre: [],
  isLoading: false,
};

export const genreData = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {
    setActiveGenre: (state, action) => {
      state.activeGenre = action.payload;
    },
    setFilmsByGenre: (state, action) => {
      state.filmsByGenre = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setActiveGenre, setFilmsByGenre, setLoading } = genreData.actions;
