import Login from './Login';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

export default function Home() {
    return (
        <View>
            <Login />
            <Link to="/signUp">
                <Text>Sign up</Text>
            </Link>
        </View>
    );
}