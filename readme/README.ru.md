# Библиотека MapStorage

## Описание

Библиотека MapStorage предоставляет класс для хранения данных в виде ключ-значение с использованием Map.

## Установка

Вы можете установить библиотеку MapStorage с помощью npm или yarn, выполнив следующую команду:

```bash
npm install @js-ninja/map-storage
```

или

```bash
yarn add @js-ninja/map-storage
```

## Использование

Для использования библиотеки MapStorage вам необходимо импортировать класс и каждый метод класса:

```javascript
import MapStorage from "@js-ninja/map-storage";

const storage = new MapStorage();

// Получение значения по ключу
const value = storage.get(key);

// Установка значения для ключа
storage.set(key, value);

// Обновление значения по ключу
storage.update(key, updater);

// Установка значений из массива
storage.mergeArray(arr);

// Установка значений из другого экземпляра MapStorage
storage.mergeMapStorage(otherStorage);

// Очистка хранилища
storage.clear();

// Удаление значения по ключу
storage.delete(key);

// Проверка наличия значения по ключу
const hasValue = storage.has(key);

// Получение ключей хранилища
const keys = storage.keys();

// Получение значений хранилища
const values = storage.values();

// Получение записей хранилища в виде массива [ключ, значение]
const entries = storage.toArray();

// Получение количества записей в хранилище
const size = storage.size();

// Создание копии текущего экземпляра MapStorage
const clone = storage.clone();

// Выполнение функции для каждой записи в хранилище
storage.each(callback);

// Получение нового экземпляра MapStorage, содержащего только записи, удовлетворяющие предикату
const filteredStorage = storage.filter(predicate);

// Получение нового экземпляра MapStorage, содержащего результаты применения функции маппера к каждой записи
const mappedStorage = storage.map(mapper);
```

## Лицензия

Библиотека MapStorage распространяется под лицензией [MIT License](/LICENSE).
