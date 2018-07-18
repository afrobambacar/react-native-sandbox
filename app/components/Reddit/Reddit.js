import React, { Component } from 'react';
import { View, Text, ListView, Image, ActivityIndicator } from 'react-native';
import styles from './styles';

class Reddit extends Component {
  constructor(props) {
    super(props);

    console.log('... constructor', props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    console.log('... componentDidMount');
    this.props.callService();
  }

  componentWillReceiveProps(nextProps) {
    console.log('... componentWillReceiveProps', nextProps);
    if (nextProps.data !== null) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
      })
    }

    if (nextProps.error !== undefined) {
      Alert.alert(
        'Error',
        nextProps.error,
        [
          { text: 'Do you want to reload', onPress: () => this.props.callService() },
        ],
        { cancelable: false }
      )
    }
  }

  renderCell = (rowData) => (
    <View style={styles.containerList}>
      <Image source={{ uri: rowData.data.thumbnail }} style={styles.photo} />
      <Text style={styles.text}>
        {`${rowData.data.author}`}
      </Text>
    </View>
  );

  render() {
    const { dataSource, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <ListView
          style={{ marginTop: 30, flex: 1 }}
          enableEmptySections={true}
          dataSource={dataSource}
          renderRow={(rowData) => this.renderCell(rowData)}
        />
        <ActivityIndicator
          animating={this.props.isLoading}
          style={[styles.centering, { height: 80 }]}
          size='large'
          color='#0000ff'
        />
      </View>
    );
  }
}

export default Reddit;