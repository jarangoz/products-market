// @ vendors
import Immutable from 'immutable';

// @ contants
import actionTypes from 'constants/actionTypes';

const initialState = Immutable.fromJS({
    productList: [],
    isFetching: false,
    error: ''
});

const productListState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_LIST_REQUEST_IN_PROGRESS:
            return state.merge({
                isFetching: true
            });
        case actionTypes.PRODUCT_LIST_REQUEST_SUCCESS:
            return state.merge({
                productList: action.data,
                isFetching: false
            });
        case actionTypes.PRODUCT_LIST_REQUEST_FAILURE:
            return state.merge({
                error: action.error,
                isFetching: false
            });

        default:
            return state
    }
};

export default productListState;