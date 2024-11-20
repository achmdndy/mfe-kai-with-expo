import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { cn } from "../../lib/utils";
import * as HoverCardPrimitive from "../primitives/hover-card";
import { TextClassContext } from "./text";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
	React.ElementRef<typeof HoverCardPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
	const { open } = HoverCardPrimitive.useRootContext();
	return (
		<HoverCardPrimitive.Portal>
			<HoverCardPrimitive.Overlay
				style={Platform.OS !== "web" ? StyleSheet.absoluteFill : undefined}
			>
				<Animated.View entering={FadeIn}>
					<TextClassContext.Provider value="text-popover-foreground">
						<HoverCardPrimitive.Content
							ref={ref}
							align={align}
							sideOffset={sideOffset}
							className={cn(
								"z-50 w-64 rounded-md border border-border bg-popover p-4 shadow-md shadow-foreground/5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 web:cursor-auto web:outline-none",
								open
									? "web:animate-in web:fade-in-0 web:zoom-in-95"
									: "web:animate-out web:fade-out-0 web:zoom-out-95",
								className,
							)}
							{...props}
						/>
					</TextClassContext.Provider>
				</Animated.View>
			</HoverCardPrimitive.Overlay>
		</HoverCardPrimitive.Portal>
	);
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };