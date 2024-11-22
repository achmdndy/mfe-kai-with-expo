import { FontAwesome6 } from "@expo/vector-icons";
import { Text } from "@kai/core-components";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, TouchableOpacity, View } from "react-native";

const trains = [
	{
		id: "train-1",
		label: "Antar Kota",
		icon: "train",
		bgColorTop: "#9BA6FC",
		bgColorBottom: "#1312DF",
	},
	{
		id: "train-2",
		label: "Local",
		icon: "train",
		bgColorTop: "#F7C535",
		bgColorBottom: "#F97406",
	},
	{
		id: "train-3",
		label: "Commuter Line",
		icon: "train",
		bgColorTop: "#F88F14",
		bgColorBottom: "#EC0902",
	},
	{
		id: "train-4",
		label: "LRT",
		icon: "train",
		bgColorTop: "#9739de",
		bgColorBottom: "#EC0902",
	},
	{
		id: "train-5",
		label: "Bandara",
		icon: "train",
		bgColorTop: "#88E7F9",
		bgColorBottom: "#097CDA",
	},
	{
		id: "train-6",
		label: "Whoosh",
		icon: "train",
		bgColorTop: "#F72B06",
		bgColorBottom: "#B6192D",
	},
];

type TrainsType = typeof trains;
type TrainItemType = TrainsType[number];

const HomeTrainItemList = ({
	item: { label, icon, bgColorTop, bgColorBottom },
}: { item: TrainItemType }) => {
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
					name={icon as TrainItemType["icon"]}
					size={26}
					color={"#FFFFFF"}
				/>
			</View>
			<Text className="text-sm text-center">{label}</Text>
		</TouchableOpacity>
	);
};

export const HomeTrainList = () => {
	return (
		<FlatList
			data={trains}
			renderItem={({ item }) => <HomeTrainItemList item={item} />}
			horizontal
			showsHorizontalScrollIndicator={false}
			className="pl-4"
			ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
			ListFooterComponent={() => <View style={{ width: 26 }} />}
		/>
	);
};
