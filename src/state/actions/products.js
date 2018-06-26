// @ vendors
import axios from 'axios';

// @ contants
import baseURL from 'data/data';
import actionTypes from 'constants/actionTypes';

const requestProductListInProgress = () => ({
    type: actionTypes.PRODUCT_LIST_REQUEST_IN_PROGRESS
});

const requestProductListSuccess = data => ({
    type: actionTypes.PRODUCT_LIST_REQUEST_SUCCESS,
    data
});

const requestProductListFailure = error => ({
    type: actionTypes.PRODUCT_LIST_REQUEST_FAILURE,
    error
});

const getProductListData = () => dispatch => {
    dispatch(requestProductListInProgress());

    return axios.get(baseURL)
        .then(response => {
            dispatch(requestProductListSuccess(response.data));
        })
        .catch((error) => {
            dispatch(requestProductListFailure(error));
        })
};

export default getProductListData;