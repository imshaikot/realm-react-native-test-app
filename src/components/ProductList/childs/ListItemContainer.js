import React, { Fragment } from 'react';
import { View, TouchableOpacity } from 'react-native';

const styles = {
  containerStyle: {
    // borderBottomColor: 'rgb(235, 236, 241)',
    // borderTopColor: 'transparent',
    // borderLeftColor: 'transparent',
    // borderRightColor: 'transparent',
    // borderBottomWidth: 1,
    // borderTopWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    elevation: 1,
    marginLeft: 8,
    marginRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 1,
    flexDirection: 'row',
  },
  vBorder: {
    backgroundColor: 'rgb(235, 236, 241)',
    height: 1,
    marginLeft: 12,
    marginRight: 12,
  },
};

const ListItemContainer = (props) => {
  const { containerStyle, vBorder } = styles;
  return (
    <Fragment>
      <TouchableOpacity style={containerStyle}>
        {props.children}
      </TouchableOpacity>
      <View style={vBorder} />
    </Fragment>
  );
};

export default ListItemContainer;
