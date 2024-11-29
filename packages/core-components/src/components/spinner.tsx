import { EvilIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { cn } from "../lib";

type SpinnerProps = Omit<ComponentProps<typeof EvilIcons>, "name"> & {
	size?: number;
};

export const Spinner = ({ size = 30, className, ...props }: SpinnerProps) => {
	return (
		<EvilIcons
			name="spinner-3"
			size={size}
			strokeWidth={2.5}
			color="#761F7C"
			className={cn("animate-spin text-[#761F7C]", className)}
			{...props}
		/>
	);
};
