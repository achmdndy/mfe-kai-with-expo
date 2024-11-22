import { Ionicons } from "@expo/vector-icons";
import { Button, Text } from "@kai/core-components";
import { View } from "react-native";

export const AuthSocial = () => {
	return (
		<View className="flex flex-col gap-2">
			<Button
				variant={"outline"}
				className="flex flex-row items-center justify-center gap-4"
			>
				<Ionicons name="logo-apple" size={18} />
				<Text className="text-[#2668ED]">Masuk Dengan Apple</Text>
			</Button>
			<Button
				variant={"outline"}
				className="flex flex-row items-center justify-center gap-4"
			>
				<Ionicons name="logo-google" size={18} color={"red"} />
				<Text className="text-[#2668ED]">Masuk Dengan Apple</Text>
			</Button>
		</View>
	);
};
