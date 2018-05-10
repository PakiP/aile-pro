//react-redux
/*
const getGoods = goods => {
    return {
        type: 'GET_GOODS',
        payload: goods
    };
};
*/

//redux-actions
import {createAction} from 'redux-actions';
export const getGoods = createAction('GET_GOODS');

