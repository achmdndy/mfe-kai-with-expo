import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { type ListRenderItemInfo, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cn } from "../..//lib/utils";
import {
	BottomSheet,
	BottomSheetContent,
	BottomSheetFlatList,
	BottomSheetHeader,
	BottomSheetOpenTrigger,
	BottomSheetTextInput,
	useBottomSheet,
} from "../deprecated-ui/bottom-sheet";
import {
	Button,
	buttonTextVariants,
	buttonVariants,
} from "../deprecated-ui/button";

const HEADER_HEIGHT = 140;
interface ComboboxOption {
	label?: string;
	value?: string;
}

const Combobox = React.forwardRef<
	React.ElementRef<typeof Button>,
	Omit<React.ComponentPropsWithoutRef<typeof Button>, "children"> & {
		items: ComboboxOption[];
		placeholder?: string;
		inputProps?: React.ComponentPropsWithoutRef<typeof BottomSheetTextInput>;
		emptyText?: string;
		defaultSelectedItem?: ComboboxOption | null;
		selectedItem?: ComboboxOption | null;
		onSelectedItemChange?: (option: ComboboxOption | null) => void;
	}
>(
	(
		{
			className,
			textClass,
			variant = "ghost",
			size = "sm",
			inputProps,
			placeholder,
			items,
			emptyText = "Nothing found...",
			defaultSelectedItem = null,
			selectedItem: selectedItemProp,
			onSelectedItemChange,
			...props
		},
		ref,
	) => {
		const insets = useSafeAreaInsets();
		const [search, setSearch] = React.useState("");
		const [selectedItem, setSelectedItem] =
			React.useState<ComboboxOption | null>(defaultSelectedItem);
		const bottomSheet = useBottomSheet();
		const inputRef =
			React.useRef<React.ComponentRef<typeof BottomSheetTextInput>>(null);

		const listItems = React.useMemo(() => {
			return search
				? items.filter((item) => {
						return item.label
							?.toLocaleLowerCase()
							.includes(search.toLocaleLowerCase());
					})
				: items;
		}, [items, search]);

		function onItemChange(listItem: ComboboxOption) {
			if (selectedItemProp?.value === listItem.value) {
				return null;
			}
			setSearch("");
			bottomSheet.close();
			return listItem;
		}

		const renderItem = React.useCallback(
			({ item }: ListRenderItemInfo<unknown>) => {
				const listItem = item as ComboboxOption;
				const isSelected = onSelectedItemChange
					? selectedItemProp?.value === listItem.value
					: selectedItem?.value === listItem.value;
				return (
					<Button
						variant="ghost"
						className="android:flex-1 flex-row items-center justify-between !px-0 py-4"
						// style={{ minHeight: 70 }}
						onPress={() => {
							if (onSelectedItemChange) {
								onSelectedItemChange(onItemChange(listItem));
								return;
							}
							setSelectedItem(onItemChange(listItem));
						}}
					>
						<View className="flex-1 flex-row">
							<Text className={"text-xl text-foreground"}>
								{listItem.label}
							</Text>
						</View>
						{isSelected && (
							<FontAwesome6
								name="check"
								size={24}
								className={"mt-1.5 px-6 text-foreground"}
							/>
						)}
					</Button>
				);
			},
			[selectedItem, selectedItemProp],
		);

		function onSubmitEditing() {
			const firstItem = listItems[0];
			if (!firstItem) return;
			if (onSelectedItemChange) {
				onSelectedItemChange(firstItem);
			} else {
				setSelectedItem(firstItem);
			}
			bottomSheet.close();
		}

		function onSearchIconPress() {
			if (!inputRef.current) return;
			const input = inputRef.current;
			if (input && "focus" in input && typeof input.focus === "function") {
				input.focus();
			}
		}

		const itemSelected = onSelectedItemChange ? selectedItemProp : selectedItem;

		return (
			<BottomSheet>
				<BottomSheetOpenTrigger
					ref={ref}
					className={buttonVariants({
						variant,
						size,
						className: cn(
							"w-full flex-row !border-b border-input !px-0",
							className,
						),
					})}
					role="combobox"
					{...props}
				>
					<View className="flex-1 flex-row justify-between">
						<Text
							className={buttonTextVariants({
								variant,
								size,
								className: cn(!itemSelected && "opacity-50", textClass),
							})}
							numberOfLines={1}
						>
							{itemSelected ? itemSelected.label : (placeholder ?? "")}
						</Text>
						<FontAwesome6
							name="chevron-down"
							className="ml-2 text-foreground opacity-50"
						/>
					</View>
				</BottomSheetOpenTrigger>
				<BottomSheetContent
					ref={bottomSheet.ref}
					onDismiss={() => {
						setSearch("");
					}}
				>
					<BottomSheetHeader className="border-b-0">
						<Text className="px-0.5 text-center text-xl font-bold text-foreground">
							{placeholder}
						</Text>
					</BottomSheetHeader>
					<View className="relative border-b border-border px-4 pb-4">
						<BottomSheetTextInput
							role="searchbox"
							ref={inputRef}
							className="pl-12"
							value={search}
							onChangeText={setSearch}
							onSubmitEditing={onSubmitEditing}
							returnKeyType="next"
							clearButtonMode="while-editing"
							placeholder="Search..."
							{...inputProps}
						/>
						<Button
							variant={"ghost"}
							size="sm"
							className="absolute left-4 top-2.5"
							onPress={onSearchIconPress}
						>
							<Ionicons
								name="search"
								size={18}
								className="text-foreground opacity-50"
							/>
						</Button>
					</View>
					<BottomSheetFlatList
						data={listItems}
						contentContainerStyle={{
							paddingBottom: insets.bottom + HEADER_HEIGHT,
						}}
						renderItem={renderItem}
						keyExtractor={(_, index) => index.toString()}
						className={"px-4"}
						keyboardShouldPersistTaps="handled"
						ListEmptyComponent={() => {
							return (
								<View
									className="flex-1 flex-row items-center justify-center px-3 py-5"
									style={{ minHeight: 70 }}
								>
									<Text className={"text-center text-xl text-muted-foreground"}>
										{emptyText}
									</Text>
								</View>
							);
						}}
					/>
				</BottomSheetContent>
			</BottomSheet>
		);
	},
);

Combobox.displayName = "Combobox";

export { Combobox, type ComboboxOption };
