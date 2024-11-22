import { useRealm as useRealmReact } from "@realm/react";
import Realm from "realm";

type RealmData = Record<string, string | number | boolean | null | undefined>;

interface ClearDataOptions {
	schemaName: string;
	filterCondition: string;
	filterValue: unknown[];
	relations?: {
		propertyName: string;
		schemaName: string;
		relations?: ClearDataOptions["relations"];
	}[];
}

export const useRealm = () => {
	const realm = useRealmReact();

	const createIfNotExists = <T extends RealmData>({
		schema,
		data,
		uniqueField,
	}: {
		schema: string;
		data: T | T[];
		uniqueField: keyof T;
	}): void => {
		const dataArray = Array.isArray(data) ? data : [data];

		realm.write(() => {
			dataArray.flatMap((item) => {
				const existingItem = realm
					.objects(schema)
					.filtered(`${String(uniqueField)} = $0`, item[uniqueField]);
				if (existingItem.length === 0) {
					realm.create(schema, item);
				}
			});
		});
	};

	const createOrUpdate = <T extends RealmData>({
		schema,
		data,
	}: {
		schema: string;
		data: T | T[];
	}): void => {
		const dataArray = Array.isArray(data) ? data : [data];

		realm.write(() => {
			dataArray.flatMap((item) => {
				realm.create(schema, item, Realm.UpdateMode.Modified);
			});
		});
	};

	const clearDataSchema = ({ schema }: { schema: string }) => {
		realm.write(() => {
			realm.delete(realm.objects(schema));
		});
	};

	const clearDataWithRelationSchema = (options: ClearDataOptions) => {
		const { schemaName, filterCondition, filterValue, relations } = options;

		realm.write(() => {
			const objectsToDelete = realm
				.objects(schemaName)
				.filtered(filterCondition, filterValue);

			objectsToDelete.flatMap((object) => {
				const deleteRelations = (
					obj: Realm.Object & Record<string, unknown>,
					rels?: ClearDataOptions["relations"],
				) => {
					if (rels) {
						rels.flatMap((relation) => {
							const relatedObjects = obj[relation.propertyName];
							if (relatedObjects) {
								if (relatedObjects instanceof Realm.List) {
									relatedObjects.flatMap((relatedObject) => {
										deleteRelations(relatedObject, relation.relations);
										realm.delete(relatedObject);
									});
								} else {
									deleteRelations(
										relatedObjects as Realm.Object & Record<string, unknown>,
										relation.relations,
									);
									realm.delete(relatedObjects);
								}
							}
						});
					}
				};

				deleteRelations(object, relations);

				realm.delete(object);
			});
		});
	};

	return {
		clearDataWithRelationSchema,
		createIfNotExists,
		clearDataSchema,
		createOrUpdate,
		realm,
	};
};
