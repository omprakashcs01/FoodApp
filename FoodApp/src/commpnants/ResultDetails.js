import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResultDetails = ({result}) => {

 console.log(result.image_url)
  return (
    <View style = {styles.container}>
     <Image style = {styles.image} source={{ uri: result.image_url }}
     
     />
      <Text style = {styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} reviews</Text>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({

  container: {
 marginLeft:15
  },
image: {
  height:120,
  width:250,
  borderRadius: 4,
  marginBottom: 5
},

name: {
  fontSize: 16,
   fontWeight: 'bold',
   color: 'black',
  
}
});
