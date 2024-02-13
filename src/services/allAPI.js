import { commonAPI } from "./commonAPI"
import { BASE_URL } from "./baseurl"


export const addTodoAPI = async(todo)=>{
    return await commonAPI('POST',`${BASE_URL}/todo/addtodo`,todo,"")
   }

export const getTodoAPI = async()=>{
    return await commonAPI('GET',`${BASE_URL}/todo/gettodo`)
   }
 
