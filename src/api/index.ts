import axios from 'axios'

const BASE_PATH = 'http://91.210.170.181:8080/api'

export const getProductsAPI = async () => {
	const { data } = await axios.get(`/api/product`)
	return data
}

export const getProductByIdAPI = async (id: string) => {
	const { data } = await axios.get(`/api/product/${id}`)
	return data
}

