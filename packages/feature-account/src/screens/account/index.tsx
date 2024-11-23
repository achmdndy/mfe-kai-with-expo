import { Fragment } from "react";
import { AccountHeader } from "./components/account-header";
import { AccountMenu } from "./components/account-menu";
import { AccountVersion } from "./components/account-version";
export const AccountScreen = () => {
	return (
		<Fragment>
			<AccountHeader />
			<AccountMenu />
			<AccountVersion />
		</Fragment>
	);
};
