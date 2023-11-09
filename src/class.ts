import List from "@js-ninja/list";

import { IMapStorage, IMapStorageConstructor, TEachCb } from "./types";

/**
 * Класс для хранения данных в виде ключ-значение с использованием Map.
 * @template K - Тип ключа.
 * @template V - Тип значения.
 */
const MapStorage: IMapStorageConstructor = class MapStorageClass<K, V>
    implements IMapStorage<K, V>
{
    private storage: Map<K, V> = new Map();

    /**
     * Создает новый экземпляр MapStorage.
     * @param init - Необязательные исходные данные для заполнения хранилища.
     */
    public constructor(init?: Array<[K, V]> | IMapStorage<K, V>) {
        if (init instanceof Array) {
            this.mergeArray(init);
        } else if (init instanceof MapStorage) {
            this.mergeMapStorage(init);
        }
    }

    /**
     * Получает значение, связанное с указанным ключом.
     * @param key - Ключ.
     * @returns Значение, соответствующее ключу, или null, если оно не найдено.
     */
    public get = (key: K): V | null => {
        return this.storage.get(key) || null;
    };

    /**
     * Устанавливает значение для указанного ключа.
     * @param key - Ключ.
     * @param value - Значение.
     */
    public set = (key: K, value: V): void => {
        this.storage.set(key, value);
    };

    /**
     * Обновляет значение по заданному ключу с помощью переданной функции-обновителя.
     * @param key - Ключ.
     * @param updater - Функция-обновитель.
     */
    public update = (key: K, updater: (value: V) => V): void => {
        const currentValue = this.get(key);

        if (!currentValue) {
            return;
        }

        const newValue = updater(currentValue);

        this.storage.set(key, newValue);
    };

    /**
     * Устанавливает значение по ключу из массива.
     * @param arr - Массив, содержащий записи в формате [ключ, значение].
     */
    public mergeArray = (arr: Array<[K, V]>): void => {
        List.each(arr, ([key, value]) => {
            this.storage.set(key, value);
        });
    };

    /**
     * Устанавливает значение по ключу из MapStorage.
     * @param storage - MapStorage, содержащий записи.
     */
    public mergeMapStorage = (storage: IMapStorage<K, V>): void => {
        const arr = storage.toArray();

        this.mergeArray(arr);
    };

    /**
     * Очищает хранилище.
     */
    public clear = (): void => {
        this.storage.clear();
    };

    /**
     * Удаляет значение по ключу.
     * @param key - Ключ.
     */
    public delete = (key: K): void => {
        this.storage.delete(key);
    };

    /**
     * Проверяет наличие значения по ключу.
     * @param key - Ключ.
     * @returns {boolean} true, если значение присутствует, иначе false.
     */
    public has = (key: K): boolean => {
        return this.storage.has(key);
    };

    /**
     * Возвращает ключи хранилища.
     * @returns Итератор ключей.
     */
    public keys = (): Array<K> => {
        return Array.from(this.storage.keys());
    };

    /**
     * Возвращает значения хранилища.
     * @returns Итератор значений.
     */
    public values = (): Array<V> => {
        return Array.from(this.storage.values());
    };

    /**
     * Возвращает записи хранилища в виде массива [ключ, значение].
     * @returns Массив записей.
     */
    public toArray = (): Array<[K, V]> => {
        return Array.from(this.storage);
    };

    /**
     * Возвращает количество записей в хранилище.
     * @returns Количество записей.
     */
    public size = (): number => {
        return this.storage.size;
    };

    /**
     * Создает и возвращает копию текущего экземпляра MapStorage.
     * @returns Копия текущего экземпляра MapStorage.
     */
    public clone = (): IMapStorage<K, V> => {
        return new MapStorage<K, V>(this);
    };

    /**
     * Выполняет указанную функцию для каждой записи в хранилище.
     * @param cb - Callback-функция.
     */
    public each = (cb: TEachCb<K, V>): void => {
        List.each(this.toArray(), cb);
    };

    /**
     * Возвращает новый экземпляр MapStorage, содержащий только те записи, для которых указанная функция вернет true.
     * @param predicate - Предикат.
     * @returns Новый экземпляр MapStorage.
     */
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

    /**
     * Возвращает новый экземпляр MapStorage, содержащий записи, полученные применением указанной функции к каждой записи в хранилище.
     * @param mapper - Функция маппер.
     * @returns Новый экземпляр MapStorage.
     */
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
