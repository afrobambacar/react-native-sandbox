import { connect } from 'react-redux';
import * as Actions from './ActionTypes';
import Counter from '../components/Counter';

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: Actions.COUNTER_INCREMENT }),
  decrement: () => dispatch({ type: Actions.COUNTER_DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);