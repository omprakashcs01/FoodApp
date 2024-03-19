import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ResultDetails from './ResultDetails';
import { useNavigation } from '@react-navigation/native';
const ResultsList = ({title, results  }) => {

    const navigation = useNavigation(); 

    if (!results.length) {
      return null;
    }
    
  return (
    <View  style = {styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal = {true}
        data={results}
        renderItem={({item}) => {
          return (
            <TouchableOpacity  onPress={()=> navigation.navigate("ResultShowScreen", {id: item.id})} >
                <ResultDetails result = {item}/>
            </TouchableOpacity>
            
          );
        }}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom:5
  },
  container: {
    marginBottom: 10
  }
});
export default ResultsList;
