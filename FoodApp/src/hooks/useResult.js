import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../commpnants/api/yelp'

export default ()=> {
   
    const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")

  const searchApi = async (searchTerm) => {
    console.log('testing api');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'canada',
        },
      });
      //   const data = await response.json();
      // setResults(data.results);
      setResults(response.data.businesses);
      
    } catch (error) {
     setErrorMessage("Soothing went wrong")
    }
  };

  useEffect (()=> {
    searchApi('pizza')
  },[])
 

  return [searchApi, results , errorMessage]
} 