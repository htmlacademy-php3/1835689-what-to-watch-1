import { createSelector } from '@reduxjs/toolkit';
import { State, SimilarFilmsState } from '../../types/state';
import { NameSpace } from '../../const';

export const getSimilarFilms = createSelector(
  (state: State) => state[NameSpace.SimilarFilms],
  (state: SimilarFilmsState) => state.similarFilms
);

export const getIsLoading = createSelector(
  (state: State) => state[NameSpace.SimilarFilms],
  (state: SimilarFilmsState) => state.isLoading
);
