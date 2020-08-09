
const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [action.payload, ...state];
        case 'DELETE_FROM_CART':
            return state.filter((item, index) => item.id !== action.payload);
        case 'UPDATE_FROM_CART':
            let ind = state.findIndex(x => x.id === action.payload.id);
            state[ind] = action.payload;
            return state;
        default:
            return state;
    }
}

export default CartReducer;