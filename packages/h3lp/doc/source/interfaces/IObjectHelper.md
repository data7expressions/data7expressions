[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / IObjectHelper

# Interface: IObjectHelper

## Methods

### clone()

> **clone**(`obj`): `any`

#### Parameters

• **obj**: `any`

#### Returns

`any`

#### Source

[application/object.ts:7](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L7)

***

### createKey()

> **createKey**(`data`): `string`

#### Parameters

• **data**: `any`

#### Returns

`string`

#### Source

[application/object.ts:19](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L19)

***

### delta()

> **delta**(`current`, `old`?, `options`?): [`Delta`](../classes/Delta.md)

#### Parameters

• **current**: `any`

• **old?**: `any`

• **options?**: [`DeltaOptions`](DeltaOptions.md)

#### Returns

[`Delta`](../classes/Delta.md)

#### Source

[application/object.ts:23](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L23)

***

### equal()

> **equal**(`a`, `b`, `options`): `boolean`

#### Parameters

• **a**: `any`

• **b**: `any`

• **options**: [`ObjectEqualOptions`](ObjectEqualOptions.md)

#### Returns

`boolean`

#### Source

[application/object.ts:24](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L24)

***

### extends()

> **extends**(`obj`, `base`, `excludes`?): `any`

#### Parameters

• **obj**: `any`

• **base**: `any`

• **excludes?**: `string`[]

#### Returns

`any`

#### Source

[application/object.ts:8](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L8)

***

### filter()

> **filter**(`obj`, `predicate`): `any`[]

#### Parameters

• **obj**: `any`

• **predicate**

#### Returns

`any`[]

#### Source

[application/object.ts:22](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L22)

***

### find()

> **find**(`obj`, `predicate`): `any`

#### Parameters

• **obj**: `any`

• **predicate**

#### Returns

`any`

#### Source

[application/object.ts:21](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L21)

***

### fromEntries()

> **fromEntries**(`entries`): `any`

#### Parameters

• **entries**: [`string`, `any`][]

#### Returns

`any`

#### Source

[application/object.ts:17](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L17)

***

### getKeyProperty()

> **getKeyProperty**(`sources`, `alternatives`?): `undefined` \| `string`

#### Parameters

• **sources**: `any`

• **alternatives?**: `string`[]

#### Returns

`undefined` \| `string`

#### Source

[application/object.ts:20](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L20)

***

### getValue()

#### getValue(source, _name)

> **getValue**(`source`, `_name`): `any`

##### Parameters

• **source**: `any`

• **\_name**: `string`

##### Returns

`any`

##### Source

[application/object.ts:10](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L10)

#### getValue(source, _name)

> **getValue**(`source`, `_name`): `any`

##### Parameters

• **source**: `any`

• **\_name**: `string`[]

##### Returns

`any`

##### Source

[application/object.ts:11](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L11)

#### getValue(source, _name)

> **getValue**(`source`, `_name`): `any`

##### Parameters

• **source**: `any`

• **\_name**: `string` \| `string`[]

##### Returns

`any`

##### Source

[application/object.ts:12](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L12)

***

### jsonPath()

> **jsonPath**(`obj`, `path`): `any`

#### Parameters

• **obj**: `any`

• **path**: `string`

#### Returns

`any`

#### Source

[application/object.ts:18](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L18)

***

### names()

> **names**(`value`): `string`[]

#### Parameters

• **value**: `string`

#### Returns

`string`[]

#### Source

[application/object.ts:9](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L9)

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

##### Source

[application/object.ts:13](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L13)

#### setValue(source, name, value)

> **setValue**(`source`, `name`, `value`): `boolean`

##### Parameters

• **source**: `any`

• **name**: `string`[]

• **value**: `any`

##### Returns

`boolean`

##### Source

[application/object.ts:14](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L14)

#### setValue(source, name, value)

> **setValue**(`source`, `name`, `value`): `boolean`

##### Parameters

• **source**: `any`

• **name**: `string` \| `string`[]

• **value**: `any`

##### Returns

`boolean`

##### Source

[application/object.ts:15](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L15)

***

### sort()

> **sort**(`source`): `any`

#### Parameters

• **source**: `any`

#### Returns

`any`

#### Source

[application/object.ts:16](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/object.ts#L16)
