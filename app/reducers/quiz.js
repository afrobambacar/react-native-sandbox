import * as Actions from '../actions/ActionTypes';

const quiz = (state = [], action) => {
  console.log('... quiz reducer ', state, action);
  switch(action.type) {
    case Actions.ADD_RESULT: 
      console.log('... quiz reducer: add_result', action.data);
      const { x, y, z } = action.data;
      const result = x * y === parseInt(z, 10);

      return [
        { x, y, z, result },
        ...state,
      ];
    default:
      return state;
  }
};

export default quiz;