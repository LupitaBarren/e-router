import { View } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
    return (
        <View>
            <Link href="/AboutPage">Go to About Page</Link>
            <Link href="/user/1">Go to User Profile Page 1</Link>
            <Link href="/user/2">Go to User Profile Page 2</Link>
        </View>
    );
};

export default HomePage;