/**
 * Callback function for the `each` method of a list.
 * @template T - Type of list items.
 * @param item - List item.
 * @param index - Item index.
 * @param array - List array.
 */
export type TEachCb<K, V, T = [K, V]> = (
    item: T,
    index: number,
    array: Array<T>
) => void;

/**
 * Interface for the class constructor.
 * Creates a new instance of MapStorage.
 * @param init - Optional initial data to populate the storage.
 */
export interface IMapStorageConstructor {
    new <K, V>(): IMapStorage<K, V>;
    new <K, V>(init: Array<[K, V]>): IMapStorage<K, V>;
    new <K, V>(init: IMapStorage<K, V>): IMapStorage<K, V>;
}

/**
 * Interface for the class instance.
 * @template K - Type of the key.
 * @template V - Type of the value.
 */
export interface IMapStorage<K, V> {
    /**
     * Gets the value associated with the specified key.
     * @param key - Key.
     * @returns The value corresponding to the key, or null if it is not found.
     */
    get: (key: K) => V | null;
    /**
     * Sets the value for the specified key.
     * @param key - Key.
     * @param value - Value.
     */
    set: (key: K, value: V) => void;
    /**
     * Updates the value for the given key using the provided updater function.
     * @param key - Key.
     * @param updater - Updater function.
     */
    update: (key: K, updater: (value: V) => V) => void;
    /**
     * Sets values from an array using the keys.
     * @param arr - Array containing entries in the format [key, value].
     */
    mergeArray: (arr: Array<[K, V]>) => void;
    /**
     * Sets values from a MapStorage using the keys.
     * @param storage - MapStorage containing the entries.
     */
    mergeMapStorage: (storage: IMapStorage<K, V>) => void;
    /**
     * Clears the storage.
     */
    clear: () => void;
    /**
     * Deletes the value for the specified key.
     * @param key - Key.
     */
    delete: (key: K) => void;
    /**
     * Checks if a value exists for the specified key.
     * @param key - Key.
     * @returns {boolean} true if the value is present, false otherwise.
     */
    has: (key: K) => boolean;
    /**
     * Returns the keys of the storage.
     * @returns Keys iterator.
     */
    keys: () => Array<K>;
    /**
     * Returns the values of the storage.
     * @returns Values iterator.
     */
    values: () => Array<V>;
    /**
     * Returns the entries of the storage as an array [key, value].
     * @returns Array of entries.
     */
    toArray: () => Array<[K, V]>;
    /**
     * Returns the number of entries in the storage.
     * @returns Number of entries.
     */
    size: () => number;
    /**
     * Creates and returns a copy of the current MapStorage instance.
     * @returns Copy of the current MapStorage instance.
     */
    clone: () => IMapStorage<K, V>;
    /**
     * Executes the specified function for each entry in the storage.
     * @param cb - Callback function.
     */
    each: (cb: TEachCb<K, V>) => void;
    /**
     * Returns a new MapStorage instance containing only the entries for which the specified function returns true.
     * @param predicate - Predicate function.
     * @returns New MapStorage instance.
     */
    filter: (predicate: (key: K, value: V) => boolean) => IMapStorage<K, V>;
    /**
     * Returns a new MapStorage instance containing entries obtained by applying the specified function to each entry in the storage.
     * @param mapper - Mapper function.
     * @returns New MapStorage instance.
     */
    map: <U>(mapper: (key: K, value: V) => U) => IMapStorage<K, U>;
}
