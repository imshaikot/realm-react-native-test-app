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
    backgroundColor: '#F5FCFF',
    marginTop: 30,
    marginBottom: 30,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    database.then((realm) => {
      const products = realm.objects('Product').filtered('deleted = false');
      this.setState({
        products,
      }, () => products.addListener(this.updateChanges));
    })
      .catch(error => console.error('error', error));
  }

  componentWillUnmount() {
    if (this.state.products.removeListener) {
      this.state.products.removeListener(this.updateChanges);
    }
  }


  updateChanges = pipeline => this.setState({ products: pipeline });

  render() {
    return (
      <ScrollView bounces contentContainerStyle={styles.container}>
        <ProductList data={this.state.products} />
      </ScrollView>
    );
  }
}
