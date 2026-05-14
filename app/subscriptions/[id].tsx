import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const SubscriptionsDetails = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>SubscriptionsDetails: {id}</Text>
        </View>
    )
}

export default SubscriptionsDetails