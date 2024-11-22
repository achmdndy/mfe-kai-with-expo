import { H1, P, cn } from "@kai/core-components";
import type { ComponentProps } from "react";
import { Image, View, useWindowDimensions } from "react-native";
import type { SlideItemType } from "../slides";

type OnboardingItemProps = ComponentProps<typeof View> & {
	item: SlideItemType;
};

export const OnboardingItem = ({
	item: {
		title,
		desc,
		image: { src, ratio },
	},
	className,
	...props
}: OnboardingItemProps) => {
	const { width } = useWindowDimensions();

	return (
		<View
			className={cn(
				"h-screen flex-1 flex-col items-start justify-start py-10",
				className,
			)}
			style={[{ width }]}
			{...props}
		>
			<View className="px-[24px]">
				<H1 className="text-white">{title}</H1>
				<P className="text-white mt-4">{desc}</P>
			</View>
			<View className="fixed bottom-10 flex-1 items-center justify-center px-[24px]">
				<Image
					source={src}
					style={{
						width: "100%",
						// height: "100%",
						height: undefined,
						aspectRatio: ratio,
					}}
				/>
			</View>
		</View>
	);
};
