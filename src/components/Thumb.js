import React from 'react';
import { Image } from 'react-native';

const styles = {
  thumb: {
    height: 121.333,
    width: 121.333,
    borderRadius: 5.33,
  },
};

const urlPrefix = 'https://files.showsourcing.com/l/';

export default (props) => {
  let imgSrc = '';
  props.images.forEach((each) => {
    imgSrc = urlPrefix + each.fileName;
  });
  return (
    <Image resizeMode="cover" style={styles.thumb} source={{ uri: imgSrc }} />
  );
};
