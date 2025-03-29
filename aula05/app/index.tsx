import { Text, View } from "react-native";
import { Button, Icon, CheckBox, ButtonGroup } from '@rneui/themed';
import React, {useState} from 'react'



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Corinthians</Text>
      <Button size="sm" type="solid" color="secondary">
      Login
      </Button>
      <Button type="outline">
        entrar
      </Button>
      <Button title="Solid" type="solid" loading />
      <Button radius={"sm"} type="solid">
    Tigrinho
    <Icon name="paid" color="white" />
  </Button>
    </View> 
  );
}
