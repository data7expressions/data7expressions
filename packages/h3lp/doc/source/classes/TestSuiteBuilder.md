[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / TestSuiteBuilder

# Class: TestSuiteBuilder

## Implements

- [`ITestSuiteBuilder`](../interfaces/ITestSuiteBuilder.md)

## Constructors

### new TestSuiteBuilder()

> **new TestSuiteBuilder**(`utils`, `fs`, `obj`): [`TestSuiteBuilder`](TestSuiteBuilder.md)

#### Parameters

• **utils**: [`IUtils`](../interfaces/IUtils.md)

• **fs**: [`IFsHelper`](../interfaces/IFsHelper.md)

• **obj**: [`IObjectHelper`](../interfaces/IObjectHelper.md)

#### Returns

[`TestSuiteBuilder`](TestSuiteBuilder.md)

#### Source

[infrastructure/test.ts:9](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L9)

## Methods

### add()

> **add**(`test`): [`ITestSuiteBuilder`](../interfaces/ITestSuiteBuilder.md)

#### Parameters

• **test**: [`IBuildTest`](../interfaces/IBuildTest.md)

#### Returns

[`ITestSuiteBuilder`](../interfaces/ITestSuiteBuilder.md)

#### Implementation of

[`ITestSuiteBuilder`](../interfaces/ITestSuiteBuilder.md).[`add`](../interfaces/ITestSuiteBuilder.md#add)

#### Source

[infrastructure/test.ts:13](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L13)

***

### build()

> **build**(`path`): `Promise`\<`void`\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITestSuiteBuilder`](../interfaces/ITestSuiteBuilder.md).[`build`](../interfaces/ITestSuiteBuilder.md#build)

#### Source

[infrastructure/test.ts:18](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L18)
