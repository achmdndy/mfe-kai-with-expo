import { Ionicons } from "@expo/vector-icons";
import { H1 } from "@kai/core-components";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PassowrdHeader = () => {
	const insets = useSafeAreaInsets();

	return (
		<View className="bg-gray-100" style={{ paddingTop: insets.top }}>
			<View className="flex flex-row items-center px-4 py-4 justify-between">
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={22} color={"#2668ED"} />
				</TouchableOpacity>
				<H1 className="text-xl">Masukkan Kata Sandi</H1>
				<View />
			</View>
		</View>
	);
};
