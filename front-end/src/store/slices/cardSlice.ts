import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { product } from "../../entities/Products"
import { RootState } from "../store"

type ProductState = {
    cart: Array<product> 
}

const initialState: ProductState ={
    cart: []
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state: ProductState, action:PayloadAction<product>) => {
            const cart = state.cart || []
            state.cart = [...cart,action.payload]
        },
        deleteToCart: (state:ProductState, action:PayloadAction<product>) =>{
            state.cart = state.cart.filter(cart=>cart.id !== action.payload.id)
            console.log(action.payload)
        }
    }
})

export const {addToCart, deleteToCart} = slice.actions

export default slice.reducer

export const selectCart = (state: RootState) => state.cartData.cart