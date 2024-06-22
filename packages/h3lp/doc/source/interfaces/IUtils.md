[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / IUtils

# Interface: IUtils

## Methods

### createContextReplacer()

> **createContextReplacer**(): [`IContextReplacer`](IContextReplacer.md)

#### Returns

[`IContextReplacer`](IContextReplacer.md)

#### Source

[application/utils.ts:22](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L22)

***

### createEnvironmentVariableReplacer()

> **createEnvironmentVariableReplacer**(): [`IReplacer`](IReplacer.md)

#### Returns

[`IReplacer`](IReplacer.md)

#### Source

[application/utils.ts:21](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L21)

***

### exec()

> **exec**(`command`, `cwd`): `Promise`\<`any`\>

#### Parameters

• **command**: `string`

• **cwd**: `string`

#### Returns

`Promise`\<`any`\>

#### Source

[application/utils.ts:10](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L10)

***

### getType()

> **getType**(`value`): `string`

#### Parameters

• **value**: `any`

#### Returns

`string`

#### Source

[application/utils.ts:9](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L9)

***

### hashCode()

> **hashCode**(`text`): `number`

#### Parameters

• **text**: `string`

#### Returns

`number`

#### Source

[application/utils.ts:17](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L17)

***

### implementReplacer()

> **implementReplacer**(`replacer`): `boolean`

#### Parameters

• **replacer**: `any`

#### Returns

`boolean`

#### Source

[application/utils.ts:24](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L24)

***

### isAsync()

> **isAsync**(`func`): `boolean`

#### Parameters

• **func**: `Function`

#### Returns

`boolean`

#### Source

[application/utils.ts:19](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L19)

***

### nvl()

> **nvl**(`value`, `_default`): `any`

#### Parameters

• **value**: `any`

• **\_default**: `any`

#### Returns

`any`

#### Source

[application/utils.ts:13](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L13)

***

### nvl2()

> **nvl2**(`value`, `a`, `b`): `any`

#### Parameters

• **value**: `any`

• **a**: `any`

• **b**: `any`

#### Returns

`any`

#### Source

[application/utils.ts:14](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L14)

***

### randomInteger()

> **randomInteger**(`min`, `max`): `number`

#### Parameters

• **min**: `number`

• **max**: `number`

#### Returns

`number`

#### Source

[application/utils.ts:12](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L12)

***

### sleep()

> **sleep**(`ms`): `Promise`\<`void`\>

#### Parameters

• **ms**: `number`

#### Returns

`Promise`\<`void`\>

#### Source

[application/utils.ts:16](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L16)

***

### solveEnvironmentVars()

> **solveEnvironmentVars**(`source`): `any`

#### Parameters

• **source**: `any`

#### Returns

`any`

#### Source

[application/utils.ts:20](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L20)

***

### template()

> **template**(`template`, `replacer`, `parse`?): `string`

#### Parameters

• **template**: `any`

• **replacer**: `any`

• **parse?**: `boolean`

#### Returns

`string`

#### Source

[application/utils.ts:23](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L23)

***

### toNumber()

> **toNumber**(`value`): `number`

#### Parameters

• **value**: `any`

#### Returns

`number`

#### Source

[application/utils.ts:11](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L11)

***

### tryParse()

> **tryParse**(`value`): `any`

#### Parameters

• **value**: `string`

#### Returns

`any`

#### Source

[application/utils.ts:15](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/utils.ts#L15)
