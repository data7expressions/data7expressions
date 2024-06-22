const fs = require('fs')

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt)
	grunt.initConfig({
		originalBranch: '',
		version: '',
		exec: {
			lint: { cmd: 'npx eslint src' },
			test: { cmd: 'npx jest --config jest-unit-config.json' },
			tsc: { cmd: 'npx tsc' },
			doc: { cmd: 'npx typedoc --plugin typedoc-plugin-markdown --out doc/source src/lib/index.ts' },
			standardVersion: { cmd: 'standard-version' }
		},
		clean: {
			build: ['build'],
			dist: ['dist']
		},
		copy: {
			lib: { expand: true, cwd: 'build/lib', src: '**', dest: 'dist/' },
			readme: { expand: true, src: './README.md', dest: 'dist/' },
			license: { expand: true, src: '../LICENSE', dest: 'dist/' },
			jest: { expand: true, src: './jest-config.json', dest: 'dist/' },
			changeLog: { expand: true, src: './CHANGELOG.md', dest: 'dist/' }
		}
	})
	grunt.registerTask('create-package', 'create package.json for dist', function () {
		const package = require('./package.json')
		delete package.devDependencies
		delete package.private
		package.scripts = {
			test: package.scripts.test
		}
		package.main = 'index.js'
		package.types = 'index.d.ts'
		fs.writeFileSync('dist/package.json', JSON.stringify(package, null, 2), 'utf8')
	})
	grunt.registerTask('build-wiki', 'build wiki', function () {
		const task = require('./build/dev/task/buildWiki')
		task.apply(this.async())
	})
	grunt.registerTask('dist', ['clean:dist', 'clean:build', 'exec:tsc', 'exec:lint', 'exec:test', 'exec:doc', 'exec:standardVersion', 'copy:changeLog', 'copy:lib', 'copy:jest', 'copy:readme', 'copy:license', 'create-package'])
	grunt.registerTask('dist', ['clean:dist', 'clean:build', 'exec:tsc', 'build-wiki'])
	grunt.registerTask('release', ['dist', 'doc', 'exec:getOriginalBranch', 'run-release-if-applicable'])
	grunt.registerTask('default', [])
}
