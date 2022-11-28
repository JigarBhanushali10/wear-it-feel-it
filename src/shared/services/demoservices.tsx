import axios from "axios";
import { environment } from "../../environments/environment";

const baseUrl = environment.url

/**
 * @name getUsers
 * @description service to get Users
 * @returns json data
 */
const getUsers = () => axios.get(`${baseUrl}admin`)
/**
 * @name getUserById
 * @description service to get User by id
 * @returns json data
 */


const httpServices = {
    getUsers,
  
}

export default httpServices