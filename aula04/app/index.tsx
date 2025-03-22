import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBonkiyZpLXnHTOMbtSP037GxMzHzXeMFI",
  authDomain: "meu-primeiro-firebase-a9e0a.firebaseapp.com",
  projectId: "meu-primeiro-firebase-a9e0a",
  storageBucket: "meu-primeiro-firebase-a9e0a.firebasestorage.app",
  messagingSenderId: "935371632623",
  appId: "1:935371632623:web:0188801ab2e823b8e2101a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export deault function App(){
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomeCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach(doc) => {
        data.push({ id: doc.dir, ...doc.data() });
      }):

      setNomes(data);
      };

      fetchData();
    }, []);
    
    return (
      <View style={{ flex: 1, justifyContent: 'center',
        alighItem: 'center' }}>
          <Text>Lista de Nomes:</Text>
          <FlatList
            data={nomes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Text>{item.Nome} {item.Sobrenome}</Text>
              </View>
            )
    )
  })
}