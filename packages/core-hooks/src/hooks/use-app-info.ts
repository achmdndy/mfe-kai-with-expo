import _ from "lodash";

export const useAppInfo = ({
	version,
	releaseType,
}: { version: string; releaseType: string }) => {
	const majorVersion = (): string => {
		const getVersion = version.split(".");
		return getVersion[0];
	};

	const minorVersion = (): string => {
		const getVersion = version.split(".");
		return getVersion[1];
	};

	return {
		majorVersion,
		minorVersion,
		fullVersion: version,
		releaseType: _.capitalize(releaseType),
	};
};
