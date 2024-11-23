import { ProtectedProvider, Text } from "@kai/core-components";
import { View } from "react-native";

export default function Ticket() {
	return (
		<ProtectedProvider>
			<View className="flex items-center justify-center h-screen">
				<Text>Ticket</Text>
			</View>
		</ProtectedProvider>
	);
}
