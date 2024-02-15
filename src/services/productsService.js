// import React from 'react'
import axios from '../axios/myAxios'

const ApiGetAll = () => {
    return axios.get(`api/product/GetAll`)
}

const ApiGetAllCategory = () => {
    return axios.get(`api/category/GetAll`)
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

export { ApiGetAll, ApiGetAllCategory, ApiGetAllSubCategory, ApiGetAllSubCategoryByCategoryId, ApiGetAllProductBySubCategoryId }