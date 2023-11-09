import List from "@js-ninja/list";

import type { IMapStorage, IMapStorageConstructor, TEachCb } from "./types";

/**
 * Class for storing data as key-value pairs using Map.
 * @template K - Type of the key.
 * @template V - Type of the value.
 */
const MapStorage: IMapStorageConstructor = class MapStorageClass<K, V>
    implements IMapStorage<K, V>
{
    private storage: Map<K, V> = new Map();

    public constructor(init?: Array<[K, V]> | IMapStorage<K, V>) {
        if (init instanceof Array) {
            this.mergeArray(init);
        } else if (init instanceof MapStorage) {
            this.mergeMapStorage(init);
        }
    }

    public get = (key: K): V | null => {
        return this.storage.get(key) || null;
    };

    public set = (key: K, value: V): void => {
        this.storage.set(key, value);
    };

    public update = (key: K, updater: (value: V) => V): void => {
        const currentValue = this.get(key);

        if (!currentValue) {
            return;
        }

        const newValue = updater(currentValue);

        this.storage.set(key, newValue);
    };

    public mergeArray = (arr: Array<[K, V]>): void => {
        List.each(arr, ([key, value]) => {
            this.storage.set(key, value);
        });
    };

    public mergeMapStorage = (storage: IMapStorage<K, V>): void => {
        const arr = storage.toArray();

        this.mergeArray(arr);
    };

    public clear = (): void => {
        this.storage.clear();
    };

    public delete = (key: K): void => {
        this.storage.delete(key);
    };

    public has = (key: K): boolean => {
        return this.storage.has(key);
    };

    public keys = (): Array<K> => {
        return Array.from(this.storage.keys());
    };

    public values = (): Array<V> => {
        return Array.from(this.storage.values());
    };

    public toArray = (): Array<[K, V]> => {
        return Array.from(this.storage);
    };

    public size = (): number => {
        return this.storage.size;
    };

    public clone = (): IMapStorage<K, V> => {
        return new MapStorage<K, V>(this);
    };

    public each = (cb: TEachCb<K, V>): void => {
        List.each(this.toArray(), cb);
    };

    public filter = (
        predicate: (key: K, value: V) => boolean
    ): IMapStorage<K, V> => {
        const newList: Array<[K, V]> = [];

        this.each(([key, value]) => {
            const needAdd = predicate(key, value);

            if (needAdd) {
                newList.push([key, value]);
            }
        });

        return new MapStorage<K, V>(newList);
    };

    public map = <U>(mapper: (key: K, value: V) => U): IMapStorage<K, U> => {
        const newList: Array<[K, U]> = [];

        this.each(([key, value]) => {
            const newValue = mapper(key, value);

            newList.push([key, newValue]);
        });

        return new MapStorage<K, U>(newList);
    };
};

export default MapStorage;
