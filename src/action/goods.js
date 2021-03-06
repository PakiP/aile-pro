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
/*export const getGoods = createAction('GET_GOODS');*/

const GOODS = [{
    name: 'iPhone 7',
    price: '6,888',
    amount: 37
}, {
    name: 'iPad',
    price: '3,488',
    amount: 82
}, {
    name: 'MacBook Pro',
    price: '11,888',
    amount: 15
}];

const requestGoods = createAction('REQUEST_GOODS');
const receiveGoods = createAction('RECEIVE_GOODS');

const fetchData = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(GOODS);
      }, 1000);
  });
};

export const getGoods = () => async dispatch => {
    dispatch(requestGoods());
    let goods = await fetchData();
    dispatch(receiveGoods(goods));
};