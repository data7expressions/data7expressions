[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / ArrayHelper

# Class: ArrayHelper

## Implements

- [`IArrayHelper`](../interfaces/IArrayHelper.md)

## Constructors

### new ArrayHelper()

> **new ArrayHelper**(): [`ArrayHelper`](ArrayHelper.md)

#### Returns

[`ArrayHelper`](ArrayHelper.md)

## Methods

### chunks()

> **chunks**(`array`, `size`): `any`[][]

#### Parameters

• **array**: `any`[]

• **size**: `number`

#### Returns

`any`[][]

#### Implementation of

[`IArrayHelper`](../interfaces/IArrayHelper.md).[`chunks`](../interfaces/IArrayHelper.md#chunks)

#### Source

[infrastructure/array.ts:61](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/array.ts#L61)

***

### difference()

> **difference**(`array1`, `array2`): `any`[]

Left difference of two arrays: arr1 - arr2

#### Parameters

• **array1**: `any`[]

• **array2**: `any`[]

#### Returns

`any`[]

#### Implementation of

[`IArrayHelper`](../interfaces/IArrayHelper.md).[`difference`](../interfaces/IArrayHelper.md#difference)

#### Source

[infrastructure/array.ts:38](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/array.ts#L38)

***

### intersection()

> **intersection**(`array1`, `array2`): `any`[]

Intersection of two arrays

#### Parameters

• **array1**: `any`[]

• **array2**: `any`[]

#### Returns

`any`[]

#### Implementation of

[`IArrayHelper`](../interfaces/IArrayHelper.md).[`intersection`](../interfaces/IArrayHelper.md#intersection)

#### Source

[infrastructure/array.ts:28](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/array.ts#L28)

***

### shuffle()

> **shuffle**(`array`): `any`[]

Shuffle an array

#### Parameters

• **array**: `any`[]

#### Returns

`any`[]

#### Implementation of

[`IArrayHelper`](../interfaces/IArrayHelper.md).[`shuffle`](../interfaces/IArrayHelper.md#shuffle)

#### Source

[infrastructure/array.ts:57](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/array.ts#L57)

***

### symmetricDifference()

> **symmetricDifference**(`array1`, `array2`): `any`[]

Symmetric difference of two arrays: ( arr1 - arr2 ) U ( arr2 - arr1 )

#### Parameters

• **array1**: `any`[]

• **array2**: `any`[]

#### Returns

`any`[]

#### Implementation of

[`IArrayHelper`](../interfaces/IArrayHelper.md).[`symmetricDifference`](../interfaces/IArrayHelper.md#symmetricdifference)

#### Source

[infrastructure/array.ts:48](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/array.ts#L48)

***

### union()

> **union**(`array1`, `array2`): `any`[]

Union of two arrays

#### Parameters

• **array1**: `any`[]

• **array2**: `any`[]

#### Returns

`any`[]

#### Implementation of

[`IArrayHelper`](../interfaces/IArrayHelper.md).[`union`](../interfaces/IArrayHelper.md#union)

#### Source

[infrastructure/array.ts:18](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/array.ts#L18)

***

### unique()

> **unique**(`array`): `any`[]

Gets an array with no duplicates

#### Parameters

• **array**: `any`[]

array

#### Returns

`any`[]

array with no duplicates

#### Implementation of

[`IArrayHelper`](../interfaces/IArrayHelper.md).[`unique`](../interfaces/IArrayHelper.md#unique)

#### Source

[infrastructure/array.ts:8](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/array.ts#L8)
