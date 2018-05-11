import React from 'react';
import { Image } from 'react-native';

const styles = {
  thumb: {
    height: 91,
    width: 91,
    borderRadius: 4, // 5.33,
  },
};

const urlPrefix = 'https://files.showsourcing.com/l/';

export default (props) => {
  let imgSrc = '';
  if (props.images.length) {
    imgSrc = urlPrefix + props.images[0].fileName;
  }
  return (
    <Image resizeMode="cover" style={styles.thumb} source={{ uri: imgSrc }} />
  );
};
