import { Stack } from "expo-router";

export default function TabsLiteModule() {
	return (
		<Stack>
			<Stack.Screen name="train-schedule" options={{ headerShown: false }} />
		</Stack>
	);
}
