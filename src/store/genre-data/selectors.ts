import { createSelector } from '@reduxjs/toolkit';
import { State, GenreState } from '../../types/state';
import { NameSpace, DEFAULT_GENRE, GENRES } from '../../const';

export const getActiveGenre = createSelector(
  (state: State) => state[NameSpace.Genre],
  (state: GenreState) => state.activeGenre
);

export const getFilmsByGenre = createSelector(
  (state: State) => state[NameSpace.Genre],
  (state: GenreState) => state.filmsByGenre
);

export const getIsLoading = createSelector(
  (state: State) => state[NameSpace.Genre],
  (state: GenreState) => state.isLoading
);

export const getGenres = createSelector(() => [
  DEFAULT_GENRE,
  ...GENRES,
]);
