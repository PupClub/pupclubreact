import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik'

export default function SignUp() {
    const handleSubmit = (values) => {
        console.log(values);
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
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder="Username"
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
                        value={values.email}
                        placeholder="Password"
                    />
                    <Button onPress={handleSubmit} title="Sign up" />
                </View>
            )}
        </Formik>
    );
}