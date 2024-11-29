import { Ionicons } from "@expo/vector-icons";
import { H1, H2, Muted } from "@kai/core-components";
import type { ElementType } from "react";
import { FlatList, Pressable, View } from "react-native";

const HelpListItem = ({
	item: { icon: Icon, title, description },
}: { item: { icon: ElementType; title: string; description: string } }) => {
	return (
		<Pressable>
			<View className="p-4 border border-input rounded-xl flex flex-row items-center justify-between">
				<View className="flex flex-row items-center gap-4">
					<Icon />
					<View>
						<H2 className="text-lg">{title}</H2>
						<Muted>{description}</Muted>
					</View>
				</View>
				<Ionicons name="chevron-forward" size={20} />
			</View>
		</Pressable>
	);
};

const helpList = [
	{
		icon: () => <Ionicons name="chevron-forward" />,
		title: "FAQ",
		description:
			"Pilih topik yang ingin Anda ketahui melalui pertanyaan yang sering diajukan.",
	},
	{
		icon: () => <Ionicons name="chevron-forward" />,
		title: "Telepon",
		description:
			"Hubungi Contact Center KAI 121 menggunakan jaringan internet.",
	},
	{
		icon: () => <Ionicons name="chevron-forward" />,
		title: "Email",
		description: "Kirim pertanyaan melalui email cs@kai.id",
	},
	{
		icon: () => <Ionicons name="chevron-forward" />,
		title: "X (Twitter)",
		description: "Kirim pertanyaan ke akun resmi KAI @KAI121 di Aplikasi X",
	},
];

export const HelpList = () => {
	return (
		<View className="px-4 py-4">
			<H1 className="text-xl mb-4">Silahkan Pilih Layanan Bantuan Kami</H1>
			<FlatList
				data={helpList}
				renderItem={({ item }) => <HelpListItem item={item} />}
				ItemSeparatorComponent={() => <View className="h-2" />}
			/>
		</View>
	);
};
