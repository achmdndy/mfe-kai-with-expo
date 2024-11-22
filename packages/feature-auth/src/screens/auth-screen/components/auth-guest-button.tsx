import { Ionicons } from "@expo/vector-icons";
import { Button, Text } from "@kai/core-components";
import { router } from "expo-router";

export const AuthGuestButton = () => {
	return (
		<Button
			size={"sm"}
			variant={"link"}
			onPress={() => router.navigate("/./(tabs)")}
			className="flex flex-row items-center justify-center gap-1"
		>
			<Text className="text-white">Guest</Text>
			<Ionicons name="chevron-forward" color={"#FFFFFF"} />
		</Button>
	);
};
