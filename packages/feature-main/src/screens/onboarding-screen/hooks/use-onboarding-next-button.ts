import { type LegacyRef, type RefObject, useEffect, useRef } from "react";
import { Animated } from "react-native";
import type { Circle } from "react-native-svg";

export interface IOnboardingNextButton {
	percentage: number;
}

export const useOnboardingNextButton = ({
	percentage,
}: IOnboardingNextButton) => {
	const size = 128;
	const strokeWidth = 2;
	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	const progressAnimation = useRef(new Animated.Value(0)).current;
	const progressRef = useRef<RefObject<Circle> | null>(null);

	const animation = (
		toValue:
			| number
			| Animated.Value
			| Animated.ValueXY
			| {
					x: number;
					y: number;
			  }
			| Animated.AnimatedInterpolation<number>,
	) => {
		return Animated.timing(progressAnimation, {
			toValue,
			duration: 250,
			useNativeDriver: true,
		}).start();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		animation(percentage);
	}, [percentage]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		progressAnimation.addListener((value) => {
			const strokeDashoffset =
				circumference - (circumference * value.value) / 100;
			if (progressRef?.current) {
				(
					progressRef?.current as LegacyRef<Circle> & {
						setNativeProps: ({
							strokeDashoffset,
						}: { strokeDashoffset: number }) => void;
					}
				)?.setNativeProps({
					strokeDashoffset,
				});
			}
		});

		return () => {
			progressAnimation.removeAllListeners();
		};
	}, [percentage]);

	return { size, center, radius, strokeWidth, progressRef, circumference };
};
