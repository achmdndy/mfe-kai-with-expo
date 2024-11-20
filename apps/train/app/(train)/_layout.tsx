import { Stack } from "expo-router";

export default function TrainLayout() {
	return (
		<Stack>
			<Stack.Screen name="train-schedule" />
		</Stack>
	);
}
