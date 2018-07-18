import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import Reddit from '../components/Reddit';

const mapStateToProps = (state) => ({
  isLoading: state.reddit.isLoading,
  error: state.reddit.error,
  data: state.reddit.data
});

const mapDispatchToProps = (dispatch) => ({
  callService: () => dispatch(callWebservice())
});

export const callWebservice = () => {
  return dispatch => {
    dispatch(serviceActionPending())
    axios.get('https://www.reddit.com/r/reactjs.json')
    .then(response => {
      console.log('... response', response);
      dispatch(serviceActionSuccess(response.data.data.children))
    })
    .catch(error => {
      console.log('... error', error);
      dispatch(serviceActionError(error))
    })
  }
}

export const serviceActionPending = () => ({
  type: ActionTypes.SERVICE_PENDING
})

export const serviceActionError = () => ({
  type: ActionTypes.SERVICE_ERROR,
  error: error
})

export const serviceActionSuccess = (data) => {
  console.log('.... serviceActionSuccess', data);
  return {
    type: ActionTypes.SERVICE_SUCCESS,
    data: data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);
