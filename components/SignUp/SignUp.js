import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik'
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const handleSubmit = (values) => {

        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
        };

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: ''
            }}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        color='white'
                        type="text"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder="Username"
                        placeholderTextColor="white"
                        style="margin-bottom:15px"
                    />
                    <TextInput
                        color='white'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholderTextColor="white"
                        placeholder="Email"

                    />
                    <TextInput
                        color='white'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholderTextColor="white"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <Button onPress={handleSubmit} title="Sign up" />
                </View>
            )}
        </Formik>
    );
}