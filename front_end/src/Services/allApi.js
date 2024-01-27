import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./commonApi";

export const vrNoGetTableDetailes=async(vrno)=>{
    return await commonAPI("GET",`${BASE_URL}/tabledata?vrno=${vrno}`,"")
}

export const addTableData=async(body)=>{
    return await commonAPI("POST",`${BASE_URL}/addtable`,body,"")
}

export const deleteTableData=async(body)=>{
    return await commonAPI("DELETE",`${BASE_URL}/deletetable`,body,{})
}
export const addFormData=async(body)=>{
    return await commonAPI("POST",`${BASE_URL}/formdata`,body,"")
}
