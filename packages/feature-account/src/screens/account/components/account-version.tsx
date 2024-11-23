import { Muted } from "@kai/core-components";
import { View } from "react-native";

export const AccountVersion = () => {
	const date = new Date();

	return (
		<View className="flex flex-col items-center justify-center">
			<Muted>Version 1.0.0</Muted>
			<Muted>Copyright &copy; {date.getFullYear()} Access</Muted>
		</View>
	);
};
