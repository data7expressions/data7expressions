import { ISchemaExtender, Schema } from '../model/schema'
import { Helper } from '.'

export class SchemaExtender implements ISchemaExtender {
	public extend (schema: Schema):void {
		if (schema === undefined || schema === null) {
			throw new Error('source is empty')
		}
		if (typeof schema !== 'object') {
			return schema
		}
		if (schema.$defs === undefined || schema.$defs === null) {
			return
		}
		for (const def of Object.values(schema.$defs)) {
			this.extendDef(def as Schema, schema.$defs)
		}
	}

	private extendDef (def: Schema, defs:any): void {
		if (def.$extends) {
			const base = defs[def.$extends] as Schema
			if (base === undefined) {
				throw new Error(`${def.$extends} not found`)
			}
			if (base.$extends) {
				this.extendDef(base, defs)
			}
			// extend
			Helper.obj.extends(def, base)
		}
		// remove since it was already extended
		if (def.$extends) {
			delete def.$extends
		}
	}
}
