[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / ObjectHelper

# Class: ObjectHelper

## Implements

- [`IObjectHelper`](../interfaces/IObjectHelper.md)

## Constructors

### new ObjectHelper()

> **new ObjectHelper**(`http`, `validator`): [`ObjectHelper`](ObjectHelper.md)

#### Parameters

• **http**: [`IHttpHelper`](../interfaces/IHttpHelper.md)

• **validator**: [`IValidator`](../interfaces/IValidator.md)

#### Returns

[`ObjectHelper`](ObjectHelper.md)

#### Source

[infrastructure/object.ts:6](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L6)

## Methods

### clone()

> **clone**(`obj`): `any`

#### Parameters

• **obj**: `any`

#### Returns

`any`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`clone`](../interfaces/IObjectHelper.md#clone)

#### Source

[infrastructure/object.ts:8](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L8)

***

### createKey()

> **createKey**(`data`): `string`

#### Parameters

• **data**: `any`

#### Returns

`string`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`createKey`](../interfaces/IObjectHelper.md#createkey)

#### Source

[infrastructure/object.ts:217](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L217)

***

### delta()

> **delta**(`current`, `old`?, `options`?): [`Delta`](Delta.md)

#### Parameters

• **current**: `any`

• **old?**: `any`

• **options?**: [`DeltaOptions`](../interfaces/DeltaOptions.md)

#### Returns

[`Delta`](Delta.md)

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`delta`](../interfaces/IObjectHelper.md#delta)

#### Source

[infrastructure/object.ts:282](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L282)

***

### equal()

> **equal**(`a`, `b`, `options`): `boolean`

#### Parameters

• **a**: `any`

• **b**: `any`

• **options**: [`ObjectEqualOptions`](../interfaces/ObjectEqualOptions.md)

#### Returns

`boolean`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`equal`](../interfaces/IObjectHelper.md#equal)

#### Source

[infrastructure/object.ts:178](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L178)

***

### extends()

> **extends**(`obj`, `base`, `excludes`): `any`

#### Parameters

• **obj**: `any`

• **base**: `any`

• **excludes**: `string`[]= `[]`

#### Returns

`any`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`extends`](../interfaces/IObjectHelper.md#extends)

#### Source

[infrastructure/object.ts:12](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L12)

***

### filter()

> **filter**(`obj`, `predicate`): `any`[]

#### Parameters

• **obj**: `any`

• **predicate**

#### Returns

`any`[]

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`filter`](../interfaces/IObjectHelper.md#filter)

#### Source

[infrastructure/object.ts:259](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L259)

***

### find()

> **find**(`obj`, `predicate`): `any`

#### Parameters

• **obj**: `any`

• **predicate**

#### Returns

`any`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`find`](../interfaces/IObjectHelper.md#find)

#### Source

[infrastructure/object.ts:237](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L237)

***

### fromEntries()

> **fromEntries**(`entries`): `any`

#### Parameters

• **entries**: [`string`, `any`][]

#### Returns

`any`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`fromEntries`](../interfaces/IObjectHelper.md#fromentries)

#### Source

[infrastructure/object.ts:188](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L188)

***

### getKeyProperty()

> **getKeyProperty**(`sources`, `alternatives`): `undefined` \| `string`

#### Parameters

• **sources**: `any`

• **alternatives**: `string`[]= `undefined`

#### Returns

`undefined` \| `string`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`getKeyProperty`](../interfaces/IObjectHelper.md#getkeyproperty)

#### Source

[infrastructure/object.ts:139](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L139)

***

### getValue()

#### getValue(source, _name)

> **getValue**(`source`, `_name`): `any`

##### Parameters

• **source**: `any`

• **\_name**: `string`

##### Returns

`any`

##### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`getValue`](../interfaces/IObjectHelper.md#getvalue)

##### Source

[infrastructure/object.ts:75](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L75)

#### getValue(source, _name)

> **getValue**(`source`, `_name`): `any`

##### Parameters

• **source**: `any`

• **\_name**: `string`[]

##### Returns

`any`

##### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`getValue`](../interfaces/IObjectHelper.md#getvalue)

##### Source

[infrastructure/object.ts:76](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L76)

***

### jsonPath()

> **jsonPath**(`obj`, `path`): `any`

#### Parameters

• **obj**: `any`

• **path**: `string`

#### Returns

`any`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`jsonPath`](../interfaces/IObjectHelper.md#jsonpath)

#### Source

[infrastructure/object.ts:202](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L202)

***

### names()

> **names**(`value`): `string`[]

#### Parameters

• **value**: `string`

#### Returns

`string`[]

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`names`](../interfaces/IObjectHelper.md#names)

#### Source

[infrastructure/object.ts:60](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L60)

***

### setValue()

#### setValue(source, name, value)

> **setValue**(`source`, `name`, `value`): `boolean`

##### Parameters

• **source**: `any`

• **name**: `string`

• **value**: `any`

##### Returns

`boolean`

##### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`setValue`](../interfaces/IObjectHelper.md#setvalue)

##### Source

[infrastructure/object.ts:108](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L108)

#### setValue(source, name, value)

> **setValue**(`source`, `name`, `value`): `boolean`

##### Parameters

• **source**: `any`

• **name**: `string`[]

• **value**: `any`

##### Returns

`boolean`

##### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`setValue`](../interfaces/IObjectHelper.md#setvalue)

##### Source

[infrastructure/object.ts:109](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L109)

***

### sort()

> **sort**(`source`): `any`

#### Parameters

• **source**: `any`

#### Returns

`any`

#### Implementation of

[`IObjectHelper`](../interfaces/IObjectHelper.md).[`sort`](../interfaces/IObjectHelper.md#sort)

#### Source

[infrastructure/object.ts:149](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/object.ts#L149)
