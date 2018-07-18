import * as ActionTypes from '../actions/ActionTypes';

const reddit = (state = { isLoading: false, error: undefined, data: {} }, action) => {
  switch (action.type) {
    case ActionTypes.SERVICE_PENDING: 
      return Object.assign({}, state, {
        isLoading: true
      });
    case ActionTypes.SERVICE_ERROR: 
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case ActionTypes.SERVICE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data
      });
    default:
      return state;
  }
}

export default reddit;