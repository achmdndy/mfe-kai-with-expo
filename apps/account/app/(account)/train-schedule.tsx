import { Button, Text } from "@kai/core-components";
import { router } from "expo-router";
import { View } from "react-native";

export default function TrainSchedule() {
	return (
		<View className="flex items-center justify-center h-screen">
			<Text>Train Schedule</Text>
			<Button onPress={() => router.back()}>
				<Text>Go Back</Text>
			</Button>
		</View>
	);
}
