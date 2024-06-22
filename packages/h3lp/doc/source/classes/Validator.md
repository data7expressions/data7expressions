[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / Validator

# Class: Validator

## Implements

- [`IValidator`](../interfaces/IValidator.md)

## Constructors

### new Validator()

> **new Validator**(): [`Validator`](Validator.md)

#### Returns

[`Validator`](Validator.md)

## Methods

### between()

> **between**(`value`, `from`, `to`): `boolean`

#### Parameters

• **value**: `any`

• **from**: `any`

• **to**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`between`](../interfaces/IValidator.md#between)

#### Source

[infrastructure/validator.ts:160](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L160)

***

### includes()

> **includes**(`list`, `value`): `boolean`

#### Parameters

• **list**: `string` \| `any`[]

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`includes`](../interfaces/IValidator.md#includes)

#### Source

[infrastructure/validator.ts:167](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L167)

***

### isAlpha()

> **isAlpha**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isAlpha`](../interfaces/IValidator.md#isalpha)

#### Source

[infrastructure/validator.ts:135](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L135)

***

### isAlphanumeric()

> **isAlphanumeric**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isAlphanumeric`](../interfaces/IValidator.md#isalphanumeric)

#### Source

[infrastructure/validator.ts:128](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L128)

***

### isArray()

> **isArray**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isArray`](../interfaces/IValidator.md#isarray)

#### Source

[infrastructure/validator.ts:85](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L85)

***

### isBoolean()

> **isBoolean**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isBoolean`](../interfaces/IValidator.md#isboolean)

#### Source

[infrastructure/validator.ts:40](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L40)

***

### isBooleanFormat()

> **isBooleanFormat**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isBooleanFormat`](../interfaces/IValidator.md#isbooleanformat)

#### Source

[infrastructure/validator.ts:103](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L103)

***

### isDate()

> **isDate**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isDate`](../interfaces/IValidator.md#isdate)

#### Source

[infrastructure/validator.ts:63](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L63)

***

### isDateFormat()

> **isDateFormat**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isDateFormat`](../interfaces/IValidator.md#isdateformat)

#### Source

[infrastructure/validator.ts:142](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L142)

***

### isDateTime()

> **isDateTime**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isDateTime`](../interfaces/IValidator.md#isdatetime)

#### Source

[infrastructure/validator.ts:74](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L74)

***

### isDateTimeFormat()

> **isDateTimeFormat**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isDateTimeFormat`](../interfaces/IValidator.md#isdatetimeformat)

#### Source

[infrastructure/validator.ts:149](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L149)

***

### isDecimal()

> **isDecimal**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isDecimal`](../interfaces/IValidator.md#isdecimal)

#### Source

[infrastructure/validator.ts:52](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L52)

***

### isDecimalFormat()

> **isDecimalFormat**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isDecimalFormat`](../interfaces/IValidator.md#isdecimalformat)

#### Source

[infrastructure/validator.ts:121](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L121)

***

### isEmpty()

> **isEmpty**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isEmpty`](../interfaces/IValidator.md#isempty)

#### Source

[infrastructure/validator.ts:16](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L16)

***

### isInteger()

> **isInteger**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isInteger`](../interfaces/IValidator.md#isinteger)

#### Source

[infrastructure/validator.ts:48](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L48)

***

### isIntegerFormat()

> **isIntegerFormat**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isIntegerFormat`](../interfaces/IValidator.md#isintegerformat)

#### Source

[infrastructure/validator.ts:114](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L114)

***

### isNotEmpty()

> **isNotEmpty**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isNotEmpty`](../interfaces/IValidator.md#isnotempty)

#### Source

[infrastructure/validator.ts:36](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L36)

***

### isNotNull()

> **isNotNull**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isNotNull`](../interfaces/IValidator.md#isnotnull)

#### Source

[infrastructure/validator.ts:32](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L32)

***

### isNull()

> **isNull**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isNull`](../interfaces/IValidator.md#isnull)

#### Source

[infrastructure/validator.ts:28](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L28)

***

### isNumber()

> **isNumber**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isNumber`](../interfaces/IValidator.md#isnumber)

#### Source

[infrastructure/validator.ts:44](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L44)

***

### isNumberFormat()

> **isNumberFormat**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isNumberFormat`](../interfaces/IValidator.md#isnumberformat)

#### Source

[infrastructure/validator.ts:110](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L110)

***

### isObject()

> **isObject**(`obj`): `boolean`

#### Parameters

• **obj**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isObject`](../interfaces/IValidator.md#isobject)

#### Source

[infrastructure/validator.ts:12](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L12)

***

### isPositiveInteger()

> **isPositiveInteger**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isPositiveInteger`](../interfaces/IValidator.md#ispositiveinteger)

#### Source

[infrastructure/validator.ts:20](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L20)

***

### isString()

> **isString**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isString`](../interfaces/IValidator.md#isstring)

#### Source

[infrastructure/validator.ts:56](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L56)

***

### isTime()

> **isTime**(`value`): `boolean`

#### Parameters

• **value**: `any`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isTime`](../interfaces/IValidator.md#istime)

#### Source

[infrastructure/validator.ts:92](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L92)

***

### isTimeFormat()

> **isTimeFormat**(`value`): `boolean`

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`IValidator`](../interfaces/IValidator.md).[`isTimeFormat`](../interfaces/IValidator.md#istimeformat)

#### Source

[infrastructure/validator.ts:153](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/validator.ts#L153)
