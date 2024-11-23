import { H1, Muted } from "@kai/core-components";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TrainList } from "./train-list";

export const TrainHeader = () => {
	const insets = useSafeAreaInsets();

	return (
		<View className="px-4" style={{ paddingTop: insets.top }}>
			<H1 className="text-3xl font-semibold">Kereta</H1>
			<Muted>Layanan Kereta dari KAI</Muted>
			<TrainList />
		</View>
	);
};
