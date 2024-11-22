import { SampleDestination1, SampleDestination2 } from "@kai/core-assets";
import { ContentTile, H1 } from "@kai/core-components";
import { FlatList, View } from "react-native";

const popularDestinations = [
	{ id: "destination-1", imgSrc: SampleDestination1, title: "Jakarta" },
	{ id: "destination-2", imgSrc: SampleDestination2, title: "Bandung" },
	{ id: "destination-3", imgSrc: SampleDestination1, title: "Jogjakarta" },
];

export const HomePopularDestinations = () => {
	return (
		<View className="w-full">
			<View className="px-4 flex flex-row items-center justify-between w-full mb-4">
				<H1 className="text-lg">Tujuan Populer</H1>
			</View>

			<FlatList
				className="bg-white pl-4"
				data={popularDestinations}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				renderItem={({ item }) => (
					<ContentTile
						image={item.imgSrc}
						overlay
						overlayTitle={item.title}
						imageProps={{
							style: {
								maxWidth: 300,
								aspectRatio: 5.5 / 3,
								height: 120,
							},
						}}
					/>
				)}
				ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
				ListFooterComponent={() => <View style={{ width: 26 }} />}
			/>
		</View>
	);
};
