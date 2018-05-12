//react-redux
/*const goods = (state, action) => {
  switch (action.type) {
      case 'GET_GOODS' :
          return {
              ...state,
              data: action.payload
          };
      //其他action
  }
};*/

//redux-actions
import {handleActions} from 'redux-actions';

export const goods = handleActions({
    REQUEST_GOODS: (state, action) => ({
        ...state,
        isFetching: true
    }),
    RECEIVE_GOODS: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.payload
    })
}, {
    isFetching: false,
    data: []
});