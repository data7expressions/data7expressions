[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / Utils

# Class: Utils

## Implements

- [`IUtils`](../interfaces/IUtils.md)

## Constructors

### new Utils()

> **new Utils**(`validator`, `obj`): [`Utils`](Utils.md)

#### Parameters

• **validator**: [`IValidator`](../interfaces/IValidator.md)

• **obj**: [`IObjectHelper`](../interfaces/IObjectHelper.md)

#### Returns

[`Utils`](Utils.md)

#### Source

[infrastructure/utils.ts:7](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L7)

## Methods

### createContextReplacer()

> **createContextReplacer**(): [`ContextReplacer`](ContextReplacer.md)

#### Returns

[`ContextReplacer`](ContextReplacer.md)

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`createContextReplacer`](../interfaces/IUtils.md#createcontextreplacer)

#### Source

[infrastructure/utils.ts:106](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L106)

***

### createEnvironmentVariableReplacer()

> **createEnvironmentVariableReplacer**(): [`EnvironmentVariableReplacer`](EnvironmentVariableReplacer.md)

#### Returns

[`EnvironmentVariableReplacer`](EnvironmentVariableReplacer.md)

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`createEnvironmentVariableReplacer`](../interfaces/IUtils.md#createenvironmentvariablereplacer)

#### Source

[infrastructure/utils.ts:102](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L102)

***

### escapeShell()

> **escapeShell**(`cmd`): `string`

#### Parameters

• **cmd**: `string`

#### Returns

`string`

#### Source

[infrastructure/utils.ts:18](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L18)

***

### exec()

> **exec**(`cmd`, `cwd`): `Promise`\<`any`\>

#### Parameters

• **cmd**: `string`

• **cwd**: `string`= `undefined`

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`exec`](../interfaces/IUtils.md#exec)

#### Source

[infrastructure/utils.ts:22](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L22)

***

### getType()

> **getType**(`value`): `string`

#### Parameters

• **value**: `any`

#### Returns

`string`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`getType`](../interfaces/IUtils.md#gettype)

#### Source

[infrastructure/utils.ts:9](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L9)

***

### hashCode()

> **hashCode**(`text`): `number`

#### Parameters

• **text**: `string`

#### Returns

`number`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`hashCode`](../interfaces/IUtils.md#hashcode)

#### Source

[infrastructure/utils.ts:72](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L72)

***

### implementReplacer()

> **implementReplacer**(`replacer`): `boolean`

#### Parameters

• **replacer**: `any`

#### Returns

`boolean`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`implementReplacer`](../interfaces/IUtils.md#implementreplacer)

#### Source

[infrastructure/utils.ts:120](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L120)

***

### isAsync()

> **isAsync**(`func`): `boolean`

#### Parameters

• **func**: `Function`

#### Returns

`boolean`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`isAsync`](../interfaces/IUtils.md#isasync)

#### Source

[infrastructure/utils.ts:84](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L84)

***

### nvl()

> **nvl**(`value`, `_default`): `any`

#### Parameters

• **value**: `any`

• **\_default**: `any`

#### Returns

`any`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`nvl`](../interfaces/IUtils.md#nvl)

#### Source

[infrastructure/utils.ts:50](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L50)

***

### nvl2()

> **nvl2**(`value`, `a`, `b`): `any`

#### Parameters

• **value**: `any`

• **a**: `any`

• **b**: `any`

#### Returns

`any`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`nvl2`](../interfaces/IUtils.md#nvl2)

#### Source

[infrastructure/utils.ts:54](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L54)

***

### randomInteger()

> **randomInteger**(`min`, `max`): `number`

Random integer between 2 numbers

#### Parameters

• **min**: `number`

• **max**: `number`

#### Returns

`number`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`randomInteger`](../interfaces/IUtils.md#randominteger)

#### Source

[infrastructure/utils.ts:46](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L46)

***

### sleep()

> **sleep**(`ms`): `Promise`\<`void`\>

#### Parameters

• **ms**: `number`= `1000`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`sleep`](../interfaces/IUtils.md#sleep)

#### Source

[infrastructure/utils.ts:66](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L66)

***

### solveEnvironmentVars()

> **solveEnvironmentVars**(`source`): `any`

#### Parameters

• **source**: `any`

#### Returns

`any`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`solveEnvironmentVars`](../interfaces/IUtils.md#solveenvironmentvars)

#### Source

[infrastructure/utils.ts:98](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L98)

***

### template()

> **template**(`template`, `replacer`, `parse`): `string`

#### Parameters

• **template**: `any`

• **replacer**: `any`

• **parse**: `boolean`= `false`

#### Returns

`string`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`template`](../interfaces/IUtils.md#template)

#### Source

[infrastructure/utils.ts:110](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L110)

***

### toNumber()

> **toNumber**(`value`): `number`

#### Parameters

• **value**: `any`

#### Returns

`number`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`toNumber`](../interfaces/IUtils.md#tonumber)

#### Source

[infrastructure/utils.ts:36](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L36)

***

### tryParse()

> **tryParse**(`value`): `any`

#### Parameters

• **value**: `string`

#### Returns

`any`

#### Implementation of

[`IUtils`](../interfaces/IUtils.md).[`tryParse`](../interfaces/IUtils.md#tryparse)

#### Source

[infrastructure/utils.ts:58](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/utils.ts#L58)
