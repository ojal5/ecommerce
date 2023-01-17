import * as actionType from '../constants/cartConstant';

export const cartReducer = (state = {cartItems:[]},action) => {   //state contains which is already present in redux    action conatins which is coming from db and u have to store it in redux
    switch(action.type){ 
        case actionType.ADD_TO_CART: 
            const item=action.payload;
            const exist=state.cartItems.find(product=> product.id === item.id);

            if(exist)
            {
                return{...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data)}
            }
            else{
                return{...state, cartItems: [ ...state.cartItems, item]}
            }
            case actionType.REMOVE_FROM_CART:
                return{ ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)}
                default:
                    return state;
}
}