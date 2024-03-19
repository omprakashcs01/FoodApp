import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import yelp from '../commpnants/api/yelp';

const ResultShowScreen = () => {
  const [data, setData] = useState(null);

  console.log(data);
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id ?? 'defaultId';

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    response.data;
    setData(response.data)
  };

  useEffect(()=> {
   getResult(id)
  },[])

  if (!data){
    return null
  }

  return (
    <View>
      <Text style = {{ fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'black',
    marginBottom:5}}>Restaurant is  {data.name}</Text>
      <FlatList
      
      data = {data.photos}
      renderItem={({item})=> {
        return(
          <Image style ={{height: 150, width: 250}} source={ {uri: item}}/>
        )
      }}
      keyExtractor={(photo)=> photo}

      />

   
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({});
