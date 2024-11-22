import { useAuth, useLocalStorage } from "@kai/core-hooks";
import { router } from "expo-router";
import { type LegacyRef, useRef, useState } from "react";
import { Animated, type FlatList, type ViewToken } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { type SlideItemType, slides } from "../slides";

export const useOnboardingScreen = () => {
	const insets = useSafeAreaInsets();
	const { setItem } = useLocalStorage();
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
	const slidesRef = useRef<LegacyRef<FlatList<SlideItemType>>>(null);
	const viewableItemsChanged = useRef(
		({ viewableItems }: { viewableItems: ViewToken<SlideItemType>[] }) => {
			setCurrentIndex(viewableItems[0].index ?? 0);
		},
	).current;
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
	const { user } = useAuth();

	const scrollTo = async () => {
		if (currentIndex < slides.length - 1) {
			(
				slidesRef?.current as LegacyRef<FlatList<SlideItemType>> & {
					scrollToIndex: ({ index }: { index: number }) => void;
				}
			)?.scrollToIndex({ index: currentIndex + 1 });
		} else {
			try {
				await setItem("showOnboarding", false);
				router.navigate(user ? "/./(tabs)" : "/(auth)");
			} catch (error) {
				console.error(`[ERROR]: ${error}`);
			}
		}
	};

	return {
		insets,
		viewableItemsChanged,
		viewConfig,
		scrollX,
		slidesRef,
		currentIndex,
		scrollTo,
	};
};
