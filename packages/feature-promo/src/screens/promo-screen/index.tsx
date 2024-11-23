import { Fragment } from "react";
import { ScrollView } from "react-native";
import { PromoHeader } from "./components/promo-header";
import { PromoList } from "./components/promo-list";
import { PromoNew } from "./components/promo-new";

export const PromoScreen = () => {
	return (
		<Fragment>
			<PromoHeader />
			<ScrollView showsVerticalScrollIndicator={false}>
				<PromoNew />
				<PromoList />
			</ScrollView>
		</Fragment>
	);
};
