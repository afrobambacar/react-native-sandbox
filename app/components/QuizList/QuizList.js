import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class QuizList extends Component {
  constructor(props) {
    super(props);
  }

  // textDecorationLine: 'line-through'
  renderCell(rowData) {
    if (!rowData.result) {
      return (
        <Text style={styles.wrong}>{rowData.x} x {rowData.y} = {rowData.z}</Text>
      );
    }
    return (
      <Text>{rowData.x} x {rowData.y} = {rowData.z}</Text>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={rowData => (this.renderCell(rowData))}
      />
    );
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => ({
  dataSource: dataSource.cloneWithRows(state.quiz)
});

export default connect(mapStateToProps)(QuizList);