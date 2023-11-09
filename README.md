# MapStorage Library

## README.md

-   ru [Русский](readme/README.ru.md)

## Description

The MapStorage library provides a class for storing key-value data using Map.

## Installation

You can install the MapStorage library using npm or yarn by executing the following command:

```bash
npm install @js-ninja/map-storage
```

or

```bash
yarn add @js-ninja/map-storage
```

## Usage

To use the MapStorage library, you need to import the class and each method of the class:

```javascript
import MapStorage from "@js-ninja/map-storage";

const storage = new MapStorage();

// Get a value by key
const value = storage.get(key);

// Set a value for a key
storage.set(key, value);

// Update a value by key
storage.update(key, updater);

// Merge values from an array
storage.mergeArray(arr);

// Merge values from another MapStorage instance
storage.mergeMapStorage(otherStorage);

// Clear the storage
storage.clear();

// Delete a value by key
storage.delete(key);

// Check if a value exists for a key
const hasValue = storage.has(key);

// Get the keys in the storage
const keys = storage.keys();

// Get the values in the storage
const values = storage.values();

// Get the entries in the storage as an array [key, value]
const entries = storage.toArray();

// Get the number of entries in the storage
const size = storage.size();

// Create a copy of the current MapStorage instance
const clone = storage.clone();

// Execute a function for each entry in the storage
storage.each(callback);

// Get a new MapStorage instance containing only the entries that satisfy the predicate
const filteredStorage = storage.filter(predicate);

// Get a new MapStorage instance containing the results of applying the mapper function to each entry
const mappedStorage = storage.map(mapper);
```

## License

The MapStorage library is distributed under the [MIT License](/LICENSE).
