import type { ComponentProps } from "react";
import { Animated, View, useWindowDimensions } from "react-native";
import type { SlidesType } from "../slides";

type OnboardingPaginationProps = ComponentProps<typeof View> & {
	data: SlidesType;
	scrollX: Animated.Value;
};

export const OnboardingPagination = ({
	data,
	scrollX,
}: OnboardingPaginationProps) => {
	const { width } = useWindowDimensions();

	return (
		<View className="flex-row gap-x-4">
			{data.flatMap((_, i) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [10, 20, 10],
					extrapolate: "clamp",
				});
				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: "clamp",
				});

				return (
					<Animated.View
						key={i.toString()}
						className="bg-white rounded-lg"
						style={[{ height: 10, width: dotWidth, opacity }]}
					/>
				);
			})}
		</View>
	);
};
