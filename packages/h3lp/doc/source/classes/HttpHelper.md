[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / HttpHelper

# Class: HttpHelper

## Implements

- [`IHttpHelper`](../interfaces/IHttpHelper.md)

## Constructors

### new HttpHelper()

> **new HttpHelper**(`str`): [`HttpHelper`](HttpHelper.md)

#### Parameters

• **str**: [`IStringHelper`](../interfaces/IStringHelper.md)

#### Returns

[`HttpHelper`](HttpHelper.md)

#### Source

[infrastructure/http.ts:7](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/http.ts#L7)

## Methods

### decode()

> **decode**(`source`): `string`

#### Parameters

• **source**: `string`

#### Returns

`string`

#### Implementation of

[`IHttpHelper`](../interfaces/IHttpHelper.md).[`decode`](../interfaces/IHttpHelper.md#decode)

#### Source

[infrastructure/http.ts:42](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/http.ts#L42)

***

### get()

> **get**(`uri`): `Promise`\<`any`\>

#### Parameters

• **uri**: `any`

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IHttpHelper`](../interfaces/IHttpHelper.md).[`get`](../interfaces/IHttpHelper.md#get)

#### Source

[infrastructure/http.ts:9](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/http.ts#L9)

***

### urlJoin()

> **urlJoin**(`source`, `path`): `string`

#### Parameters

• **source**: `string`

• **path**: `string`

#### Returns

`string`

#### Implementation of

[`IHttpHelper`](../interfaces/IHttpHelper.md).[`urlJoin`](../interfaces/IHttpHelper.md#urljoin)

#### Source

[infrastructure/http.ts:60](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/http.ts#L60)
