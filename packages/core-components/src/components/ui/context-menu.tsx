import { FontAwesome6 } from "@expo/vector-icons";
import * as React from "react";
import {
	Platform,
	type StyleProp,
	StyleSheet,
	Text,
	View,
	type ViewStyle,
} from "react-native";
import { cn } from "../../lib/utils";
import * as ContextMenuPrimitive from "../primitives/context-menu";
import { TextClassContext } from "./text";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => {
	const { open } = ContextMenuPrimitive.useSubContext();
	const Icon =
		Platform.OS === "web" ? (
			<FontAwesome6 name="chevron-right" />
		) : open ? (
			<FontAwesome6 name="chevron-up" />
		) : (
			<FontAwesome6 name="chevron-down" />
		);
	return (
		<TextClassContext.Provider
			value={cn(
				"select-none text-sm native:text-lg text-primary",
				open && "native:text-accent-foreground",
			)}
		>
			<ContextMenuPrimitive.SubTrigger
				ref={ref}
				className={cn(
					"native:py-2 flex flex-row items-center gap-2 rounded-sm px-2 py-1.5 active:bg-accent web:cursor-default web:select-none web:outline-none web:hover:bg-accent web:focus:bg-accent",
					open && "bg-accent",
					inset && "pl-8",
					className,
				)}
				{...props}
			>
				{children}
				<Icon size={18} className="ml-auto text-foreground" />
			</ContextMenuPrimitive.SubTrigger>
		</TextClassContext.Provider>
	);
});
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
	const { open } = ContextMenuPrimitive.useSubContext();
	return (
		<ContextMenuPrimitive.SubContent
			ref={ref}
			className={cn(
				"z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 shadow-md shadow-foreground/5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				open
					? "web:animate-in web:fade-in-0 web:zoom-in-95"
					: "web:animate-out web:fade-out-0 web:zoom-out",
				className,
			)}
			{...props}
		/>
	);
});
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & {
		overlayStyle?: StyleProp<ViewStyle>;
		overlayClassName?: string;
		portalHost?: string;
	}
>(
	(
		{ className, overlayClassName, overlayStyle, portalHost, ...props },
		ref,
	) => {
		const { open } = ContextMenuPrimitive.useRootContext();
		return (
			<ContextMenuPrimitive.Portal hostName={portalHost}>
				<ContextMenuPrimitive.Overlay
					style={
						overlayStyle
							? StyleSheet.flatten([
									Platform.OS !== "web" ? StyleSheet.absoluteFill : undefined,
									overlayStyle,
								] as ViewStyle)
							: Platform.OS !== "web"
								? StyleSheet.absoluteFill
								: undefined
					}
					className={overlayClassName}
				>
					<ContextMenuPrimitive.Content
						ref={ref}
						className={cn(
							"z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 shadow-md shadow-foreground/5 web:data-[side=bottom]:slide-in-from-top-2 web:data-[side=left]:slide-in-from-right-2 web:data-[side=right]:slide-in-from-left-2 web:data-[side=top]:slide-in-from-bottom-2",
							open
								? "web:animate-in web:fade-in-0 web:zoom-in-95"
								: "web:animate-out web:fade-out-0 web:zoom-out-95",
							className,
						)}
						{...props}
					/>
				</ContextMenuPrimitive.Overlay>
			</ContextMenuPrimitive.Portal>
		);
	},
);
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<TextClassContext.Provider value="select-none text-sm native:text-lg text-popover-foreground web:group-focus:text-accent-foreground">
		<ContextMenuPrimitive.Item
			ref={ref}
			className={cn(
				"native:py-2 group relative flex flex-row items-center gap-2 rounded-sm px-2 py-1.5 active:bg-accent web:cursor-default web:outline-none web:hover:bg-accent web:focus:bg-accent",
				inset && "pl-8",
				props.disabled && "opacity-50 web:pointer-events-none",
				className,
			)}
			{...props}
		/>
	</TextClassContext.Provider>
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<ContextMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(
			"web:group native:py-2 relative flex flex-row items-center rounded-sm py-1.5 pl-8 pr-2 active:bg-accent web:cursor-default web:outline-none web:focus:bg-accent",
			props.disabled && "opacity-50 web:pointer-events-none",
			className,
		)}
		checked={checked}
		{...props}
	>
		<View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<ContextMenuPrimitive.ItemIndicator>
				<FontAwesome6
					name="check"
					size={14}
					strokeWidth={3}
					className="text-foreground"
				/>
			</ContextMenuPrimitive.ItemIndicator>
		</View>
		{children}
	</ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
	ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<ContextMenuPrimitive.RadioItem
		ref={ref}
		className={cn(
			"web:group native:py-2 relative flex flex-row items-center rounded-sm py-1.5 pl-8 pr-2 active:bg-accent web:cursor-default web:outline-none web:focus:bg-accent",
			props.disabled && "opacity-50 web:pointer-events-none",
			className,
		)}
		{...props}
	>
		<View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<ContextMenuPrimitive.ItemIndicator>
				<View className="h-2 w-2 rounded-full bg-foreground" />
			</ContextMenuPrimitive.ItemIndicator>
		</View>
		{children}
	</ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<ContextMenuPrimitive.Label
		ref={ref}
		className={cn(
			"native:text-base px-2 py-1.5 text-sm font-semibold text-foreground web:cursor-default",
			inset && "pl-8",
			className,
		)}
		{...props}
	/>
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-border", className)}
		{...props}
	/>
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof Text>) => {
	return (
		<Text
			className={cn(
				"native:text-sm ml-auto text-xs tracking-widest text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuGroup,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuPortal,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
};
