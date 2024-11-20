import RNCSlider from "@react-native-community/slider";
import { useTheme } from "@react-navigation/native";
import type * as React from "react";

function Slider(props: React.ComponentProps<typeof RNCSlider>) {
	const { colors } = useTheme();
	const {
		minimumValue = 0,
		maximumValue = 1,
		minimumTrackTintColor = colors.text,
		maximumTrackTintColor = colors.border,
		thumbTintColor = colors.text,
	} = props;
	return (
		<RNCSlider
			role="slider"
			minimumValue={minimumValue}
			maximumValue={maximumValue}
			minimumTrackTintColor={minimumTrackTintColor}
			maximumTrackTintColor={maximumTrackTintColor}
			thumbTintColor={thumbTintColor}
			{...props}
		/>
	);
}

export { Slider };
