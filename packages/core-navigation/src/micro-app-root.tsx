import { ExpoRoot } from "expo-router";
import { type ContextWithPrefix, combineContexts } from "./combine-contexts";

interface Props {
	contexts: ContextWithPrefix[];
}

export function MicroAppRoot({ contexts }: Props) {
	return <ExpoRoot context={combineContexts(contexts)} />;
}
