import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';

const AboutPage = () => {
    const router = useRouter();
    return (
        <View>
            <Text>About Page</Text>
            <Pressable onPress={() => router.push("/HomePage")}>
                <Text>Go to Home Page using push method</Text>
            </Pressable>
            <Pressable onPress={() => router.replace("/HomePage")}>
                <Text>Go to Home Page using replace method</Text>
            </Pressable>
        </View>
    );
};

export default AboutPage;