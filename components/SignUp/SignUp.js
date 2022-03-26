import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik'

export default function SignUp() {
    const handleSubmit = (values) => {
        fetch('https://floating-escarpment-03509.herokuapp.com/', {
            method: 'GET',
        }).then(response => response.json())
            .then(data => console.log(data));
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
                        type="text"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder="Username"
                        style="margin-bottom:15px"
                    />
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Email"

                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <Button onPress={handleSubmit} title="Sign up" />
                </View>
            )}
        </Formik>
    );
}