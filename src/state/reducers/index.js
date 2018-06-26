// @ vendors
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// @ reducers
import productListState from './products';

const rootReducer = combineReducers({
    productListState,
    router: routerReducer
});

export default rootReducer;