/**
 * Callback-функция для метода each списка.
 * @template T - Тип элементов списка.
 * @param item - Элемент списка.
 * @param index - Индекс элемента.
 * @param array - Список.
 */
export type TEachCb<K, V, T = [K, V]> = (
    item: T,
    index: number,
    array: Array<T>
) => void;

/**
 * Интерфейс класса для хранения данных в виде ключ-значение с использованием Map.
 */
export interface IMapStorageConstructor {
    new <K, V>(): IMapStorage<K, V>;
    new <K, V>(init: Array<[K, V]>): IMapStorage<K, V>;
    new <K, V>(init: IMapStorage<K, V>): IMapStorage<K, V>;
}

/**
 * Интерфейс экземпляра класса для хранения данных в виде ключ-значение с использованием Map.
 */
export interface IMapStorage<K, V> {
    get: (key: K) => V | null;
    set: (key: K, value: V) => void;
    update: (key: K, updater: (value: V) => V) => void;
    mergeArray: (arr: Array<[K, V]>) => void;
    mergeMapStorage: (storage: IMapStorage<K, V>) => void;
    clear: () => void;
    delete: (key: K) => void;
    has: (key: K) => boolean;
    keys: () => Array<K>;
    values: () => Array<V>;
    toArray: () => Array<[K, V]>;
    size: () => number;
    clone: () => IMapStorage<K, V>;
    each: (cb: TEachCb<K, V>) => void;
    filter: (predicate: (key: K, value: V) => boolean) => IMapStorage<K, V>;
    map: <U>(mapper: (key: K, value: V) => U) => IMapStorage<K, U>;
}
