import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PromoState } from '../../types/state';

const initialState: PromoState = {
  promoFilm: null,
  isLoading: false,
};

export const promoData = createSlice({
  name: NameSpace.Promo,
  initialState,
  reducers: {
    setPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPromoFilm, setLoading } = promoData.actions;
