import { Fragment, useRef } from "react";
import { Animated, ScrollView, View } from "react-native";
import { HomeArticles } from "./components/home-articles";
import { HomeExchangeRailpoint } from "./components/home-exchange-railpoint";
import { HomeHeader, HomeStickyHeader } from "./components/home-header";
import { HomeNewPromo } from "./components/home-new-promo";
import { HomeOtherService } from "./components/home-other-service";
import { HomePopularDestinations } from "./components/home-popular-destinations";
import { HomeService } from "./components/home-service";
import { HomeTrainList } from "./components/home-train-list";
import { HomeTripPlanner } from "./components/home-trip-planner";

export const HomeScreen = () => {
	const scrollOffsetY = useRef(new Animated.Value(0)).current;

	return (
		<Fragment>
			<HomeStickyHeader value={scrollOffsetY} />
			<ScrollView
				className="bg-white"
				scrollEventThrottle={5}
				showsVerticalScrollIndicator={false}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
					{
						useNativeDriver: false,
					},
				)}
			>
				<HomeHeader />
				<View className="flex flex-col items-start gap-6 pt-6">
					<HomeTrainList />
					<HomeService />
					<HomeTripPlanner />
					<HomeOtherService />
				</View>
				<View className="flex flex-col items-start gap-6 py-16">
					<HomeNewPromo />
					<HomePopularDestinations />
					<HomeExchangeRailpoint />
				</View>
				<HomeArticles />
			</ScrollView>
		</Fragment>
	);
};
