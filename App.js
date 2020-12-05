import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image
} from 'react-native';
import styles from './Styles';

const App = () => {
  return (
    <View style = {styles.container}>
            <Image style = {styles.containerImage}
            source = {require('./assets/Rumah Jasa.png')}
            />
            <TextInput
            style = {styles.input}
            placeholder = "Email"
            />
            <TextInput
            secureTextEntry={true}
            style = {styles.input}
            placeholder = "Password"
            />
            <Button
            style = {styles.button}
            title = "Login"           
            />
            <Text            
            style = {styles.link_register}>Register</Text>

        </View>
  );
};

export default App;
