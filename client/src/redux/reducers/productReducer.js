
import * as actionType from '../constants/productConstants';

export const getProductsReducer = (state={products: []},action) => {                  //state is current state/value and actions contains updated value 
         switch(action.type){                                          //dispatched value will go inside action
         case actionType.GET_PRODUCTS_SUCCESS: 
            return {products:action.payload}       //when return is called it will go inside store..js  //action.payload contains all the data
         case actionType.GET_PRODUCTS_FAIL:
            return {error:action.payload}

         default:
            return state
        }

         }                                                              

export const getProductDetailsReducer = (state= {product : {}},action)=> {  //single object(product {})
   switch(action.type){                                  
      case actionType.GET_PRODUCT_DETAILS_REQUEST: 
         return {loading: true}      
      case actionType.GET_PRODUCT_DETAILS_SUCCESS:
         return {loading: false , product:action.payload}
      case actionType.GET_PRODUCT_DETAILS_FAIL:
         return {loading: false , error:action.payload}
      case actionType.GET_PRODUCT_DETAILS_RESET:
         return {product: {}}
      default:
         return state
     }
}