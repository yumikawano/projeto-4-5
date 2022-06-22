import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { product } from "../../entities/Products"
import { RootState } from "../store"

type UserState = {
    cart: product | null
}

const initialState: UserState ={
    cart: null
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state: UserState, action:PayloadAction<product>) => {
            state.cart = action.payload
        },
        deleteToCart: (state:UserState) =>{
            state.cart = null
        }
    }
})

export const {addToCart, deleteToCart} = slice.actions

export default slice.reducer

export const selectCart = (state: RootState) => state.cartData.cart