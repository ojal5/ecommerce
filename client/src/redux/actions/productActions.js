import axios from "axios";

import * as actionTypes from '../constants/productConstants';

const URL = '';
                                                                            //we call api and dispatch values through that
export const getProducts = () => async (dispatch) => {                      //dispatch func internally calls your reducer i.e getProductReducer
    try{                                                                    //async() is a middleware
       const {data} = await axios.get(`${URL}/products`);                   //once the API is called all the values(that are present inside data) will go inside database      
        
       dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload:data });   //when values are dispatched it will go inside productReducer.js 
    }catch(error)
    {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload:error.message });

    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});

        const {data} = await axios.get(`${URL}/product/${id}`);                   

        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data })
    }catch(error)
    {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload:error.message })
    }
}