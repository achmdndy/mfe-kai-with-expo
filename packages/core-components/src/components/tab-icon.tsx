import type { ComponentProps } from "react";
import { Image, Platform } from "react-native";
import { cn } from "../lib";

type TabIconProps = ComponentProps<typeof Image> & {
	active: boolean;
};

export const TabIcon = ({ className, active, ...props }: TabIconProps) => {
	return (
		<Image
			style={{ tintColor: active ? "#FFD500" : "#000000" }}
			className={cn(
				"!h-8 !w-8",
				Platform.OS === "android" && "!h-7 !w-7",
				className,
			)}
			{...props}
		/>
	);
};
