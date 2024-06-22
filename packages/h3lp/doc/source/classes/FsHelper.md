[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / FsHelper

# Class: FsHelper

## Implements

- [`IFsHelper`](../interfaces/IFsHelper.md)

## Constructors

### new FsHelper()

> **new FsHelper**(): [`FsHelper`](FsHelper.md)

#### Returns

[`FsHelper`](FsHelper.md)

## Methods

### basename()

> **basename**(`sourcePath`): `string`

#### Parameters

• **sourcePath**: `string`

#### Returns

`string`

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`basename`](../interfaces/IFsHelper.md#basename)

#### Source

[infrastructure/fs.ts:23](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L23)

***

### copy()

> **copy**(`src`, `dest`): `Promise`\<`void`\>

#### Parameters

• **src**: `string`

• **dest**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`copy`](../interfaces/IFsHelper.md#copy)

#### Source

[infrastructure/fs.ts:103](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L103)

***

### create()

> **create**(`sourcePath`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`create`](../interfaces/IFsHelper.md#create)

#### Source

[infrastructure/fs.ts:46](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L46)

***

### dirname()

> **dirname**(`sourcePath`): `string`

#### Parameters

• **sourcePath**: `string`

#### Returns

`string`

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`dirname`](../interfaces/IFsHelper.md#dirname)

#### Source

[infrastructure/fs.ts:19](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L19)

***

### exists()

> **exists**(`sourcePath`): `Promise`\<`boolean`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`exists`](../interfaces/IFsHelper.md#exists)

#### Source

[infrastructure/fs.ts:6](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L6)

***

### extname()

> **extname**(`sourcePath`): `string`

#### Parameters

• **sourcePath**: `string`

#### Returns

`string`

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`extname`](../interfaces/IFsHelper.md#extname)

#### Source

[infrastructure/fs.ts:31](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L31)

***

### isDirectory()

> **isDirectory**(`sourcePath`): `Promise`\<`boolean`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`isDirectory`](../interfaces/IFsHelper.md#isdirectory)

#### Source

[infrastructure/fs.ts:154](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L154)

***

### join()

> **join**(...`paths`): `string`

#### Parameters

• ...**paths**: `string`[]

#### Returns

`string`

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`join`](../interfaces/IFsHelper.md#join)

#### Source

[infrastructure/fs.ts:27](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L27)

***

### lstat()

> **lstat**(`sourcePath`): `Promise`\<`Stats`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`Stats`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`lstat`](../interfaces/IFsHelper.md#lstat)

#### Source

[infrastructure/fs.ts:136](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L136)

***

### move()

> **move**(`sourcePath`, `destPath`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

• **destPath**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`move`](../interfaces/IFsHelper.md#move)

#### Source

[infrastructure/fs.ts:35](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L35)

***

### read()

> **read**(`filePath`): `Promise`\<`null` \| `string`\>

#### Parameters

• **filePath**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`read`](../interfaces/IFsHelper.md#read)

#### Source

[infrastructure/fs.ts:65](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L65)

***

### readdir()

> **readdir**(`sourcePath`): `Promise`\<`string`[]\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`readdir`](../interfaces/IFsHelper.md#readdir)

#### Source

[infrastructure/fs.ts:145](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L145)

***

### remove()

> **remove**(`sourcePath`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`remove`](../interfaces/IFsHelper.md#remove)

#### Source

[infrastructure/fs.ts:75](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L75)

***

### removeDir()

> **removeDir**(`directoryPath`): `Promise`\<`void`\>

#### Parameters

• **directoryPath**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`removeDir`](../interfaces/IFsHelper.md#removedir)

#### Source

[infrastructure/fs.ts:83](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L83)

***

### resolve()

> **resolve**(`source`): `string`

#### Parameters

• **source**: `string`

#### Returns

`string`

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`resolve`](../interfaces/IFsHelper.md#resolve)

#### Source

[infrastructure/fs.ts:54](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L54)

***

### write()

> **write**(`sourcePath`, `content`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

• **content**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`write`](../interfaces/IFsHelper.md#write)

#### Source

[infrastructure/fs.ts:114](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L114)

***

### writeBinary()

> **writeBinary**(`sourcePath`, `content`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

• **content**: `Buffer`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFsHelper`](../interfaces/IFsHelper.md).[`writeBinary`](../interfaces/IFsHelper.md#writebinary)

#### Source

[infrastructure/fs.ts:125](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/infrastructure/fs.ts#L125)
