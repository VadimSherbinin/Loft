import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/index'
import { Provider } from 'react-redux'

const element: HTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element)

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
