/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import database from '../database';
import ProductList from './ProductList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    database.then((realm) => {
      const products = realm.objects('Product').filtered('deleted = false');
      this.setState({
        products,
      });
    })
      .catch(error => console.error('error', error));
  }
  render() {
    return (
      <ScrollView bounces contentContainerStyle={styles.container}>
        <ProductList data={this.state.products} />
      </ScrollView>
    );
  }
}
