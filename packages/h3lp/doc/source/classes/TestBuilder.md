[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / TestBuilder

# Class: TestBuilder

## Implements

- [`ITestBuilder`](../interfaces/ITestBuilder.md)

## Constructors

### new TestBuilder()

> **new TestBuilder**(`utils`, `fs`, `str`): [`TestBuilder`](TestBuilder.md)

#### Parameters

• **utils**: [`IUtils`](../interfaces/IUtils.md)

• **fs**: [`IFsHelper`](../interfaces/IFsHelper.md)

• **str**: [`IStringHelper`](../interfaces/IStringHelper.md)

#### Returns

[`TestBuilder`](TestBuilder.md)

#### Source

[infrastructure/test.ts:65](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L65)

## Methods

### add()

> **add**(`info`): [`TestBuilder`](TestBuilder.md)

#### Parameters

• **info**: [`TestBuildInfo`](../interfaces/TestBuildInfo.md)

#### Returns

[`TestBuilder`](TestBuilder.md)

#### Implementation of

[`ITestBuilder`](../interfaces/ITestBuilder.md).[`add`](../interfaces/ITestBuilder.md#add)

#### Source

[infrastructure/test.ts:68](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L68)

***

### build()

> **build**(`path`): `Promise`\<`void`\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITestBuilder`](../interfaces/ITestBuilder.md).[`build`](../interfaces/ITestBuilder.md#build)

#### Source

[infrastructure/test.ts:73](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L73)
