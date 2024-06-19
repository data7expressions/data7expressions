import { JsonLight } from '../index'
import { jsonLightHelp } from '../helper'
module.exports = async (args:any) => {
	const input = args.input || args.i
	const type = args.type || args.t
	const output = args.output || args.o
	if (!input) {
		console.error('input is required!')
		return
	}

	let data = JsonLight.json(input)
	if (data === null) {
		const str = await jsonLightHelp.fs.read(input)
		if (str === null) {
			throw new Error(`File ${input} not found`)
		}
		data = JSON.parse(str)
	}

	const decompressed = JsonLight.decompress(data, { type })
	const result = JSON.stringify(decompressed)
	if (output) {
		await jsonLightHelp.fs.write(output, result)
	} else {
		console.log(result)
	}
}
