import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button, Text } from "@kai/core-components";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomePay } from "./home-pay";

export const HomeHeader = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ paddingTop: insets.top }} className="h-[280px] relative">
			<LinearGradient
				colors={["#2668ED", "#761F7C"]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					height: 220,
				}}
			/>
			<View className="flex flex-row items-center justify-between px-4">
				<View>
					<Text className="text-white text-sm">Selamat Sore</Text>
					<Text className="text-white font-semibold">Tamu</Text>
				</View>

				<View className="flex flex-row items-center gap-2">
					<Button
						variant={"ghost"}
						size={"icon"}
						className="rounded-full bg-white/20"
					>
						<Ionicons name="cart" size={18} color={"#FFFFFF"} />
					</Button>
					<Button
						variant={"ghost"}
						size={"icon"}
						className="rounded-full bg-white/20"
					>
						<Ionicons name="mail" size={18} color={"#FFFFFF"} />
					</Button>
					<Button
						variant={"ghost"}
						size={"icon"}
						className="rounded-full bg-white/20 !w-28 flex-row gap-2"
					>
						<MaterialIcons name="support-agent" size={18} color={"#FFFFFF"} />
						<Text className="text-white text-sm">Bantuan</Text>
					</Button>
				</View>
			</View>

			<View className="absolute bottom-0 w-full left-0 right-0 px-4">
				<HomePay />
			</View>
		</View>
	);
};

const HEADER_MAX_HEIGHT = 130;
const HEADER_MIN_HEIGHT = 0;
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const HomeStickyHeader = ({ value }: { value: Animated.Value }) => {
	const insets = useSafeAreaInsets();
	const animatedHeaderHeight = value.interpolate({
		inputRange: [0, SCROLL_DISTANCE],
		outputRange: [HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT],
		extrapolate: "clamp",
	});
	const animatedHeaderPaddingTop = value.interpolate({
		inputRange: [0, SCROLL_DISTANCE],
		outputRange: [0, insets.top],
		extrapolate: "clamp",
	});

	return (
		<Animated.View
			style={[
				{ paddingTop: animatedHeaderPaddingTop },
				{ height: animatedHeaderHeight },
			]}
		>
			<View className="flex flex-row items-start justify-between px-4 mt-4 pb-5 border-b border-input">
				<View>
					<Text className="text-sm">Selamat Sore</Text>
					<Text className="font-semibold">Tamu</Text>
				</View>

				<View className="flex flex-row items-center gap-2">
					<Button
						variant={"ghost"}
						size={"icon"}
						className="rounded-full bg-white/20 border border-[#2668ED]"
					>
						<Ionicons name="cart" size={18} color={"#2668ED"} />
					</Button>
					<Button
						variant={"ghost"}
						size={"icon"}
						className="rounded-full bg-white/20 border border-[#2668ED]"
					>
						<Ionicons name="mail" size={18} color={"#2668ED"} />
					</Button>
					<Button
						variant={"ghost"}
						size={"icon"}
						className="rounded-full bg-white/20 !w-28 flex-row gap-2 border border-[#2668ED]"
					>
						<MaterialIcons name="support-agent" size={18} color={"#2668ED"} />
						<Text className="text-[#2668ED] text-sm">Bantuan</Text>
					</Button>
				</View>
			</View>
		</Animated.View>
	);
};
