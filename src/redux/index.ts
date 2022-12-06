import { configureStore } from '@reduxjs/toolkit'
import productsReducer  from './productsReducer'

export const store = configureStore({
	reducer: {
		products: productsReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch