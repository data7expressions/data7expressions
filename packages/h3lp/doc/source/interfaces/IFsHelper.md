[**Helper**](../README.md) • **Docs**

***

[Helper](../README.md) / IFsHelper

# Interface: IFsHelper

## Methods

### basename()

> **basename**(`sourcePath`): `string`

#### Parameters

• **sourcePath**: `string`

#### Returns

`string`

#### Source

[application/fs.ts:17](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L17)

***

### copy()

> **copy**(`src`, `dest`): `Promise`\<`void`\>

#### Parameters

• **src**: `string`

• **dest**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[application/fs.ts:10](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L10)

***

### create()

> **create**(`sourcePath`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[application/fs.ts:5](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L5)

***

### dirname()

> **dirname**(`sourcePath`): `string`

#### Parameters

• **sourcePath**: `string`

#### Returns

`string`

#### Source

[application/fs.ts:16](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L16)

***

### exists()

> **exists**(`sourcePath`): `Promise`\<`boolean`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Source

[application/fs.ts:4](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L4)

***

### extname()

> **extname**(`sourcePath`): `string`

#### Parameters

• **sourcePath**: `string`

#### Returns

`string`

#### Source

[application/fs.ts:19](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L19)

***

### isDirectory()

> **isDirectory**(`sourcePath`): `Promise`\<`boolean`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Source

[application/fs.ts:15](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L15)

***

### join()

> **join**(...`paths`): `string`

#### Parameters

• ...**paths**: `string`[]

#### Returns

`string`

#### Source

[application/fs.ts:18](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L18)

***

### lstat()

> **lstat**(`sourcePath`): `Promise`\<`Stats`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`Stats`\>

#### Source

[application/fs.ts:13](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L13)

***

### move()

> **move**(`sourcePath`, `destPath`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

• **destPath**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[application/fs.ts:20](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L20)

***

### read()

> **read**(`filePath`): `Promise`\<`null` \| `string`\>

#### Parameters

• **filePath**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Source

[application/fs.ts:7](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L7)

***

### readdir()

> **readdir**(`sourcePath`): `Promise`\<`string`[]\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`string`[]\>

#### Source

[application/fs.ts:14](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L14)

***

### remove()

> **remove**(`sourcePath`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[application/fs.ts:8](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L8)

***

### removeDir()

> **removeDir**(`directoryPath`): `Promise`\<`void`\>

#### Parameters

• **directoryPath**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[application/fs.ts:9](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L9)

***

### resolve()

> **resolve**(`source`): `string`

#### Parameters

• **source**: `string`

#### Returns

`string`

#### Source

[application/fs.ts:6](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L6)

***

### write()

> **write**(`sourcePath`, `content`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

• **content**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[application/fs.ts:11](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L11)

***

### writeBinary()

> **writeBinary**(`sourcePath`, `content`): `Promise`\<`void`\>

#### Parameters

• **sourcePath**: `string`

• **content**: `Buffer`

#### Returns

`Promise`\<`void`\>

#### Source

[application/fs.ts:12](https://github.com/data7expressions/data7expressions/blob/b16c30d7c6ef8837b57b5372523e67937b5f2850/packages/h3lp/src/lib/application/fs.ts#L12)
