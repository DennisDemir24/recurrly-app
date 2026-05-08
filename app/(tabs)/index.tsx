import { View, Text } from "react-native";
import "../../global.css";
import { Link } from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text>Index</Text>
            <Link href="/onboarding">Go to onboarding</Link>
            <Link href="/subscriptions/spotify">Go to spotify subscription</Link>

            <Link
                href={{
                    pathname: '/subscriptions/[id]',
                    params: {
                        id: 'claude'
                    }
                }}
            >
                Claude Max Subscriptiosn
            </Link>
        </View>
    )
}