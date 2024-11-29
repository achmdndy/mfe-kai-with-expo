import { Stack } from "expo-router";

export default function OtherLayout() {
	return (
		<Stack>
			<Stack.Screen name="help" options={{ headerShown: false }} />
		</Stack>
	);
}
