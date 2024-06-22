[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / StringHelper

# Class: StringHelper

## Implements

- [`IStringHelper`](../interfaces/IStringHelper.md)

## Constructors

### new StringHelper()

> **new StringHelper**(`validator`): [`StringHelper`](StringHelper.md)

#### Parameters

• **validator**: [`IValidator`](../interfaces/IValidator.md)

#### Returns

[`StringHelper`](StringHelper.md)

#### Source

[infrastructure/string.ts:6](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L6)

## Methods

### capitalize()

> **capitalize**(`str`): `string`

#### Parameters

• **str**: `string`

#### Returns

`string`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`capitalize`](../interfaces/IStringHelper.md#capitalize)

#### Source

[infrastructure/string.ts:45](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L45)

***

### concat()

> **concat**(`values`): `any`

#### Parameters

• **values**: `any`[]

#### Returns

`any`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`concat`](../interfaces/IStringHelper.md#concat)

#### Source

[infrastructure/string.ts:28](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L28)

***

### equal()

> **equal**(`a`, `b`, `options`): `boolean`

#### Parameters

• **a**: `string`

• **b**: `string`

• **options**: [`EqualOptions`](../interfaces/EqualOptions.md)= `{}`

#### Returns

`boolean`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`equal`](../interfaces/IStringHelper.md#equal)

#### Source

[infrastructure/string.ts:16](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L16)

***

### initCap()

> **initCap**(`str`): `string`

#### Parameters

• **str**: `string`

#### Returns

`string`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`initCap`](../interfaces/IStringHelper.md#initcap)

#### Source

[infrastructure/string.ts:49](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L49)

***

### isCharacter()

> **isCharacter**(`char`): `boolean`

#### Parameters

• **char**: `string`

#### Returns

`boolean`

#### Source

[infrastructure/string.ts:69](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L69)

***

### isDigit()

> **isDigit**(`char`): `boolean`

#### Parameters

• **char**: `string`

#### Returns

`boolean`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`isDigit`](../interfaces/IStringHelper.md#isdigit)

#### Source

[infrastructure/string.ts:74](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L74)

***

### isLowerCase()

> **isLowerCase**(`char`): `boolean`

#### Parameters

• **char**: `string`

#### Returns

`boolean`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`isLowerCase`](../interfaces/IStringHelper.md#islowercase)

#### Source

[infrastructure/string.ts:64](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L64)

***

### isUpperCase()

> **isUpperCase**(`char`): `boolean`

#### Parameters

• **char**: `string`

#### Returns

`boolean`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`isUpperCase`](../interfaces/IStringHelper.md#isuppercase)

#### Source

[infrastructure/string.ts:59](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L59)

***

### normalize()

> **normalize**(`source`, `options`): `string`

Normalize a string with utf-8 characters.

#### Parameters

• **source**: `string`

string to normalize

• **options**: [`NormalizeOptions`](../interfaces/NormalizeOptions.md)= `{}`

#### Returns

`string`

returns a lowercase string replacing extraneous characters with ascii characters between 97 to 121 or numbers

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`normalize`](../interfaces/IStringHelper.md#normalize)

#### Source

[infrastructure/string.ts:115](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L115)

***

### notation()

> **notation**(`source`, `type`): `string`

#### Parameters

• **source**: `string`

• **type**: `"camel"` \| `"pascal"`= `'camel'`

#### Returns

`string`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`notation`](../interfaces/IStringHelper.md#notation)

#### Source

[infrastructure/string.ts:79](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L79)

***

### plural()

> **plural**(`word`, `amount`?): `string`

Returns the plural of an English word.

#### Parameters

• **word**: `string`

• **amount?**: `number`

#### Returns

`string`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`plural`](../interfaces/IStringHelper.md#plural)

#### Export

#### Source

[infrastructure/string.ts:412](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L412)

***

### replace()

> **replace**(`string`, `search`, `replace`): `string`

#### Parameters

• **string**: `string`

• **search**: `string`

• **replace**: `string`

#### Returns

`string`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`replace`](../interfaces/IStringHelper.md#replace)

#### Source

[infrastructure/string.ts:12](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L12)

***

### singular()

> **singular**(`word`, `amount`?): `string`

Returns the singular of an English word.

#### Parameters

• **word**: `string`

• **amount?**: `number`

#### Returns

`string`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`singular`](../interfaces/IStringHelper.md#singular)

#### Export

#### Source

[infrastructure/string.ts:447](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L447)

***

### toString()

> **toString**(`value`): `string`

#### Parameters

• **value**: `any`

#### Returns

`string`

#### Implementation of

[`IStringHelper`](../interfaces/IStringHelper.md).[`toString`](../interfaces/IStringHelper.md#tostring)

#### Source

[infrastructure/string.ts:8](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/string.ts#L8)
