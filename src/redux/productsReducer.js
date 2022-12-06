import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [
		{ id: '1', name: 'sdfsdf', price: '100000000', title: 'товар' }
	]
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state) => {
		}
	}
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer
