import React, { Component } from 'react';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import Item from '../Item';

class ItemList extends Component {
  constructor(props) {
    super(props);
    
    this.handleDestroyItem = this.handleDestroyItem.bind(this);
  }

  handleDestroyItem(id) {
    this.props.dispatch({ type: 'REMOVE_ITEM', id});
  }

  render() {
    return (
      <ListView
        style={styles.container}
        enableEmptySections={true}
        dataSource={this.props.dataSource}
        renderRow={rowData => {
          return (
            <Item
              rowData={rowData}
              handleDestroyItem={id => this.handleDestroyItem(id)}
            />
          );
        }}
      />
    );
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

function mapStateToProps(state) {
  return {
    dataSource: dataSource.cloneWithRows(state.items)
  };
}

ItemList.propTypes = {
  dataSource: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(ItemList);
