#!/usr/bin/env node
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
const cmd = args._[0]

switch (cmd) {
case 'help':
	require('../commands/help')(args)
	break
case 'version':
	require('../commands/version')(args)
	break
case 'schema':
	require('../commands/schema')(args)
	break
case 'compress':
	require('../commands/compress')(args)
	break
case 'decompress':
	require('../commands/decompress')(args)
	break
default:
	console.error(`"${cmd}" is not a valid command!`)
	require('../commands/help')(args)
	break
}
