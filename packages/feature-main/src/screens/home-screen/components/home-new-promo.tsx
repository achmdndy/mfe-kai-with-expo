import { SamplePromo1, SamplePromo2 } from "@kai/core-assets";
import { Button, ContentTile, H1, Text } from "@kai/core-components";
import { FlatList, View } from "react-native";

const promos = [
	{ id: "promo-1", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-2", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-3", imgSrc: SamplePromo1, title: "Kampung Coklat" },
];

export const HomeNewPromo = () => {
	return (
		<View className="w-full">
			<View className="px-4 flex flex-row items-center justify-between w-full mb-4">
				<H1 className="text-lg">Promo Terbaru</H1>
				<Button size={"sm"} variant={"outline"} className="border-[#2668ED]">
					<Text className="text-[#2668ED] font-bold">Lihat Semua</Text>
				</Button>
			</View>

			<FlatList
				className="bg-white pl-4"
				data={promos}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				renderItem={({ item }) => (
					<ContentTile
						image={item.imgSrc}
						title={item.title}
						imageProps={{
							style: {
								maxWidth: 300,
								aspectRatio: 4.5 / 2,
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
