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
    GET_GOODS: (state, action) => ({
        ...state,
        data: action.payload
    })
}, {
    data: []
});