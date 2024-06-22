[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / TestHelper

# Class: TestHelper

## Implements

- [`ITestHelper`](../interfaces/ITestHelper.md)

## Constructors

### new TestHelper()

> **new TestHelper**(`utils`, `fs`, `str`, `obj`): [`TestHelper`](TestHelper.md)

#### Parameters

• **utils**: [`IUtils`](../interfaces/IUtils.md)

• **fs**: [`IFsHelper`](../interfaces/IFsHelper.md)

• **str**: [`IStringHelper`](../interfaces/IStringHelper.md)

• **obj**: [`IObjectHelper`](../interfaces/IObjectHelper.md)

#### Returns

[`TestHelper`](TestHelper.md)

#### Source

[infrastructure/test.ts:142](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L142)

## Methods

### createBuilder()

> **createBuilder**(): [`TestBuilder`](TestBuilder.md)

#### Returns

[`TestBuilder`](TestBuilder.md)

#### Implementation of

[`ITestHelper`](../interfaces/ITestHelper.md).[`createBuilder`](../interfaces/ITestHelper.md#createbuilder)

#### Source

[infrastructure/test.ts:149](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L149)

***

### createSuiteBuilder()

> **createSuiteBuilder**(): [`TestSuiteBuilder`](TestSuiteBuilder.md)

#### Returns

[`TestSuiteBuilder`](TestSuiteBuilder.md)

#### Implementation of

[`ITestHelper`](../interfaces/ITestHelper.md).[`createSuiteBuilder`](../interfaces/ITestHelper.md#createsuitebuilder)

#### Source

[infrastructure/test.ts:153](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/test.ts#L153)
