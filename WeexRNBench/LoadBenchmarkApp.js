/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const COLUMN = 20
const ROW = 20
const REPEAT = 10
const DEPTH = 35

class Mesh extends React.Component {
  render () {
    const iter = parseInt(this.props.depth, 10)
    const styles = StyleSheet.create({
      wrapper: {
        flex: 1,
        width: '100%',
        flexDirection: iter%2 === 0 ? 'row': 'column'
      },
      center: { flex: iter - 1 },
      box: {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'stretch',
        'margin': 1,
        'borderWidth': 1,
        'borderStyle': 'solid',
        'borderColor': 'rgb(65, 184, 131)',
        'backgroundColor': 'rgba(65, 184, 131, 0.08)'
      }
    })
    if (iter > 0) {
      return (
        <View style={[styles.wrapper, this.props.style]}>
          <View style={styles.box}></View>
          <View style={[styles.box, styles.center]}>
            <Mesh depth={iter - 1}></Mesh>
          </View>
          <View style={styles.box}></View>
        </View>
      )
    }
    return null
  }
}

const VIEWPORT = 375
const appStyle = StyleSheet.create({
  mesh: { height: VIEWPORT },
  list: { width: '100%'},
  row: { width: '100%', flexDirection: 'row' },
  cell: {
    justifyContent: 'center',
    margin: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(65, 184, 131)',
    backgroundColor: 'rgba(65, 184, 131, 0.25)'
  },
  title: {
    padding: 10,
    backgroundColor: '#EEE',
    color: '#AAA',
    fontSize: 25,
    textAlign: 'center'
  },
  text: {
    color: 'rgb(65, 184, 131)',
    textAlign: 'center',
    fontWeight: '200'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
class AppBenchmark extends React.Component<{}> {
  render() {
    const repeat = []
    for (let x = 0; x < REPEAT; x++) {
      repeat.push({ key: x })
    }
    const matrix = []
    for (let i = 0; i < ROW; i++) {
      matrix.push([])
      for (let j = 0; j < COLUMN; j++) {
        matrix[i].push(Math.floor(Math.random() * 10))
      }
    }
    const styles = StyleSheet.create({
      cell: {
        width: (VIEWPORT / COLUMN - 1),
        height: (VIEWPORT / COLUMN - 1)
      },
      text: {
        fontSize: Math.round(VIEWPORT / COLUMN / 2)
      }
    })
    return (
      <FlatList style={appStyle.list} data={repeat} renderItem={item => {
        return (
          <View>
            <Text style={appStyle.title}>BENCHMARK</Text>
            <Mesh style={appStyle.mesh} depth={DEPTH}></Mesh>
            {matrix.map((row, r) => (
              <View style={appStyle.row} key={r}>{
                row.map((column, c) => (
                  <View style={[appStyle.cell, styles.cell]} key={c}>
                    <Text style={[appStyle.text, styles.text]}>{r-c}</Text>
                  </View>
                ))
              }</View>
            ))}
          </View>
        )
      }}>
      </FlatList>
    )
  }
}




export default class LoadBenchmarkApp extends Component<{}> {
  render() {
    return (
      <View>
         <AppBenchmark/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
