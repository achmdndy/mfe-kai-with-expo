import { SamplePromo1, SamplePromo2 } from "@kai/core-assets";
import { ContentTile } from "@kai/core-components";
import { View } from "react-native";

const promos = [
	{ id: "promo-1", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-2", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-3", imgSrc: SamplePromo1, title: "Kampung Coklat" },
	{ id: "promo-4", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-5", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-6", imgSrc: SamplePromo1, title: "Kampung Coklat" },
	{ id: "promo-7", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-8", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-9", imgSrc: SamplePromo1, title: "Kampung Coklat" },
	{ id: "promo-10", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-11", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-12", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-13", imgSrc: SamplePromo1, title: "Kampung Coklat" },
	{ id: "promo-14", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-15", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-16", imgSrc: SamplePromo1, title: "Kampung Coklat" },
	{ id: "promo-17", imgSrc: SamplePromo1, title: "Palm Park Hotel" },
	{ id: "promo-18", imgSrc: SamplePromo2, title: "Fitday Studio Madiun" },
	{ id: "promo-19", imgSrc: SamplePromo1, title: "Kampung Coklat" },
	{ id: "promo-20", imgSrc: SamplePromo1, title: "Kampung Coklat" },
];

export const PromoList = () => {
	return (
		<View className="flex flex-col gap-4 pt-8 px-4">
			{promos.flatMap((item) => (
				<ContentTile
					key={item.id}
					image={item.imgSrc}
					title={item.title}
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
	);
};
