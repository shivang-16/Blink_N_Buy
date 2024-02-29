import { ProductState, ProductType, UserState, UserType } from "@/types/global";
import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
  loading: false,
};

export const productSlice: Slice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    getProductReqeust: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, action: PayloadAction<ProductType>) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  getProductFail,
  getProductReqeust, 
  getProductSuccess
} = productSlice.actions;

export default productSlice.reducer;
