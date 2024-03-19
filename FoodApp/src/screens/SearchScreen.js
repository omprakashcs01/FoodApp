import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import SearchScreenBar from '../commpnants/SearchScreenBar'; // Correct import
import useResult from '../hooks/useResult';
import ResultsList from '../commpnants/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResult();

 const filterResultByPrice = (price)=> {
  //price === $ || $$ || $$$
   return results.filter((result)=> {
     return result.price === price
   })

 }

  return (
    <View style = {{flex:1}}>
      <SearchScreenBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      
<ScrollView>
<ResultsList title={'pizza'}
      results = {filterResultByPrice('$')}
   
      />
      <ResultsList title={'cake'}
      f results = {filterResultByPrice('$$')}
    
    />
      <ResultsList title={'chole bhature'}
       results = {filterResultByPrice('$$$')}
      
      />
      <ResultsList title={'tea'}
       results = {filterResultByPrice('$$$')}
      
      />
</ScrollView>
     
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
