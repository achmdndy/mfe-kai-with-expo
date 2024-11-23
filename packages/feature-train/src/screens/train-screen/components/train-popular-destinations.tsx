import { SampleDestination1, SampleDestination2 } from "@kai/core-assets";
import { ContentTile, H1 } from "@kai/core-components";
import { ScrollView, View } from "react-native";

const popularDestinations = [
	{ id: "destination-1", imgSrc: SampleDestination1, title: "Jakarta" },
	{ id: "destination-2", imgSrc: SampleDestination2, title: "Bandung" },
	{ id: "destination-3", imgSrc: SampleDestination1, title: "Jogjakarta" },
	{ id: "destination-4", imgSrc: SampleDestination1, title: "Surabaya" },
	{ id: "destination-5", imgSrc: SampleDestination2, title: "Banten" },
	{ id: "destination-6", imgSrc: SampleDestination1, title: "Bogor" },
	{ id: "destination-7", imgSrc: SampleDestination1, title: "Magelang" },
	{ id: "destination-8", imgSrc: SampleDestination2, title: "Sidoarjo" },
	{ id: "destination-9", imgSrc: SampleDestination1, title: "Malang" },
];

export const TrainPopularDestinations = () => {
	return (
		<ScrollView className="px-4" showsVerticalScrollIndicator={false}>
			<View className="flex flex-row items-center justify-between w-full mb-4">
				<H1 className="text-lg">Tujuan Populer</H1>
			</View>

			<View className="flex flex-col gap-4 pb-6">
				{popularDestinations.flatMap((item) => (
					<ContentTile
						key={item.id}
						image={item.imgSrc}
						overlay
						overlayTitle={item.title}
						imageProps={{
							style: {
								maxWidth: "100%",
								aspectRatio: 10 / 4,
								height: 150,
							},
						}}
					/>
				))}
			</View>
		</ScrollView>
	);
};
