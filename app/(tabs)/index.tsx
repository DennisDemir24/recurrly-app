import { Text } from "react-native";
import "../../global.css";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
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
        </SafeAreaView>
    )
}