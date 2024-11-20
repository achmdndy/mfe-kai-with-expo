import { Button } from "@kai/core-components";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export const TrainScreen = () => {
	const router = useRouter();
	return (
		<View className="flex items-center justify-center h-screen w-full">
			<Text>Train Screen</Text>

			<Button onPress={() => router.navigate("/(train)/train-schedule")}>
				<Text>Go to Train Schedule</Text>
			</Button>
		</View>
	);
};
