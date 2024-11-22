import { SampleArticle1, SampleArticle2 } from "@kai/core-assets";
import { Button, ContentTile, H1, Text } from "@kai/core-components";
import { FlatList, View } from "react-native";

const articles = [
	{
		id: "article-1",
		imgSrc: SampleArticle1,
		title:
			"Memiliki Sejarang Stasiun Klaten: Bangunan Belanda Berusia 153 Tahun",
	},
	{
		id: "article-2",
		imgSrc: SampleArticle2,
		title: "Mau Liburan Seru? Yuk Cobain Naik Kereta Luar Biasa",
	},
	{
		id: "article-3",
		imgSrc: SampleArticle1,
		title: "Mau Mandi atau Titip Barang? Ke Shower and Locker Aja!",
	},
];

export const HomeArticles = () => {
	return (
		<View className="w-full pb-8">
			<View className="px-4 flex flex-row items-center justify-between w-full mb-4">
				<H1 className="text-lg">Artikel Menarik</H1>
				<Button size={"sm"} variant={"outline"} className="border-[#2668ED]">
					<Text className="text-[#2668ED] font-bold">Lihat Semua</Text>
				</Button>
			</View>

			<FlatList
				className="bg-white pl-4"
				data={articles}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				renderItem={({ item }) => (
					<ContentTile
						image={item.imgSrc}
						title={item.title}
						titleProps={{
							className: "normal-case font-normal",
							style: { maxWidth: 300 },
						}}
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
