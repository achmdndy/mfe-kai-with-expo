import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = () => {
	const setItem = async (key: string, value: unknown): Promise<void> => {
		try {
			await AsyncStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error("Error setting item:", error);
		}
	};

	const getItem = async (key: string): Promise<unknown | null> => {
		try {
			const value = await AsyncStorage.getItem(key);
			return value != null ? JSON.parse(value) : null;
		} catch (error) {
			console.error("Error getting item:", error);
			return null;
		}
	};

	const removeItem = async (key: string): Promise<void> => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (error) {
			console.error("Error removing item:", error);
		}
	};

	const mergeItem = async (key: string, value: unknown): Promise<void> => {
		try {
			await AsyncStorage.mergeItem(key, JSON.stringify(value));
		} catch (error) {
			console.error("Error merging item:", error);
		}
	};

	const clear = async (): Promise<void> => {
		try {
			await AsyncStorage.clear();
		} catch (error) {
			console.error("Error clearing AsyncStorage:", error);
		}
	};

	const getAllKeys = async (): Promise<string[]> => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			return Array.from(keys);
		} catch (error) {
			console.error("Error getting all keys:", error);
			return [];
		}
	};

	const getAllItems = async (): Promise<Record<string, unknown>> => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const items = await AsyncStorage.multiGet(Array.from(keys));
			return items.reduce(
				(accumulator: Record<string, unknown>, [key, value]) => {
					accumulator[key] = value != null ? JSON.parse(value) : null;
					return accumulator;
				},
				{},
			);
		} catch (error) {
			console.error("Error getting all items:", error);
			return {};
		}
	};

	return { setItem, getItem, removeItem, mergeItem, getAllKeys, getAllItems };
};
