const url=import.meta.env.VITE_BACK_END_URL
const jsconfig={withCredentials:true}
import axios from "axios"
export const signup=async(data)=>{
    try{
        const res=await axios.post(`${url}`,data,jsconfig)

    }catch(err){
        throw {isSuccess:false,err}
    }
}