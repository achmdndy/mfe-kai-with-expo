import { TravelModeIllustration } from "@kai/core-assets";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthGuestButton } from "./auth-guest-button";

const HEADER_MAX_HEIGHT = 320;
const HEADER_MIN_HEIGHT = 160;
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const AuthDynamicHeader = ({ value }: { value: Animated.Value }) => {
	const insets = useSafeAreaInsets();
	const animatedHeaderHeight = value.interpolate({
		inputRange: [0, SCROLL_DISTANCE],
		outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		extrapolate: "clamp",
	});

	return (
		<Animated.View
			style={[
				styles.header,
				{
					height: animatedHeaderHeight,
				},
			]}
		>
			<LinearGradient
				colors={["#2668ED", "#761F7C"]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				}}
			/>
			<View
				className="absolute top-0 right-[24px] z-10"
				style={{ marginTop: insets.top }}
			>
				<AuthGuestButton />
			</View>
			<View className="fixed flex-1 items-center justify-center px-[24px]">
				<Image
					source={TravelModeIllustration}
					style={{
						width: "100%",
						// height: "100%",
						height: undefined,
						aspectRatio: 1.45 / 1,
					}}
				/>
			</View>
			<View className="rounded-t-full h-8 w-full bg-white absolute bottom-0" />
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		left: 0,
		right: 0,
		paddingTop: 25,
	},
});
