[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / MemoryCache

# Class: MemoryCache\<K, T\>

## Type parameters

• **K**

• **T**

## Implements

- [`ICache`](../interfaces/ICache.md)\<`K`, `T`\>

## Constructors

### new MemoryCache()

> **new MemoryCache**\<`K`, `T`\>(`map`): [`MemoryCache`](MemoryCache.md)\<`K`, `T`\>

#### Parameters

• **map**: `Map`\<`K`, `T`\>= `undefined`

#### Returns

[`MemoryCache`](MemoryCache.md)\<`K`, `T`\>

#### Source

[application/cache.ts:5](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/cache.ts#L5)

## Methods

### delete()

> **delete**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

#### Implementation of

[`ICache`](../interfaces/ICache.md).[`delete`](../interfaces/ICache.md#delete)

#### Source

[application/cache.ts:15](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/cache.ts#L15)

***

### get()

> **get**(`key`): `undefined` \| `T`

#### Parameters

• **key**: `K`

#### Returns

`undefined` \| `T`

#### Implementation of

[`ICache`](../interfaces/ICache.md).[`get`](../interfaces/ICache.md#get)

#### Source

[application/cache.ts:7](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/cache.ts#L7)

***

### set()

> **set**(`key`, `value`): `void`

#### Parameters

• **key**: `K`

• **value**: `T`

#### Returns

`void`

#### Implementation of

[`ICache`](../interfaces/ICache.md).[`set`](../interfaces/ICache.md#set)

#### Source

[application/cache.ts:11](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/cache.ts#L11)
