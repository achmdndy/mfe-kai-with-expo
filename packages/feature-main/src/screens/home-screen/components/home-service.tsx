import { FontAwesome6 } from "@expo/vector-icons";
import { Text } from "@kai/core-components";
import { FlatList, TouchableOpacity, View } from "react-native";

const services = [
	{
		id: "service-1",
		label: "Hotel",
		icon: "hotel",
	},
	{
		id: "service-2",
		label: "Kartu Multi Trip",
		icon: "train",
	},
	{
		id: "service-3",
		label: "KAI Logistik",
		icon: "boxes-stacked",
	},
	{
		id: "serice-4",
		label: "Pulsa",
		icon: "mobile-screen",
	},
	{
		id: "service-5",
		label: "PLN",
		icon: "plug",
	},
	{
		id: "service-6",
		label: "Jadwal Sholat",
		icon: "mosque",
	},
	{
		id: "service-7",
		label: "Paket Data",
		icon: "mobile-retro",
	},
	{
		id: "service-8",
		label: "Premium Entertainment",
		icon: "youtube",
	},
];

type ServicesType = typeof services;
type ServiceItemType = ServicesType[number];

const HomeServiceItemList = ({
	item: { label, icon },
}: { item: ServiceItemType }) => {
	return (
		<TouchableOpacity className="flex items-center gap-2 w-[62px]">
			<View
				className="h-16 w-16 flex items-center justify-center rounded-full"
				style={{ backgroundColor: "#EDF6FE" }}
			>
				<FontAwesome6
					name={icon as ServiceItemType["icon"]}
					size={26}
					color={"#0F5CE6"}
				/>
			</View>
			<Text className="text-sm text-center" numberOfLines={2}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

export const HomeService = () => {
	return (
		<FlatList
			data={services}
			renderItem={({ item }) => <HomeServiceItemList item={item} />}
			horizontal
			showsHorizontalScrollIndicator={false}
			className="pl-4"
			ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
			ListFooterComponent={() => <View style={{ width: 26 }} />}
		/>
	);
};
