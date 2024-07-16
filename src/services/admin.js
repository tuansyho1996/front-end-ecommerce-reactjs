import axios from '../axios'
import { toFormData } from 'axios'

const getAllShops = async () => {
  const shops = await axios.get('/v1/api/shops/list-all-shops')
  return shops.metadata
}
const createNewShop = async (data, file) => {
  const { email, name, password } = data
  console.log('check email', email)
  try {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    const res = await axios.post('/v1/api/shops/create', formData);
    // const res = await axios({
    //   method: "post",
    //   url: "/v1/api/shops/create",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    return res
  } catch (error) {
    return error.response
  }
}
export {
  getAllShops,
  createNewShop
}
