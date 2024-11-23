import { H1, Muted } from "@kai/core-components";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PromoHeader = () => {
	const insets = useSafeAreaInsets();

	return (
		<View className="px-4 pb-4" style={{ paddingTop: insets.top }}>
			<H1 className="text-3xl font-semibold">Promo</H1>
			<Muted className="text-lg">Berbagai macam promo di Access</Muted>
		</View>
	);
};
