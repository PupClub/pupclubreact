import { View, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../TextInput";
import Button from "../Button";
import dogIcon from "../../assets/dog.png";
import { Link } from "react-router-native";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
    const navigate = useNavigate();
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
                <Image source= {dogIcon} style={{width: 200, marginTop: 15, height: 400, margin: -50}}/>
               </View>

              <View style={{ paddingHorizontal: -10, marginBottom: 6, width: '69%'}}>
                <TextInput
                  //icon='mail'
                  placeholder='Enter your email'
                  autoCapitalize='none'
                  autoCompleteType='email'
                  keyboardType='email-address'
                  keyboardAppearance='light'
                  returnKeyType='next'
                  returnKeyLabel='next'
                  color='white'
                />
              </View>

              <View style={{ paddingHorizontal: -10, marginBottom: 6, width: '69%' }}>
                <TextInput
                  //icon='key'
                  placeholder='Enter your password'
                  secureTextEntry
                  autoCompleteType='password'
                  autoCapitalize='none'
                  color='white'
                  keyboardAppearance='dark'
                  returnKeyType='go'
                  returnKeyLabel='go'
                />
              </View>

              <Text></Text>
              <Button label='Login' onPress={() => true} />
              <Text></Text>
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("Trying to log in", values.email)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        //width: "full",
        minWidth: 413,
      }}
    >
      <View>
        <Image
          source={dogIcon}
          style={{ width: 200, height: 400, margin: -40 }}
        />
      </View>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{ paddingHorizontal: 20, margin: 6, width: "69%" }}
          >
            <TextInput
              //icon='mail'
              placeholder="Enter your email"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="light"
              returnKeyType="next"
              returnKeyLabel="next"
              color="white"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}

            />
            <TextInput
              //icon='key'
              placeholder="Enter your password"
              secureTextEntry
              autoCompleteType="password"
              autoCapitalize="none"
              color="white"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          <Button label="Login" onPress={handleSubmit} />

          <Text style={{ color: "grey" }}>Not a user?</Text>

          <Button label="Sign Up" onPress={() => navigate("/signUp")} />
          </View>
        )}
      </Formik>

    </View>
  );
}
