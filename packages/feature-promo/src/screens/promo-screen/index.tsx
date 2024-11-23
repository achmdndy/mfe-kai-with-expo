import { Fragment } from "react";
import { ScrollView } from "react-native";
import { PromoHeader } from "./components/promo-header";
import { PromoList } from "./components/promo-list";
import { PromoNew } from "./components/promo-new";

export const PromoScreen = () => {
	return (
		<Fragment>
			<PromoHeader />
			<ScrollView>
				<PromoNew />
				<PromoList />
			</ScrollView>
		</Fragment>
	);
};
