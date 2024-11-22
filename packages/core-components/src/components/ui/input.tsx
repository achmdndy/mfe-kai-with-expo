import * as React from "react";
import { TextInput, View } from "react-native";
import { cn } from "../../lib/utils";

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {
	iconRight?: React.ElementType | React.ReactNode;
	iconLeft?: React.ElementType | React.ReactNode;
};

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
	(
		{
			className,
			placeholderClassName,
			iconRight: IconRightComponent,
			iconLeft: IconLeftComponent,
			...props
		},
		ref,
	) => {
		return (
			<View className="relative w-full">
				{IconLeftComponent && (
					<View className="absolute inset-y-0 left-0 z-10 flex items-center justify-center pl-3">
						{typeof IconLeftComponent === "function" ? (
							<IconLeftComponent className="h-5 w-5 text-muted-foreground" />
						) : (
							IconLeftComponent
						)}
					</View>
				)}
				<TextInput
					ref={ref}
					className={cn(
						"native:h-12 native:text-lg native:leading-[1.25] h-10 rounded-md border border-input bg-background px-3 text-base text-foreground file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground web:flex web:w-full web:py-2 web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 lg:text-sm",
						props.editable === false && "opacity-50 web:cursor-not-allowed",
						className,
						IconLeftComponent && "pl-10",
						IconRightComponent && "pr-10",
					)}
					placeholderClassName={cn(
						"text-muted-foreground",
						placeholderClassName,
					)}
					{...props}
				/>
				{IconRightComponent && (
					<View className="absolute inset-y-0 right-0 flex items-center justify-center pr-3">
						{typeof IconRightComponent === "function" ? (
							<IconRightComponent className="h-5 w-5 text-muted-foreground" />
						) : (
							IconRightComponent
						)}
					</View>
				)}
			</View>
		);
	},
);

Input.displayName = "Input";

export { Input };
