import { SamplePromo1, SamplePromo2 } from "@kai/core-assets";
import { ContentTile } from "@kai/core-components";
import { FlatList, View } from "react-native";

const promos = [
	{ id: "promo-1", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-2", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-3", imgSrc: SamplePromo1, title: "Kampung Coklat" },
	{ id: "promo-4", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-5", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-6", imgSrc: SamplePromo1, title: "Kampung Coklat" },
];

export const PromoNew = () => {
	return (
		<FlatList
			className="bg-white pl-4 pt-4"
			data={promos}
			horizontal
			showsHorizontalScrollIndicator={false}
			bounces={false}
			renderItem={({ item }) => (
				<ContentTile
					image={item.imgSrc}
					title={item.title}
					titleProps={{ style: { maxWidth: 160 } }}
					imageProps={{
						style: {
							maxWidth: 160,
							aspectRatio: 4.5 / 2,
							height: 120,
						},
					}}
				/>
			)}
			ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
			ListFooterComponent={() => <View style={{ width: 26 }} />}
		/>
	);
};
