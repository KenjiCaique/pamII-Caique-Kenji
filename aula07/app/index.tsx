import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-b0Q7d1aapVSXJCWH6vvI7QM4oQpT09k",
  authDomain: "meu-primeiro-firebase-a20d1.firebaseapp.com",
  projectId: "meu-primeiro-firebase-a20d1",
  storageBucket: "meu-primeiro-firebase-a20d1.firebasestorage.app",
  messagingSenderId: "716963280928",
  appId: "1:716963280928:web:44dd7ee6a37cdef7b9e445"
};


firebase.initializeApp(firebaseConfig);


import React, {useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
0,
export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomeCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomeCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}

