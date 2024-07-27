import axios from '../axios'
import { toFormData } from 'axios'

const getAllShops = async () => {
  try {
    const shops = await axios.get('/v1/api/shops/list-all-shops')
    return shops.metadata
  } catch (error) {
    console.log(error)
  }
}
const createNewShop = async (data, file) => {
  const { email, name, password } = data
  try {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    const res = await axios.post('/v1/api/shops/create', formData);
    return res
  } catch (error) {
    return error.response
  }
}
const login = async (data) => {
  try {
    const res = await axios.post('/v1/api/shop/login', data)
    return res
  } catch (error) {
    return error.response
  }
}
const getShop = async () => {
  try {
    const res = await axios.get('/v1/api/shops/getshop')
    return res
  } catch (error) {
    console.log(error)
  }
}
const importManyShops = async (data) => {
  try {
    const res = await axios.post('/v1/api/shops/import-many-shops', data)
    return res
  } catch (error) {
    console.log(error)
  }
}
export {
  getAllShops,
  createNewShop,
  login,
  getShop,
  importManyShops
}
