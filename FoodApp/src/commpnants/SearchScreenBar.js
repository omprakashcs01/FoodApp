import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const SearchScreenBar = ({term, onTermChange , onTermSubmit}) => {
  

  return (
    <View style={styles.backgroundColor}>
      <Icon style={styles.iconStyle} name="search" size={35} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"

        value={term}
         onChangeText={onTermChange}
         onEndEditing={onTermSubmit}
        ></TextInput>
    </View>
  );
};

export default SearchScreenBar;

const styles = StyleSheet.create({
  backgroundColor: {
    borderWidth: 2,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#E1E1E1',
    marginBottom:10
  },
  inputStyle: {
    // flex: 1,
    // marginLeft: 10,
    // borderWidth: 2,
    flex: 1,
    fontSize: 18,
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
