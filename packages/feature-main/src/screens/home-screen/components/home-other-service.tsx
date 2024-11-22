import { FontAwesome6 } from "@expo/vector-icons";
import { H1, Text } from "@kai/core-components";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, TouchableOpacity, View } from "react-native";

const otherServices = [
	{
		id: "other-service-1",
		label: "RailFood",
		icon: "bowl-food",
		bgColorTop: "#9BA6FC",
		bgColorBottom: "#1312DF",
	},
	{
		id: "other-service-2",
		label: "Taksi",
		icon: "taxi",
		bgColorTop: "#F72B06",
		bgColorBottom: "#B6192D",
	},
	{
		id: "other-service-3",
		label: "Bus",
		icon: "bus",
		bgColorTop: "#8BF6CD",
		bgColorBottom: "#19B5C8",
	},
	{
		id: "other-service-4",
		label: "Hotel",
		icon: "hotel",
		bgColorTop: "#D893F9",
		bgColorBottom: "#450DE5",
	},
];

type OtherServicesType = typeof otherServices;
type OtherServiceItemType = OtherServicesType[number];

const HomeOtherServiceItem = ({
	item: { label, icon, bgColorTop, bgColorBottom },
}: { item: OtherServiceItemType }) => {
	return (
		<TouchableOpacity className="flex items-center gap-2 w-[62px]">
			<View className="h-16 w-16 flex items-center justify-center rounded-full">
				<LinearGradient
					colors={[bgColorTop, bgColorBottom]}
					style={{
						borderRadius: 100,
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					}}
				/>
				<FontAwesome6
					name={icon as OtherServiceItemType["icon"]}
					size={26}
					color={"#FFFFFF"}
				/>
			</View>
			<Text className="text-sm text-center">{label}</Text>
		</TouchableOpacity>
	);
};

export const HomeOtherService = () => {
	return (
		<View className="px-4 w-full">
			<H1 className="text-xl mb-4">
				Layanan Tambahan Untuk{"\n"}Perjalanan Kamu
			</H1>
			<View className="flex items-center justify-center w-full">
				<FlatList
					data={otherServices}
					renderItem={({ item }) => <HomeOtherServiceItem item={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
				/>
			</View>
		</View>
	);
};
