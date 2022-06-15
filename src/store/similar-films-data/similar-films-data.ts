import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SimilarFilmsState } from '../../types/state';

const initialState: SimilarFilmsState = {
  similarFilms: [],
  isLoading: false,
};

export const similarFilmsData = createSlice({
  name: NameSpace.SimilarFilms,
  initialState,
  reducers: {
    setSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSimilarFilms, setLoading } = similarFilmsData.actions;
