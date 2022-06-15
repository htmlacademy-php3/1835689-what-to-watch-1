import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteFilmsState } from '../../types/state';

const initialState: FavoriteFilmsState  = {
  favoriteFilms: [],
  isLoading: false,
};

export const favoriteFilmsData = createSlice({
  name: NameSpace.FavoriteFilms,
  initialState,
  reducers: {
    setFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setFavoriteFilms, setLoading } = favoriteFilmsData.actions;
