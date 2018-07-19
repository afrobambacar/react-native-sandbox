import * as Actions from './ActionTypes';
import { connect } from 'react-redux';
import Quiz from '../components/Quiz';

const mapStateToProps = (state) => {
  console.log('... quiz action: state', state);
  return {};
};

const mapDispatchToProps = (dispatch) => ({
    confirmed: (data) => dispatch({ type: Actions.ADD_RESULT, data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);