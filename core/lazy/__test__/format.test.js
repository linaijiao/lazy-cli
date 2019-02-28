const createProject = require('@linaj/test-utils/createProject')

test('cjs-format-cli', async () => {
  const project = await createProject({ name: 'cjs-format-cli' })
  await project.write('index.js', 'export default 123')
  await project.run('lazy --format cjs')
  expect(project.files).toMatchSnapshot()
  expect(project.require('dist/index.js')).toEqual({ default: 123 })
})

test('cjs-format-config', async () => {
  const project = await createProject({ name: 'cjs-format-config' })
  await Promise.all([
    project.write('index.js', 'export default 123'),
    project.write('lazy.config.js', 'exports.output = { format: "cjs" }')
  ])
  await project.run('lazy')
  expect(project.files).toMatchSnapshot()
  expect(project.require('dist/index.js')).toEqual({ default: 123 })
})

test('umd-format-cli', async () => {
  const project = await createProject({ name: 'umd-format-cli' })
  await project.write('index.js', 'export default 123')
  await project.run('lazy --format umd --module-name Foo')
  expect(project.files).toMatchSnapshot()
  expect(project.require('dist/index.js')).toEqual({ default: 123 })
})

test('umd-format-config', async () => {
  const project = await createProject({ name: 'umd-format-config' })
  await Promise.all([
    project.write('index.js', 'export default 123'),
    project.write(
      'lazy.config.js',
      'exports.output = { format: "umd", moduleName: "Foo" }'
    )
  ])
  await project.run('lazy')
  expect(project.files).toMatchSnapshot()
  expect(project.require('dist/index.js')).toEqual({ default: 123 })
})
