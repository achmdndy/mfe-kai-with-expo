import { Text } from "@kai/core-components";
import { AuthScreen } from "@kai/feature-auth";
import { OnboardingScreen } from "@kai/feature-main";
import { Redirect } from "expo-router";
import { View } from "react-native";
import { useOnboarding } from "../hooks/use-onboarding";

const LoadingOnboarding = () => {
	return (
		<View className="flex items-center justify-center h-screen">
			<Text>Loading...</Text>
		</View>
	);
};

export default function Onboarding() {
	const { loading, showOnboarding, user } = useOnboarding();

	return loading ? (
		<LoadingOnboarding />
	) : !user && !showOnboarding ? (
		<AuthScreen />
	) : !showOnboarding ? (
		<Redirect href={"/./(tabs)"} />
	) : (
		<OnboardingScreen />
	);
}
