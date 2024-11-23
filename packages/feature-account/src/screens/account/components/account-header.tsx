import { Button, H1, Text } from "@kai/core-components";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const AccountHeader = () => {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{ paddingTop: insets.top }}
			className="relative flex items-center justify-center pb-6 px-4"
		>
			<LinearGradient
				colors={["#C84369", "#B631B2"]}
				start={[0, 0]}
				end={[1, 1]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				}}
			/>
			<View className="flex flex-col items-center justify-center pt-6 w-full">
				<H1 className="text-white text-center text-2xl tracking-wide leading-tight mb-4">
					Bergabunglah untuk keuntungan yang lebih banyak
				</H1>
				<Button variant={"secondary"} className="w-full">
					<Text className="text-[#2668ED] font-bold uppercase">Masuk</Text>
				</Button>
			</View>
		</View>
	);
};
