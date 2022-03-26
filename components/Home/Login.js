import { View, Text, StyleSheet, Image} from 'react-native';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../TextInput';
import Button from '../Button';
import dogIcon from '../../assets/dog.png';
import { Link } from 'react-router-native';

export default function Login() {
    const navigate = useNavigate();

    return (
        <View
              style={{
                flex: 1,
                backgroundColor: "black",
                alignItems: 'center',
                justifyContent: 'center',
                //width: "full",
                minWidth: 413,
              }}
        >
              <View>
                <Image source= {dogIcon} style={{width: 200, height: 400, margin: -40}}/>
               </View>
              <View style={{ paddingHorizontal: 20, marginBottom: 6, width: '69%' }}>
                <TextInput
                  //icon='mail'
                  placeholder='Enter your email'
                  autoCapitalize='none'
                  autoCompleteType='email'
                  keyboardType='email-address'
                  keyboardAppearance='light'
                  returnKeyType='next'
                  returnKeyLabel='next'
                />
              </View>
              <View style={{ paddingHorizontal: 20, marginBottom: 6, width: '69%' }}>
                <TextInput
                  //icon='key'
                  placeholder='Enter your password'
                  secureTextEntry
                  autoCompleteType='password'
                  autoCapitalize='none'
                  keyboardAppearance='dark'
                  returnKeyType='go'
                  returnKeyLabel='go'
                />
              </View>
              <Text></Text>
              <Button label='Login' onPress={() => true} />
              <Text></Text>

              <Text style={{color: 'grey'}}>Not a user?</Text>
              <Text></Text>
              <Button label='Sign Up' onPress={() => navigate('/signUp')} />
              <Text></Text>
              <Text></Text>
              <Text></Text>
        </View>
    );


}