import React from 'react';
import { View, Text } from 'react-native';
import { ListItemContainer, Thumb } from './childs';

const styles = {
  thumb: {
    height: 91, // 121.333,
    width: 91, // // 121.333,
  },
  textContainer1: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  textContainer2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  productNameText: {
    fontSize: 17,
    color: 'rgb(74, 144, 226)',
    fontFamily: 'Source Sans Pro',
  },
  commonText: {
    fontSize: 15,
    color: 'rgb(149, 151, 169)',
    fontFamily: 'Source Sans Pro',
  },
  priceText: {
    fontSize: 13,
    color: 'rgb(61, 64, 73)',
    fontFamily: 'Source Sans Pro',
  },
};

export default ({ data }) => (
  <View>
    {data.map(product => (
      <ListItemContainer key={product.id}>
        <Thumb images={product.images} />
        <View style={styles.textContainer1}>
          <Text style={styles.productNameText}>{product.name}</Text>
          <Text style={styles.commonText}>{product.category.name}</Text>
          <Text style={styles.commonText}>{product.supplier.name}</Text>
          <Text style={styles.commonText}>
            { product.audit && product.audit.createdBy ? (
              `${product.audit.createdBy.firstName} ${product.audit.createdBy.lastName}`
              ) : 'No User' }
          </Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.priceText}>
            {product.price.currency} {product.price.value}
          </Text>
        </View>
      </ListItemContainer>
    ))}
  </View>
);
