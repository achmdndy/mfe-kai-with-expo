import Ionicons from "@expo/vector-icons/Ionicons";
import type { IconProps } from "@expo/vector-icons/build/createIconSet";
import { useTheme } from "@react-navigation/native";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { Text, View } from "react-native";
import { cn } from "../../lib/utils";

const alertVariants = cva(
	"relative bg-background w-full rounded-lg border border-border p-4 shadow shadow-foreground/10",
	{
		variants: {
			variant: {
				default: "",
				destructive: "border-destructive",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

const Alert = React.forwardRef<
	React.ElementRef<typeof View>,
	React.ComponentPropsWithoutRef<typeof View> &
		VariantProps<typeof alertVariants> & {
			icon?: IconProps<React.ComponentProps<typeof Ionicons>["name"]>;
			iconSize?: number;
			iconClassName?: string;
		}
>(
	(
		{
			className,
			variant,
			children,
			icon,
			iconSize = 16,
			iconClassName,
			...props
		},
		ref,
	) => {
		const { colors } = useTheme();
		return (
			<View
				ref={ref}
				role="alert"
				className={alertVariants({ variant, className })}
				{...props}
			>
				<View className="absolute left-3.5 top-4 -translate-y-0.5">
					<Ionicons
						size={iconSize}
						className={cn(
							variant === "destructive" ? "text-destructive" : "text-gray-900",
							iconClassName,
						)}
						{...icon}
					/>
				</View>
				{children}
			</View>
		);
	},
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
	React.ElementRef<typeof Text>,
	React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
	<Text
		ref={ref}
		className={cn(
			"mb-1 pl-7 text-base font-medium leading-none tracking-tight text-foreground",
			className,
		)}
		{...props}
	/>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
	React.ElementRef<typeof Text>,
	React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
	<Text
		ref={ref}
		className={cn("pl-7 text-sm leading-relaxed text-foreground", className)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
