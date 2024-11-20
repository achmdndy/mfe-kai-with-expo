import { burger } from "@lucide/lab";
import { Icon } from "lucide-react-native";
import { View } from "react-native";

export default function HomeScreen() {
	return (
		<View className="flex items-center justify-center h-screen w-full">
			<Icon iconNode={burger} className="w-10 h-10" />
		</View>
	);
}
