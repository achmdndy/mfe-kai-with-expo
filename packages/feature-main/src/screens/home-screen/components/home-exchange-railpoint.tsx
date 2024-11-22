import { SampleExchange } from "@kai/core-assets";
import {
	Badge,
	Button,
	ContentTile,
	H1,
	Muted,
	Text,
} from "@kai/core-components";
import { FlatList, View } from "react-native";

const railpoints = [
	{
		id: "railpoint-1",
		imgSrc: SampleExchange,
		title: "Dapatkan 25.000 Mapclub Points",
	},
	{
		id: "railpoint-2",
		imgSrc: SampleExchange,
		title: "Dapatkan 50.000 Mapclub Points",
	},
	{
		id: "railpoint-3",
		imgSrc: SampleExchange,
		title: "Dapatkan 100.000 Mapclub Points",
	},
];

export const HomeExchangeRailpoint = () => {
	return (
		<View className="w-full">
			<View className="px-4 flex flex-row items-center justify-between w-full mb-4">
				<H1 className="text-lg">Tukar Railpoin mu sekarang</H1>
				<Button size={"sm"} variant={"outline"} className="border-[#2668ED]">
					<Text className="text-[#2668ED] font-bold">Lihat Semua</Text>
				</Button>
			</View>

			<FlatList
				className="bg-white pl-4"
				data={railpoints}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				renderItem={({ item }) => (
					<ContentTile
						title={item.title}
						titleProps={{ style: { maxWidth: 200 } }}
						image={item.imgSrc}
						imageProps={{
							style: {
								maxWidth: 300,
								aspectRatio: 4 / 2,
								height: 100,
							},
						}}
					>
						<View className="flex flex-row items-center gap-1">
							<Badge className="rounded-none bg-[#FFF1DA]">
								<Text className="font-bold text-[#F29E4B]">500</Text>
							</Badge>
							<Muted>Railpoint</Muted>
						</View>
					</ContentTile>
				)}
				ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
				ListFooterComponent={() => <View style={{ width: 26 }} />}
			/>
		</View>
	);
};
