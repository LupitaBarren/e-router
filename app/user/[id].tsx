import { View, Text } from 'react-native';
import React, { useSyncExternalStore } from 'react';
import { useLocalSearchParams } from 'expo-router';

const UserProfilePage = () => {
    const {id} = useLocalSearchParams<{id: string}>()
    return (
        <View>
            <Text>User ID: {id}</Text>
        </View>
    )
}

export default UserProfilePage;