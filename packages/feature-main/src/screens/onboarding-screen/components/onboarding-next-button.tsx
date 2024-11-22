import { AntDesign } from "@expo/vector-icons";
import type { ComponentProps, LegacyRef } from "react";
import { TouchableOpacity, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import {
	type IOnboardingNextButton,
	useOnboardingNextButton,
} from "../hooks/use-onboarding-next-button";

type OnboardingNextButtonProps = ComponentProps<typeof View> &
	IOnboardingNextButton & { scrollTo: () => void };

export const OnboardingNextButton = ({
	percentage,
	scrollTo,
}: OnboardingNextButtonProps) => {
	const { size, center, radius, strokeWidth, progressRef, circumference } =
		useOnboardingNextButton({ percentage });

	return (
		<View className="items-center justify-center">
			<Svg width={size} height={size} fill={"transparent"}>
				<G rotation={-90} origin={center}>
					<Circle
						stroke={"#FFFFFF"}
						cx={center}
						cy={center}
						r={radius}
						strokeWidth={strokeWidth}
					/>
					<Circle
						ref={progressRef as LegacyRef<Circle>}
						stroke={"#F29D4D"}
						cx={center}
						cy={center}
						r={radius}
						strokeWidth={strokeWidth}
						strokeDasharray={circumference}
						strokeDashoffset={circumference - (circumference * 25) / 100}
					/>
				</G>
			</Svg>
			<TouchableOpacity
				onPress={scrollTo}
				className="absolute rounded-full bg-[#2668ED] p-5"
				activeOpacity={0.6}
			>
				<AntDesign name="arrowright" size={32} color={"#FFFFFF"} />
			</TouchableOpacity>
		</View>
	);
};
