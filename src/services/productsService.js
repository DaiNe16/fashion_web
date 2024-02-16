// import React from 'react'
import axios from '../axios/myAxios'

const ApiGetAll = () => {
    return axios.get(`api/product/GetAll`)
}

const ApiGetAllCategory = () => {
    return axios.get(`api/category/GetAll`)
}

const ApiCreateCategory = (data) => {
    return axios.post(`api/category/CreateCategory`, data, {
        headers: {
        'Content-Type': 'application/json'
        }
    })
}

const ApiUpdateCategory = (data) => {
    return axios.put(`api/category/UpdateCategory`, data, {
        headers: {
        'Content-Type': 'application/json'
        }
    })
}

const ApiDeleteCategory = (id) => {
    return axios.delete(`api/category/DeleteCategory/${id}`)
}

const ApiGetAllSubCategory = () => {
    return axios.get(`api/SubCategory/GetAll`)
}

const ApiGetAllSubCategoryByCategoryId = (id) => {
    return axios.get(`api/SubCategory/GetAllSubCategoryByCategoryId/`+id)
}

const ApiGetAllProductBySubCategoryId = (id) => {
    return axios.get(`api/product/GetAllProductBySubCategoryId/`+id)
}

const ApiGetAllProductById = (id) => {
    return axios.get(`api/product/GetProductById/`+id)
}



export { ApiGetAll, 
    ApiGetAllCategory, 
    ApiGetAllSubCategory, 
    ApiGetAllSubCategoryByCategoryId, 
    ApiGetAllProductBySubCategoryId, 
    ApiGetAllProductById,
    ApiCreateCategory,
    ApiUpdateCategory,
    ApiDeleteCategory }