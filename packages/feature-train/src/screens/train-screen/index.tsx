import { Fragment } from "react";
import { TrainHeader } from "./components/train-header";
import { TrainPopularDestinations } from "./components/train-popular-destinations";

export const TrainScreen = () => {
	return (
		<Fragment>
			<TrainHeader />
			<TrainPopularDestinations />
		</Fragment>
	);
};
