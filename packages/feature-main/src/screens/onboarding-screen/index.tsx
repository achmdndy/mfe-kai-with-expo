import { LinearGradient } from "expo-linear-gradient";
import type { LegacyRef } from "react";
import { Animated, FlatList, View } from "react-native";
import { OnboardingItem } from "./components/onboarding-item";
import { OnboardingNextButton } from "./components/onboarding-next-button";
import { OnboardingPagination } from "./components/onboarding-pagination";
import { OnboardingSkipButton } from "./components/onboarding-skip-button";
import { useOnboardingScreen } from "./hooks/use-onboarding-screen";
import { type SlideItemType, slides } from "./slides";

export const OnboardingScreen = () => {
	const {
		insets,
		viewableItemsChanged,
		viewConfig,
		scrollX,
		slidesRef,
		currentIndex,
		scrollTo,
	} = useOnboardingScreen();

	return (
		<View
			className="relative"
			style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
		>
			<LinearGradient
				colors={["#2668ED", "#761F7C"]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				}}
			/>
			<View
				className="absolute top-0 right-[24px]"
				style={{ marginTop: insets.top }}
			>
				<OnboardingSkipButton />
			</View>
			<View style={{ flex: 3, marginTop: 24 }}>
				<FlatList
					data={slides}
					renderItem={({ item }) => <OnboardingItem item={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					keyExtractor={({ id }) => id}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false },
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slidesRef as LegacyRef<FlatList<SlideItemType>>}
				/>
			</View>

			<View className="flex flex-col items-center justify-center gap-4">
				<OnboardingPagination data={slides} scrollX={scrollX} />
				<OnboardingNextButton
					scrollTo={scrollTo}
					percentage={(currentIndex + 1) * (100 / slides.length)}
				/>
			</View>
		</View>
	);
};
