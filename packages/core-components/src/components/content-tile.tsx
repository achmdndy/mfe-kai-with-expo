import type { ComponentProps } from "react";
import {
	Image,
	type ImageSourcePropType,
	TouchableOpacity,
	View,
} from "react-native";
import { cn } from "../lib";
import { H1 } from "./ui";

type ContentTileProps = ComponentProps<typeof TouchableOpacity> & {
	image: ImageSourcePropType;
	imageProps?: ComponentProps<typeof Image>;
	overlay?: boolean;
	overlayProps?: ComponentProps<typeof View>;
	overlayTitle?: string;
	overlayTitleProps?: ComponentProps<typeof H1>;
	title?: string;
	titleProps?: ComponentProps<typeof H1>;
};

export const ContentTile = ({
	image,
	imageProps,
	overlay,
	overlayProps,
	overlayTitle,
	overlayTitleProps,
	title,
	titleProps,
	children,
	...props
}: ContentTileProps) => {
	return (
		<TouchableOpacity className="flex flex-col items-start gap-2" {...props}>
			<View className="flex items-center justify-center">
				{overlay && (
					<View
						className="bg-black/40 p-4"
						style={{
							borderRadius: 12,
							zIndex: 10,
							position: "absolute",
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
							...(typeof overlayProps?.style === "object"
								? overlayProps.style
								: {}),
						}}
					>
						{overlayTitle && (
							<H1
								className={cn(
									"text-lg font-bold uppercase text-white",
									overlayTitleProps?.className,
								)}
							>
								{overlayTitle}
							</H1>
						)}
					</View>
				)}
				<Image
					source={image}
					style={{
						borderRadius: 12,
						width: "100%",
						resizeMode: "cover",
						...(typeof imageProps?.style === "object" ? imageProps.style : {}),
					}}
				/>
			</View>
			{title && (
				<H1
					className={cn(
						"text-lg font-medium uppercase leading-tight",
						titleProps?.className,
					)}
					numberOfLines={2}
					style={{
						...(typeof titleProps?.style === "object" ? titleProps.style : {}),
					}}
				>
					{title}
				</H1>
			)}
			{children}
		</TouchableOpacity>
	);
};